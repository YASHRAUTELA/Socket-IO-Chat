var express = require('express');
require('dotenv').config();
var cors = require('cors');
let app = express();
let http = require('http');
let server = http.Server(app);
app.use(cors());
app.use(express.static(__dirname+'/www'));
let port = process.env.PORT||4000;
server.listen(port,()=>{
    console.log('server started on port',port);
});
