const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const Model = require(path.join(__dirname, "model.js"));



// console.log that your server is up and running
Model.initConnection();

app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/', (req, res) => {
    res.send({ express: 'test' });
});