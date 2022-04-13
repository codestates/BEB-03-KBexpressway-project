const { Nfts, Collections, MarketLogs } = require('../../src/db/models');

module.exports = async (req, res) => {
    const col_id = req.params.col_id;
    if (col_id == 0) {
        const nfts = await Nfts.findAll();
        const collections = await Collections.findAll();
        const marketlogs = await MarketLogs.findAll();

        const payload = makePayload(nfts, collections, marketlogs);

        res.status(200).send({data : payload, message: 'Successful Response'});
    }
    else {
        const nfts = await Nfts.findAll({
            where: {
                collections_id: col_id
            }
        });
        if (nfts.length > 0) {
            const collections = await Collections.findAll();
            const marketlogs = await MarketLogs.findAll();

            const payload = makePayload(nfts, collections, marketlogs);

            res.status(200).send({data : payload, message: 'Successful Response'});
        }
        else {
            res.status(404).send('No nfts found');
        }
    }
};

function makePayload(nfts, collections, marketlogs) {
    const result = nfts.map(nft => {
        const collection = collections.find(collection => collection.dataValues.id == nft.dataValues.collectionId);
        const filtered_marketlogs = marketlogs.filter(marketlog => marketlog.dataValues.nftId == nft.dataValues.id);

        let onMarket = 0;
        let onMarket_integrity_checker = false;

        const marketlogs_payload = filtered_marketlogs.map(marketlog => {

            if (marketlog.dataValues.status_code == 1 || marketlog.dataValues.status_code == 3) {
                onMarket = marketlog.dataValues.status_code;

                if (onMarket_integrity_checker == false) {
                    onMarket_integrity_checker = true;
                } 
                else {
                    console.log(`there is a integrity Issue of MarketLogs at (id : ${marketlog.dataValues.id})`);
                };
            };

            return {
                id: marketlog.dataValues.id,
                nftId: marketlog.dataValues.nftId,
                seller_account: marketlog.dataValues.seller_account,
                sale_price: marketlog.dataValues.sale_price,
                sale_token: marketlog.dataValues.sale_token,
                status_code: marketlog.dataValues.status_code,
                buyer_account: marketlog.dataValues.buyer_account,
                transaction_hash: marketlog.dataValues.transaction_hash,
                transactedAt: marketlog.dataValues.transactedAt
            }
        });

        return {
            id: nft.id,
            collection_id: collection.dataValues.id,
            collection_name: collection.dataValues.name,
            collection_description: collection.dataValues.description,
            collection_image: collection.dataValues.image,
            ipfs: nft.ipfs,
            creater_account: nft.creater_account,
            owner_account: nft.owner_account,
            onMarket: onMarket,
            marketlog: marketlogs_payload
        }
    });
    return result;
}