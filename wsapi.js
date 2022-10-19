// This file is currently not being used. All modules required below will not be installed.
// TODO: Use WebSocket API instead of Rest API

//const WebSocket = require('./node_modules/ws')
//
//let socket = new WebSocket(`ws://localhost:26369`);
//
//socket.onopen = function(e) {
//    console.log('[Cider] - Connection Established with WebSocket API')
//}
//
//module.exports = {
//    playback: async function playback(action) {
//        socket.onopen = () => {
//            socket.send(JSON.stringify({
//                action: action
//            }))
//        }
//    }
//}
