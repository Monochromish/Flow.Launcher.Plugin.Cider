const {
    method,
    parameters
} = JSON.parse(process.argv[2]);
//const {
//    playback
//} = require('./wsapi.js')  // TODO: Use WebSocket API instead of REST API
const {
    playback
} = require('./restapi.js')

if (method === "query") {
    console.log(JSON.stringify({
        "result": [{
            "Title": "Play",
            "Subtitle": "Resume",
            "JsonRPCAction": {
                "method": "cider_play"
            },
            "IcoPath": "Assets\\app.png"
        }, {
            "Title": "Pause",
            "Subtitle": "Pause",
            "JsonRPCAction": {
                "method": "cider_pause"
            },
            "IcoPath": "Assets\\app.png"
        }, {
            "Title": "Stop",
            "Subtitle": "Stop the current song",
            "JsonRPCAction": {
                "method": "cider_stop"
            },
            "IcoPath": "Assets\\app.png"
        }, {
            "Title": "Next",
            "Subtitle": "Skip to the next song in the queue",
            "JsonRPCAction": {
                "method": "cider_next"
            },
            "IcoPath": "Assets\\app.png"
        }, {
            "Title": "Previous",
            "Subtitle": "Go back to the previous song in the queue",
            "JsonRPCAction": {
                "method": "cider_previous"
            },
            "IcoPath": "Assets\\app.png"
        }]
    }));
}

if (method) {

    switch (method) {

        case "cider_play":
            playback('play');
            break;

        case "cider_pause":
            playback('pause');
            break;

        case "cider_stop":
            playback('stop');
            break;

        case "cider_next":
            playback('next');
            break;

        case "cider_previous":
            playback('previous');
            break;

    }

}