const W3CWebSocket = require('./node_modules/websocket').w3cwebsocket;
module.exports = {
    playback: async function playback(action) {
        var client = new W3CWebSocket('ws://localhost:26369/', 'echo-protocol');
        client.onopen = function () {
            client.send(JSON.stringify({
                action: action
            }))
            client.close();
        };
    }
}