//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "50935312863";
global.owner = process.env.OWNER_NUMBER || "50935312863";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9hQi8rUWJUR2wvZEFidGpXbW5xNHJmTzN4RloxU1JzN0F5STBKdEgxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmZuR3hFb0d3V0pZR09lck81MzFrdlpockRqTHpTTFJwU25GRGUva3VTaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QXRuMGd1Y29Ici9wQW44QmhYaENua285ekdyQWpyZGtiTnc5ZVpCRW1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSy9sV25HcUZnK3FzUXZCMHNtVFVJdGsybGRzVlJIL3RpejBZOHdDcm5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPYytFeVQ2ZWJqVStHWGs5Wm9IVWN1d0xkMWg3aWYybElUL3UrR2hDVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpyOG4vSXNlQ3ppYWEreE1Dc3JvbVgvdlJ4aHNqdzNKRjRJaUFkbGxhWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05sVXZNd0F1R0J2QjlVYzIzS0FRdmVab1RMTXNzYVp3enU4ekRVT3czST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRStVVndsdzI3bGE4cGF6QUk1SmFxN1gzblkveFZuSVdyQmU1a2xoR2hWYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB4QzZwT2l3QWdtSWZhdmRxMmpjVUx1ZVRGNE5Vdno5eHhzUk1VNWV5Vm4rMnZCSlFOcGI1azgyNzZKWUY1WVAyRWpYRkcxT0dFMStyemt4WWl6cURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJySGl3eDFJZFQ3ZlJHaGgramY5Z1NUSGRjVURkMjYrbnpJZXpPTTYzZVVjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvaVJfYktKaFJwNnBOSm5rdTFDMDBBIiwicGhvbmVJZCI6IjlhZTU1OGEyLWIzZTUtNGE2Zi1hODA2LWYzZjM5NmY1NzBiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZWE5uaytoa1pXa1puMHhIRUIwSGVWdkxEZEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFdsVERUQUwxWVBSSWxIck5LQkllL1BGMnBJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkyMTdUV1g5IiwibWUiOnsiaWQiOiI1MDkzNTMxMjg2MzoxMkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTzNnd3VBSEVORHFvN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTjMrbVJkVXhnVU1ER2o4bUFHS1hFK3Y4ekpRb0NnakljOVBialZlcW1YYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNXplS2xjSXRmelgyWXIvcDM5TU1nTEU5eHUrNndocWtESUtzUlRRaTRhelpWOEp2RkZNN2pwRHM5djM2RVBTUGViNkc0cithMFgxN05ENk5FY010Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6InBKOVp0dS8wZzFicjNoYjNBTGN2alhhcTZjeWJUV2w5QmhkWjlrYXkvRXBoZk5jQ3lrWmh5Q1ZFck9CdzhGTGF6TThRRGRtR1RmSjErSHNwNmdQc0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzUzMTI4NjM6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGQvcGtYVk1ZRkRBeG8vSmdCaWx4UHIvTXlVS0FvSXlIUFQyNDFYcXBsMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjU0MzE5NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKNW0ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𝐆𝚯𝐃𝄟✮͢≛⃝𝐘𝚫𝐆𝚫𝚳𝚰𝄟✮⃝🍷",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
