const { Collections } = require('../../src/db/models');

module.exports = async (req, res) => {
    const collections = await Collections.findAll();
    if (collections) {
        const payload = collections.map(collection => {
            return {
                id: collection.id,
                name: collection.name,
                description: collection.description,
                image: collection.image
            }
        });
        res.status(200).send({data : payload, message: 'Successful Response'});
    } else {
        res.status(404).send('No collections found');
    }
};
