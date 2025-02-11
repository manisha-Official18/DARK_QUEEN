const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "PvZHzT6R#ZwtZnErR0Kbfh8v_sxik75gtL9oGdn9hRATrVJwLP60",
  // ADD Your Session Id 
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  //========================================- OTHER - CONFIGS -=====================================================================
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakaya,hutta,kariya,ponnaya").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
//=============API KEY=============
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|decd54b4fa030634e54d6c87fdffbb95f0bb9fb5",
//==============START MSG================
  SENDE_NUMBER_REACT: process.env.SENDE_NUMBER_REACT ||"94759934522",
  START_MSG: process.env.START_MSG || `╭──────────────⊷❒\n\n*🩷WELCOME TO DARK_QUEEN WHATSAPP BOT.*\n\n┗━┫*⚬°❀𝐌❀°⚬*┣━⁠⁠✾\n\n*🩷DARK_QUEEN is a fast growing Whatsapp bot.*\n\n┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠✾\n\n *🩷Your account is now active.*\n\n┗━┫*⚬°❀𝐍❀°⚬*┣━⁠⁠✾\n\n⁠*🩷This is your log number. Avoid using commands here⚠️.*\n\n┗━┫*⚬°❀𝐈❀°⚬*┣━⁠⁠⁠⁠✾\n\n*🩷Join My WhatsApp Channel:* https://whatsapp.com/channel/0029Vb1AB158F2pCzMyd8O1B\n\n┗━┫*⚬°❀𝐘❀°⚬*┣━⁠⁠⁠⁠✾\n\n*🩷CREATED BY MANISHA SASMITHA.*\n\n┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠⁠⁠✾\n\n╰──────────────⊷❒` ,
};
