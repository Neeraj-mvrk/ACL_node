//server/server.js
var express = require('express');
var router = require('./src/routes/routes.js')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));
app.use('/', router);
const port = 8000
app.listen(port, function() {
 console.log('running at localhost: ' + port);
});
module.exports=app;