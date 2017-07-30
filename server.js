const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log('listenting to port 3000');
});

app.get('/', function (req, res) {
    //res.send('This is a get');
    res.sendFile(__dirname + '/index.html');
});

app.post('/todo', function(req, res) {
    console.log(req.body);
});