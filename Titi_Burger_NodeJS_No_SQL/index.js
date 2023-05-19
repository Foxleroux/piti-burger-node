const express = require('express')
require('./database');
const app = express()
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const purchasedProductsRouter = require('./routes/purchasedProducts');
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/purchasedProducts', purchasedProductsRouter);


app.listen(3000, () => {
  console.log(`API listening on port 3000`)
})