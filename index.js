const express = require('express');
const app = express();

const session = require('express-session');
const bodyParser = require('body-parser');

app.use(express.static('static'));
app.set('view engine', 'ejs');

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

require('./routes/Dashboard')(app);
require('./routes/NewItem')(app);
require('./routes/NewUser')(app);
require('./routes/Outside')(app);

app.use(function (err, req, res, next) {
    res.status(500).send('Problem!');
    console.error(err.stack);
});

let server = app.listen(3000, function () {
});