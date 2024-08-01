const express = require('express');
const data = require("./public/data.js");

const app = express();
//const Public = require("public")

const PORT = 8083;

// this is a middleware
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>')
});

app.get("/api/edi_mars", (req, res) => {
    res.status(200).send(data.products)
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});