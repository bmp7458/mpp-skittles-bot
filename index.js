const { CursorBot } = require('./src/Bot');
const WebSocket = require('ws');

globalThis.TOTAL_IDS = 49;
// globalThis.TOTAL_IDS = 300;

let bots = [];

const startDelay = 0;
const modeDelay = 10000;

for (let i = 1; i <= TOTAL_IDS; i++) {
    bots.push(new CursorBot(i));
}

let i = 0;
for (const bot of bots) {
    setTimeout(() => {
        bot.start();
        // bot.cl.setChannel('✧𝓓𝓔𝓥 𝓡𝓸𝓸𝓶✧');
        // bot.cl.setChannel('uwu');
        bot.cl.setChannel('skittles bot');
    }, i * startDelay);
    i++;
}

let happened = false;
/*
['circle',      10000],  type, duration
    ['circle2',     10000],
    ['dvd',         10000],
    ['sine',        10000],
    ['fullsine',    10000],
    ['figure8',     5000],
    ['cosmic',      15000],
    ['heart',       7000],
    ['line',        10000],
    ['line2',       10000],
    ['circle3',     10000],
    ['circle4',     10000],
    ['dvd',         20000],
    */
let currentMode = 1;
let modes = [
    ['dvd', 3000],
    ['test', 3000],
    ['dvd', 3000],
    ['circle', 3000]
]

let modeSwitch = true;

function switchMode() {
    if (!modeSwitch) return;
    currentMode++;

    if (currentMode >= modes.length) currentMode = 0;
    let mode = modes[currentMode][0];

    let time = modes[currentMode][1];
    setTimeout(() => {
        switchMode();
    }, time);

    for (const cl of bots) {
        switch (mode) {
            case 'circle':
                cl.cursor.angle2 = 0;
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                cl.cursor.angle3 = 0;
                break;
            case 'dvd':
                cl.cursor.velocity.x = (Math.random() * 50) - 25;
                cl.cursor.velocity.y = (Math.random() * 50) - 25;
                break;
            case 'sine':
                cl.cursor.velocity.x = 5;
                cl.cursor.velocity.y = 5;
                break;
            case 'circle2':
                cl.cursor.angle2 = (cl.id / TOTAL_IDS) * 360;
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                cl.cursor.angle3 = 0;
                break;
            case 'figure8':
            case 'cosmic':
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                break;
            case 'heart':
                cl.cursor.velocity.x = 0;
                cl.cursor.velocity.y = 0;
                break;
            case 'fullsine':
                cl.cursor.velocity.x = 2;
                cl.cursor.velocity.y = 2;
                break;
            case 'line':
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 0;
                cl.cursor.angle = cl.cursor.offset;
                break;
            case 'line2':
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 0;
                break;
            case 'circle3':
                // cl.cursor.angle2 = (cl.id / TOTAL_IDS) * 360;
                cl.cursor.angle2 = 0;
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                cl.cursor.angle3 = 0;
                // cl.cursor.angle3 = (cl.id / TOTAL_IDS) * 360;
                break;
            case 'circle4':
                // cl.cursor.angle2 = (cl.id / TOTAL_IDS) * 360;
                cl.cursor.angle2 = 0;
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                cl.cursor.angle3 = 0;
                // cl.cursor.angle3 = (cl.id / TOTAL_IDS) * 360;
                break;
            case 'test':
                cl.cursor.angle2 = 0;
                cl.cursor.velocity.x = 1;
                cl.cursor.velocity.y = 1;
                cl.cursor.angle3 = 0;
        }

        cl.cursor.mode = mode;
    }
}

setInterval(() => {
    if (happened) return;

    let online_count = 0;

    for (const bot of bots) {
        if (!bot.cl.ws) continue;
        if (bot.cl.ws.readyState == WebSocket.OPEN) {
            online_count++;
        }
    }

    if (online_count == TOTAL_IDS) {
        for (const bot of bots) {
            bot.cl.emit('allOnline');
        }
        happened = true;
    }
}, 500);

// setInterval(() => {
//     switchMode();
// }, modeDelay);

switchMode();
