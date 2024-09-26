const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "p2dVzLoT#QsIEIip_AkSjo_9xWBjWaZkJQAaxYKcp1V3ZsvTO1ZA",
ALIVE_IMG: process.env.ALIVE_IMG || "https://pin.it/3J42aIRaP",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94742343170",
OWNER_NAME: process.env.OWNER_NAME || "facker MAIN",
BOT_NAME: process.env.BOT_NAME || "FACKER-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

