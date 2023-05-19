require('dotenv').config();
const mongoose = require('mongoose');
const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://' + username + ':' + password + '@cluster0.31pryws.mongodb.net/?retryWrites=true&w=majority');
}