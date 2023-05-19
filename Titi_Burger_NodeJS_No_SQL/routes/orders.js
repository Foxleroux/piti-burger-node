let express = require('express');
let router = express.Router();
const  { 
  storeOrder,
  getOrders
} = require('../controllers/OrderController.js')

router
.get('/', getOrders)
.post('/', storeOrder)

module.exports = router;