const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

app.listen(3000, () => {
    console.log('Servidor arrancado!!')
});