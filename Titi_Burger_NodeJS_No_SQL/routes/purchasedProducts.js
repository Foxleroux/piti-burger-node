let express = require('express');
let router = express.Router();
const  { 
  storePurchasedProduct,
  getPurchasedProducts
} = require('../controllers/PurchasedProductController.js')

router
.get('/', getPurchasedProducts)
.post('/', storePurchasedProduct)

module.exports = router;