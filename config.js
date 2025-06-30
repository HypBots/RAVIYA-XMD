const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'RAVIYA-XMD=DsQTHL4I#VOkD-B3rOCXqm5jk6gDUzQkZWiC6DiGGHsDxv9Mefgg' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
SUDO: process.env.SUDO === undefined ? '94772854872' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"private" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
