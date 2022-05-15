const router = require('express').Router();
const { json } = require('express/lib/response');
// Create object that pulls in Category and Product
const { Category, Product } = require('../../models');
// The `/api/categories` endpoint

// Finding all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((data)=>res.json(data));
});

// Finding category by id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((data)=> json(data));
});

// Create Category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((data)=> res.json(data));
});

// Update Category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data)=> res.json(data));
});

// Detete Category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data)=> res.json(data));
});

module.exports = router;
