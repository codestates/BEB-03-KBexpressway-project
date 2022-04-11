const { Nfts, Collections } = require('../../src/db/models');

module.exports = async (req, res) => {
    const col_id = req.params.col_id;
    if (col_id == 0) {
        const nfts = await Nfts.findAll();
        const collections = await Collections.findAll();

        const payload = makePayload(nfts, collections);

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

            const payload = makePayload(nfts, collections);

            res.status(200).send({data : payload, message: 'Successful Response'});
        }
        else {
            res.status(404).send('No nfts found');
        }
    }
};

function makePayload(nfts, collections) {
    const result = nfts.map(nft => {
        let collection = collections.find(collection => collection.dataValues.id == nft.dataValues.collectionId);
        return {
            id: nft.id,
            collection_id: collection.dataValues.id,
            collection_name: collection.dataValues.name,
            collection_description: collection.dataValues.description,
            collection_image: collection.dataValues.image,
            contract_address: nft.contract_address,
            ipfs: nft.ipfs,
            creater_account: nft.creater_account,
            owner_account: nft.owner_account
        }
    });
    return result;
}