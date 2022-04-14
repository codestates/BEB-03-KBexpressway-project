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
            // 클론코딩이고 데이터가 얼마 없어서 nft 마다 쿼리 날리는것보다 그냥 다 가져와서 필터링해서 쓰는게 편할듯.
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

                if (onMarket_integrity_checker == true) {
                    console.log(`there is a integrity Issue of MarketLogs at (id : ${marketlog.dataValues.id})`);
                };

                onMarket_integrity_checker = true;
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

        let onMarketLog = [];

        // onMarket log 찾기 // 이렇게 주는게 프론트에서 더 편할듯
            // 혹시 잘못되서 여러개 있는 경우에도 마지막 마켓 로그를 넘겨줄 수 있도록 했다.
            // 여러개 있는것은 위에서 체크된걸로 확인 될테니 일단은 응답을 주고 데이더베이스 무결성은 후에 고치면 된다. 그동안에도 클라이언트는 문제없이 서비스를 이용할 수 있을것. 하지만 그런일은 안생길것이다:)
        if (onMarket !== 0) {
            onMarketLog = marketlogs_payload.filter(marketlog => marketlog.status_code === onMarket);
        }

        // history 만들기 // 프론트에서 이렇게 받는게 더 필요할듯
        const history = marketlogs_payload.filter(marketlog => marketlog.status_code === 2 || marketlog.status_code === 4 || marketlog.status_code === 5);

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
            onMarketLog: onMarketLog[onMarketLog.length-1],
            history: history
        }
    });
    return result;
}