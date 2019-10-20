let express = require('express');
let app = express();

app.use(express.static('static'));


let server = app.listen(3000, function () {
});