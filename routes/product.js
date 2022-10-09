const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/product')

router.get('/', constructor.getProducts)

router.post('/add', constructor.setProducts)

router.get('/userById', constructor.getProductById)

router.get('/deleteById', constructor.deleteById)

module.exports = router