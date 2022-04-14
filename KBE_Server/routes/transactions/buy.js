const { Nfts, Collections, MarketLogs } = require('../../src/db/models');

module.exports = async (req, res) => {

    const data = req.body;
    
    // 요청 바디 체크
    if (!data.nftId || !data.transactionHash || !data.buyerAccount || !data.onMarketLogId) {
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
    const alExTx = await MarketLogs.findOne({ where: { transaction_hash: data.transactionHash } })
    if (alExTx) {
        return res.status(422).send("Duplicate TransactionHash");
    }

    // 블록체인 네트워크에서 트렌젝션 확인하는것 구현해보기 (실제로는 트렌젝션이 완료되기까지 시간이 좀 걸리기 때문에 일단 DB업데이트 하고 일정 시간 뒤에 트렌젝션을 확인해서 문제가 있을때만 조치를 취하는게 현실적일것 같다.)

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
                    transaction_hash: data.transactionHash,
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