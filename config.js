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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xKVTVTWkdZM2wwNnpOMk9lZ2JiaTVYYUxNM3U3ZUFmT1B3OCt3REZsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2R4eEUyajBlc2JnV0FIclJtei9SSHFSOGZTa002V1Y2ZTJzdTI0dXNRND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHS0FaZVQ0ZlhURUJPN2F1SWE0RUZwLyt1R2MvTTA4NndPejU0V29hRVdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkelZmeVU5RHE2bWZTaDQ1azhXdGxqUEV5RmtWU1Y3MGx3eHo4Yk1WcUV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNOUHhua0V2SThKaG14c0hld1NzZlpyR3U2N2I5YThPK216Rnc0c2NvMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1V21JbVQ2YysyTXRZZGFobTFiRktLdEQyc2s0YWE1aXRQK2FsdS9QV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0JTU3V2c0lWM3k3azV0TmJkNTNISEJkZTdNVkNFS3hCWTEvWlhFdU4zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEhxczlVYTc5ZGg2OWJhUlVBdS9TQzBkMzAydDBrUy9WbklQWVYrYmt5MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks5bnh5Vk12c2RDWDRveEFpeUY1N2g3eGJBOE1JVmlCdk9PcG9IdlFkOXdRMWUrRG8rRmpOWWVnOFkvTDc3YklkK3pLaStTSVBCTEtoVWJOK2daNWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IkR2WUVybFpyWGpyUkdWMmFtVE16MkpOWDREUW4yNWZyWDJMK01rT2dObmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5MzUzMTI4NjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjAwN0I3NkVCMjRDNUU1ODM1QTAyOEQxQTQyRTRGQzkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjQ1MTUxOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMGM5cDJvZjNSYnlJemF3emF3NWVNdyIsInBob25lSWQiOiJkNjNiODAzOS02OTYzLTQ4ODUtYTg2Mi1kZmM4NDVlMWUzZTYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFRMQTN4bnhwSU1pampqdTBXdmZBbnhkRG1FPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFrTEdjV1JWbmpBWjRvSFExQkhWUEo3YnFCcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQOENDOFlWSyIsIm1lIjp7ImlkIjoiNTA5MzUzMTI4NjM6OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT25nd3VBSEVLeWVucmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTjMrbVJkVXhnVU1ER2o4bUFHS1hFK3Y4ekpRb0NnakljOVBialZlcW1YYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaGpEa2VRQ3BhWjA0dno2NTlzdDlnakFibHZHYUxaQlJ6Q3V2enhvT3hEaHYxTTlFNC8rcERjRFRrMzNkbG1NbXpYUzllR3N1NFREa01Fd3ZyZi9XRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ik82a2NUdC96QkQvcFN0Q0Z1TFQzckJTUnhSWThQcDFjM3dSWGVKUjd5ZUVoelREWlFIdDgzVTJhSCsxTkIrYXg0cTcxVzl5NlA3c3g0NENiemR1aGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzUzMTI4NjM6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUZC9wa1hWTVlGREF4by9KZ0JpbHhQci9NeVVLQW9JeUhQVDI0MVhxcGwzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NDUxNTE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUplQiJ9"
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
