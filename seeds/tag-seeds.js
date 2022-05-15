const {Tag}= require('../models');
// This will be used to connect to product & product tags
const tagData=[
    {
        tag_name:'Color',
    },
    {
        tag_name:'B & W',
    }
];

const seedTags = () => Tag.bulkCreate(tagData);
module.exports = seedTags;