const { Collections } = require('../../src/db/models');

module.exports = async (req, res) => {
    const collections = await Collections.findAll();
    if (collections) {
        res.status(200).send(collections);
    } else {
        res.status(404).send('No collections found');
    }
};
