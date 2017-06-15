//dependencies
let express = require('express');
let http=require('http');


//server
let app = express();
let routes = require('./routes')
app.use('/api', routes);


// global controller -- using CORS instead
// server.get('/*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next(); // http://expressjs.com/guide.html#passing-route control
// });


app.get('/',function(req, res){
    res.send('<html> <h1> This is home and it is working </h1></html>')
});


let server = http.createServer(app);

server.listen(8000, function(res, resp){
    console.log('sever is up and running')
});


var updater=require("./updater");
updater.init(server);