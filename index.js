'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/test/:id',function (req, res) {
    let id = req.params.id;
    res.status(200).send({text:'dentro de test', id: id});
});

app.listen(port, function () {
    console.log(` Corriendo en el puerto ${port}` );
})