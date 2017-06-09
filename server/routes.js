//dependencies
let express = require('express')
let bodyParser = require('body-parser');
let users = require('./endpoints/users')
let cors = require('cors')

routes = express();
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({extended: true})); 
routes.use(cors())
//routes.options('*', cors()) // include before other routes

routes.get('/users', function (req, res) {

    users.getUsers(function (err, result) {
        // res.header('Access-Control-Allow-Origin', '*');
        // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        // res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.send(result);
    })
})

routes.get('/users/:id', function (req, res) {
    let id = req.params.id;
    users.getUser(id, (err, result) => {
        // res.header('Access-Control-Allow-Origin', '*');
        // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
        // res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.send(result);
    })
})

routes.put('/users',function(req, res){
    users.editUser( req.body, (err, result) => {
        res.send(result);
    })
})

routes.post('/users',function(req, res){
  
    users.addUser( req.body, (err, result) => {
        res.send(result);
    })
})


routes.delete('/users/:id',function(req, res){
    let id = req.params.id;
    
    users.deleteUser( id, (err, result) => {
        console.log(result)
        res.send(result);
    })
})


//export
module.exports = routes;