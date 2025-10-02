console.log('Hola Mundo');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const products = require('./data/products'); //importamos el array de productos//

//endpoint prueba//
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});


//http://localhost:3000/products//
app.get('/products', (req, res) => {
    res.json({
        message: 'productos',
        timestamp: new Date().toISOString(),
        status: 'success',
        products: products
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
 