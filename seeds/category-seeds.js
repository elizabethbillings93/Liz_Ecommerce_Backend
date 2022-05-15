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
        category_name:'Pastel'
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
// Create seedCategories object to hold the function of bulk creating the data about into a string applied to Category.js
const seedCategories = ()=> Category.bulkCreate(categoryData);
module.exports = seedCategories;