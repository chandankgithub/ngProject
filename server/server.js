//dependencies
let express = require('express')


//server
let server = express();
let routes = require('./routes')
server.use('/api', routes);


// global controller -- using CORS instead
// server.get('/*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next(); // http://expressjs.com/guide.html#passing-route control
// });


server.get('/',function(req, res){
    res.send('<html> <h1> This is home and it is working </h1></html>')
});

server.listen(8000, function(res, resp){
    console.log('sever is up and running')
});