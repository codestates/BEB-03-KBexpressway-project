const { Nfts, Collections, MarketLogs } = require('../../src/db/models');
const { Op } = require('sequelize');

const Web3 = require("web3");
require('dotenv').config();

const ApiKey = process.env.INFURA_PROJECTID;
const rpcURL = `https://ropsten.infura.io/v3/${ApiKey}`;

const web3 = new Web3(rpcURL);

module.exports = async (req, res) => {

    const data = req.body;
    
    // 요청 바디 체크
    if (!data.nftId || !data.paymentTransactionHash || !data.nftTransactionHash || !data.buyerAccount || !data.onMarketLogId) {
        return res.status(422).send("Validation Error");
    };

    // 정상적인 구매 처리인지 확인
    // 정상적인 토큰인가?
    const nft = await Nfts.findByPk(data.nftId);
    if (!nft) {
        return res.status(422).send("NFT not found");
    };

    // marketLogId 는 이 토큰의 것이고 판매중인가?
    const marketLog = await MarketLogs.findByPk(data.onMarketLogId);
    if (!marketLog) {
        return res.status(422).send("MarketLog not found");
    }
    else if (marketLog.nftId !== data.nftId) {
        return res.status(404).send("Wrong Biding");
    }
    else if (marketLog.status_code !== 1 && marketLog.status_code !== 3) {
        return res.status(404).send("Wrong MarketLog");
    }
    // transactionHash 값이 혹시 중복된 값은 아닌가?
    const alExTx = await MarketLogs.findOne({ where: { [Op.or]: [
        { nft_transaction_hash: data.nftTransactionHash },
        { nft_transaction_hash: data.paymentTransactionHash },
        { payment_transaction_hash: data.nftTransactionHash },
        { payment_transaction_hash: data.paymentTransactionHash }
    ] } })
    if (alExTx) {
        return res.status(422).send("Duplicate TransactionHash");
    }

    // 블록체인 네트워크에서 트렌젝션 확인 (nft, 지불) // 불필요한 과정으로 요청처리가 느려지는것 같지만 넣어봄
    if (ApiKey) {
        const nftTx = await web3.eth.getTransaction(data.nftTransactionHash);
        const paymentTx = await web3.eth.getTransaction(data.paymentTransactionHash);
        if (!nftTx || !paymentTx) {
            return res.status(422).send("Transaction not found on Network");
        }
        else {
            // // 구매자의 지갑에서 지불한 금액이 정상적인지 확인
            // const paymentAmount = await web3.utils.fromWei(paymentTx.value, 'ether');
            // if (paymentAmount !== marketLog.price) {
            //     return res.status(422).send("Wrong Payment Amount");
            // }
            // // 두 트랜젝션의 account 가 일치하는지 확인, 마켓 로그와도 확안?
            // if (nftTx.from !== paymentTx.to || ) {
            //     return res.status(422).send("Wrong Transaction Account");
            // }

        }
    };

    // Nfts 업데이트
    let updatedNft;
    try {
        await Nfts.update(
            { owner_account: data.buyerAccount },
            { where: { id: data.nftId } }
        ).then( async () => {
            return updatedNft = await Nfts.findByPk(data.nftId);
        })
    } catch (err) {
        return res.status(err.status || 500).send({message: err.message || 'failed to update nft on DB'});
    }

    // MarketLogs 업데이트
    let updatedMarketLog;
    try {
        updatedMarketLog = await MarketLogs.findByPk(data.onMarketLogId)
            .then( async (marketLog) => { await marketLog.increment('status_code', { by: 1 }); await marketLog.reload(); return marketLog; })
            .then(marketLog => { marketLog.update({
                    buyer_account: data.buyerAccount,
                    nft_transaction_hash: data.nftTransactionHash,
                    payment_transaction_hash: data.paymentTransactionHash,
                    transactedAt: new Date()
                });
                return marketLog;
            });
    } catch (err) {
        return res.status(err.status || 500).send({message: err.message || 'failed to update marketlog on DB'});
    }

    const payload = {updatedNft : updatedNft, updatedMarketLog : updatedMarketLog};

    res.status(200).send({data : payload, message: 'Successful Response'});
};