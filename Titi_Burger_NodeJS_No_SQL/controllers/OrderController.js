const Order = require('../models/Order');
const PurchasedProduct = require('../models/PurchasedProduct');

const getOrders = ((req, res, next) => {
  let id = req.params.id;
  Order.find(function(err, order){
    if (err){
      res.send(err); 
    }

    res.json(order);
  }); 
})

const storeOrder = ((req, res) => {
  let order = new Order();
  let details = req.body.details;
  if (details.status !== "COMPLETED") {
    res.json(false);
  }
  order.firstName = details.payer.name.given_name;
  order.lastName = details.payer.name.surname;
  order.email = details.payer.email_address;
  order.payedAmount = details.purchase_units[0].amount.value; 
  order.save(function(err){
    if(err){
      res.send(err);
    }
    req.body.products.map((product, index) => {
      let purchasedProduct = new PurchasedProduct();
      purchasedProduct.orderId = order._id;
      purchasedProduct.productId = product._id;
      purchasedProduct.unitPrice = product.price.$numberDecimal;
     
      purchasedProduct.save()
    })

  
    res.json(true);
  })
})

module.exports = {
  getOrders,
  storeOrder
}