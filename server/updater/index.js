(function (updater) {
    var socketio = require('socket.io');
    
    updater.init = function (server) {

        var io = socketio.listen(server);
        console.log('updater')
        io.sockets.on("connection", function (socket) {
            console.log('socket is npow connected')
        })
    }

})(module.exports)