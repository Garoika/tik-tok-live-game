const Express = require('express')
const app = Express()

const { WebcastPushConnection } = require('tiktok-livestream-chat-connector');

let tiktokUsername = "veydi_rush";

let tiktokChatConnection = new WebcastPushConnection(tiktokUsername, {
    enableExtendedGiftInfo: true
});

tiktokChatConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
    console.error('Failed to connect', err);
})

let gifts = []

tiktokChatConnection.on('gift', data => {
    gifts.push(data)
})

app.get('/gifts', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(gifts);
    gifts.length = 0
});




app.listen(5000, () => console.log("Server started | " + 5000))