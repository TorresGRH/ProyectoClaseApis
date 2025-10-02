console.log('Hola Mundo');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Content-Type");
next();
});

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

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((products) => products.id === parseInt(id));

if (!product) {
    return res.status(404).json({
        message: 'Producto no encontrado',
        timestamp: new Date().toISOString(),
        status: 'error',
    });
}
res.status(200).json({
    message: 'Producto',
    timestamp: new Date().toISOString(), 
    status: 'success',
    product: product
});
});

//iniciar servidor//

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
 