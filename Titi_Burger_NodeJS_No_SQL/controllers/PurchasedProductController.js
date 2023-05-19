const PurchasedProduct = require('../models/PurchasedProduct');

const getPurchasedProducts = ((req, res, next) => {
  let id = req.params.id;
  PurchasedProduct.find(function(err, purchasedProduct){
    if (err){
      res.send(err); 
    }

    res.json(purchasedProduct);
  }); 
})

const storePurchasedProduct = ((req, res) => {
  let purchasedProduct = new PurchasedProduct();
  purchasedProduct.orderId = req.body.orderId;
  purchasedProduct.productId = req.body.productId;
  purchasedProduct.unitPrice = req.body.unitPrice;
 
  product.save(function(err){
    if(err){
      res.send(err);
    }
    res.json(true);
  })
})

module.exports = {
  getPurchasedProducts,
  storePurchasedProduct
}
