const express = require('express');

const app = express();
//const Public = require("public")

const PORT = 8083;

// this is a middleware
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.status(200).send('<h1>Hello World!</h1>')
});

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});