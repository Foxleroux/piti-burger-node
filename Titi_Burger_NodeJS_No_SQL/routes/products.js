let express = require('express');
let router = express.Router();
const  { 
  getProductsByType,
  storeProduct,
  getProductsById
} = require('../controllers/ProductController.js')

router
.get('/:id', getProductsById)
.post('/', storeProduct)
.get('/type/:type', getProductsByType)

module.exports = router;