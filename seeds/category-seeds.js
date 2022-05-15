const {Category}= require('../models');
// Create seed data in "Category"
const categoryData=[
    {
        category_name:'Oil'
    },
    {
        category_name:'Acrylic'
    },
    {
        category_name:'Charcoal'
    },
    {
        category_name:'Pastels'
    },
    {
        category_name:'Photography'
    },
    {
        category_name:'Watercolor'
    },
    {
        category_name:'Pen'
    },
];
// Create seedCategories object to hold the function of adding multiple rows at once in Category.js
const seedCategories = ()=> Category.bulkCreate(categoryData);
module.exports = seedCategories;