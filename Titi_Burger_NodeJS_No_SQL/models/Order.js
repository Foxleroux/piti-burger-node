const mongoose =  require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
	firstName: String, 
	lastName: String,
    email: String,
	payedAmount: mongoose.Decimal128
}, { timestamps: true });

const Order = mongoose.model('Order', OrdersSchema);
  
module.exports = Order;