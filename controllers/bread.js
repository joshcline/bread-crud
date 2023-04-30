const router = require('express').Router()
const Bread = require('../models/bread')

// GET all the bread
router.get('/', (req, res) => {
  res.send('home page for bread')
})

// GET bread a specific bread by index
router.get('/:index', (req, res) => {
  const { index } = req.params
  res.send(Bread[index])
})

module.exports = router