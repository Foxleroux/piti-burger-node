const mongoose =  require('mongoose');
const { Schema } = mongoose;

const PurchasedProductsSchema = new Schema({
	orderId: String, 
	productId: String,
    unitPrice: mongoose.Decimal128,
	 });

const PurchasedProduct = mongoose.model('PurchasedProduct', PurchasedProductsSchema);
  
module.exports = PurchasedProduct;