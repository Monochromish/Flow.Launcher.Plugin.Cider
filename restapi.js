const XMLHttpRequest = require('./node_modules/xhr2');
var xhttp = new XMLHttpRequest();

module.exports = {
    playback: async function playback(action) {
        xhttp.open('GET', `http://localhost:9000/api/playback/${action}`, true);
        xhttp.send();
    }
}