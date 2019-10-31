const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static('static'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (err, req, res, next) {
    res.status(500).send('Problem!');
    console.error(err.stack);
});


let server = app.listen(3000, function () {
});