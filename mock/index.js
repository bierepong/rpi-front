const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

app.post('/begin', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ }));
});

app.post('/end', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ }));
});


app.get('/status', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: Array.apply(null, {length: 6}).map(() => Math.round(500 * Math.random()))}));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
