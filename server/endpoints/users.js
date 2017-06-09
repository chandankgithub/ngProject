//dependencies
//dependencies
let unirest = require('unirest')


//constants
const _geturl = "http://jsonplaceholder.typicode.com/users"
const _postUrl = "http://jsonplaceholder.typicode.com/posts"

var users = {
    //api
    getUsers: function (fnCallback) {
        unirest.get(_geturl)
            .strictSSL(false)
            .end(function (response) {
                if (response.statusCode === 200) {
                    fnCallback(null, response.body)
                }

            })
    },

    getUser: function (id, fnCallback) {
        let endpointUrl = (_geturl + '/' + id)
        let response = unirest.get(endpointUrl)

        response.strictSSL(false)
            .end(function (response) {
                if (response.statusCode === 200) {
                    fnCallback(null, response.body)
                }
            })

    },

    addUser: function (data, fnCallback) {
        let endpointUrl = _postUrl;
        console.log(endpointUrl)
        unirest.post(endpointUrl)
            .headers({ 'Accept': 'application/json' })
            .send(data)
            .end(function (response) {
                if (response.statusCode === 201 /*created*/) {
                    fnCallback(null, response.body)
                }
            });

    },

    editUser: function (data, fnCallback) {
        let endpointUrl = _postUrl + '/' + data.id

        unirest.put(endpointUrl)
            .send(data)
            .end(function (response) {
                if (response.statusCode === 200) {
                    fnCallback(null, response.body)
                }
            })

    },

    deleteUser: function(id, fnCallback){
        let endpointUrl = _postUrl + '/' + id
        
        unirest.delete(endpointUrl)
        .end(function(response){
            if (response.statusCode === 200) {
                    //fnCallback(null, response.body)
                    fnCallback(null, {'success': true})
            }
        })

    }

    
}

//export
module.exports = users;