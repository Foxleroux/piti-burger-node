const mongoose =  require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
	name:  String, 
	description: String,
	price: mongoose.Decimal128,
	type: {
		type: String,
		enum: ['burger','boisson','dessert','accompagnement']
	},
	image: String
});
const Product = mongoose.model('Product', ProductsSchema);
  
module.exports = Product;