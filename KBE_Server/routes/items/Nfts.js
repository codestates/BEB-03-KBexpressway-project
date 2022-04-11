const { Nfts } = require('../../src/db/models');

module.exports = async (req, res) => {
    const col_id = req.params.col_id;
    if (col_id == 0) {
        const nfts = await Nfts.findAll();
        res.status(200).send(nfts);
    }
    else {
        const nfts = await Nfts.findAll({
            where: {
                collections_id: col_id
            }
        });
        if (nfts) {
            res.status(200).send(nfts);
        }
        else {
            res.status(404).send('No nfts found');
        }
    }
};
