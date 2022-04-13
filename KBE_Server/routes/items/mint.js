const { Nfts, Collections, MarketLogs } = require('../../src/db/models');

module.exports = async (req, res) => {

    const data = req.body;

    if (!data.ipfs || !data.price || !data.account) {
        return res.status(422).send("Validation Error");
    };

    if (!data.collectionId) {
        data.collectionId = 1;
    }

    if (!data.saleToken) {
        data.saleToken = "WETH";
    }

    let createdNft;
    try {
        createdNft = await Nfts.create({
            collectionId: data.collectionId,
            ipfs: data.ipfs,
            creater_account: data.account,
            owner_account: data.account
        });
    } catch (err) {
        return res.status(err.status || 500).send({message: err.message || 'failed to create nft on DB'});
    }

    let createdMarketLog;
    try {
        createdMarketLog = await MarketLogs.create({
            nftId: createdNft.id,
            seller_account: data.account,
            sale_price: data.price,
            sale_token: data.saleToken,
            status_code: 3,
            buyer_account: null,
            transaction_hash: null,
            transactedAt: null
        });
    } catch (err) {
        return res.status(err.status || 500).send({message: err.message || 'failed to create marketlog on DB'});
    }

    const payload = {createdNft : createdNft, createdMarketLog : createdMarketLog};

    res.status(200).send({data : payload, message: 'Successful Response'});
};

// async function createNft(data) {
//     try {
//         return await Nfts.create({
//             collectionId: data.collectionId,
//             ipfs: data.ipfs,
//             creater_account: data.account,
//             owner_account: data.account
//         });
//     } catch (err) {
//         return err
//     }
// }

// async function createMarketLog(data, nft) {
//     return await MarketLogs.create({
//         nftId: nft.id,
//         seller_account: data.account,
//         sale_price: data.price,
//         sale_token: data.saleToken,
//         status_code: 3,
//         buyer_account: null,
//         transaction_hash: null,
//         transactedAt: null
//     });
// }