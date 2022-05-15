const {Product} = require('../models');
const productData=[
    // 1
    {
        product_name:'Black Oil Paint',
        price: 10.00,
        stock:20,
        category_id:1,
    },
    // 2
    {
        product_name:'White Oil Paint',
        price: 10.00,
        stock:9,
        category_id:1,
    },
    // 3
    {
        product_name:'Blue Oil Paint',
        price: 10.00,
        stock:15,
        category_id:1,
    },
    // 4
    {
        product_name:'Red Oil Paint',
        price: 10.00,
        stock:10,
        category_id:1,
    },
    // 5
    {
        product_name:'Yellow Oil Paint',
        price: 10.00,
        stock:30,
        category_id:1,
    },
    // 6
    {
        product_name:'White Acrylic Paint',
        price: 5.00,
        stock:20,
        category_id:2,
    },
    // 7
    {
        product_name:'Black Acrylic Paint',
        price: 5.00,
        stock:10,
        category_id:2,
    },
    // 8
    {
        product_name:'Yellow Acrylic Paint',
        price: 5.00,
        stock:50,
        category_id:2,
    },
    // 9
    {
        product_name:'Red Acrylic Paint',
        price: 5.00,
        stock:0,
        category_id:2,
    },
    // 8
    {
        product_name:'Blue Acrylic Paint',
        price: 5.00,
        stock:10,
        category_id:2,
    },
    // 9
    {
        product_name:'Lump Charcoal',
        price: 10.00,
        stock:30,
        category_id:3,
    },
    // 10
    {
        product_name:'Charcoal Pencil',
        price: 30.00,
        stock:5,
        category_id:3,
    },
    // 11
    {
        product_name:'Coconut Shell Charcoal',
        price: 50.00,
        stock:1,
        category_id:3,
    },
    // 12
    {
        product_name:'Rainbow Pastels',
        price: 40.00,
        stock:10,
        category_id:4,
    },
    // 13
    {
        product_name:'White Pastels',
        price: 5.00,
        stock:20,
        category_id:4,
    },
    // 14
    {
        product_name:'Color Film',
        price: 30.00,
        stock:10,
        category_id:5,
    },
    // 15
    {
        product_name:'B&W Film',
        price: 50.00,
        stock:20,
        category_id:5,
    },
    // 16
    {
        product_name:'Watercolor Paint Set',
        price: 40.00,
        stock:10,
        category_id:6,
    },
    // 17
    {
        product_name:'Primary Color Paint Set',
        price: 40.00,
        stock:10,
        category_id:6,
    },
    // 18
    {
        product_name:'Variety Bold Pencils',
        price: 30.00,
        stock:10,
        category_id:7,
    },
    // 19
    {
        product_name:'1-8B Pencils',
        price: 10.00,
        stock:10,
        category_id:7,
    },
    // 20
    {
        product_name:'1-8H Pencils',
        price: 20.00,
        stock:10,
        category_id:7,
    },
];
// Create seedProducts object to hold the function of adding multiple rows at once in Product.js
const seedProducts=()=> Product.bulkCreate(productData);
module.exports= seedProducts;