const express = require('express');
const app = express();
const cors = require('cors');
// const auth = require('./authentication/auth');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const productController = require('./controllers/productController');

app.use('/api/run/products', productController);
// app.use(auth.verifyToken);
// app.use('/api/products', auth.verifyToken, restrictedProducts);

module.exports = app;