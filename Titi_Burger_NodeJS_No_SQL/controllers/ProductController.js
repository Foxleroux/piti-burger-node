const Product = require('../models/Product');

const getProductsByType = ((req, res, next) => {
  let type = req.params.type;
  Product.find({type}, function(err, products){
    if (err){
      res.send(err); 
    }

    res.json(products);
  }); 
})

const getProductsById = ((req, res, next) => {
  let id = req.params.id;
  Product.findById(id, function(err, product){
    if (err){
      res.send(err); 
    }

    res.json(product);
  }); 
})

const storeProduct = ((req, res) => {
  let product = new Product();
  product.name = req.body.name;
  product.description = req.body.description;
  product.price = req.body.price;
  product.type = req.body.type; 
  product.image = req.body.image; 
  product.save(function(err){
    if(err){
      res.send(err);
    }
    res.json(true);
  })
})

module.exports = {
  getProductsById,
  getProductsByType,
  storeProduct
}