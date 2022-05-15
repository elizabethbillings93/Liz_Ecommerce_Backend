const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get request of for all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((data)=> res.json(data));
});
// Get request of tag by id
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {id: req.params.id,},
    include: [
      { model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((data)=>res.json(data));
});
// Post request for all tags
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((data)=> res.json(data));
});
// Put request for tag by id
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data)=> res.json(data));
});
// Delete request by id
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data)=> res.json(data));
});

module.exports = router;
