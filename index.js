const Express = require('express')
const app = Express()
const word = require('russian-words');

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
let chat = []

tiktokChatConnection.on('gift', data => {
    gifts.push(data)
})

tiktokChatConnection.on('chat', data => {
    chat.push(data)
})

app.get('/gifts', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.json(gifts);
    gifts.length = 0
});

app.get('/words', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(word[randomInteger(0, 106057)])
})

app.get('/livechat', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.json(chat)
    chat.length = 0
})


app.listen(5000, () => console.log("Server started | " + 5000))

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}