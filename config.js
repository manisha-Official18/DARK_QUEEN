const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "PvZHzT6R#ZwtZnErR0Kbfh8v_sxik75gtL9oGdn9hRATrVJwLP60",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94721551183",
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
  packname: process.env.packname || "manisha sasmitha",
  author: process.env.author || "manisha sasmitha",


  START_MSG: process.env.START_MSG || `╭──────────────⊷❒\n\n*🩷WELCOME TO DARK_QUEEN WHATSAPP BOT.*\n\n┗━┫*⚬°❀𝐌❀°⚬*┣━⁠⁠✾\n\n*🩷DARK_QUEEN is a fast growing Whatsapp bot.*\n\n┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠✾\n\n *🩷Your account is now active.*\n\n┗━┫*⚬°❀𝐍❀°⚬*┣━⁠⁠✾\n\n⁠*🩷This is your log number. Avoid using commands here⚠️.*\n\n┗━┫*⚬°❀𝐈❀°⚬*┣━⁠⁠⁠⁠✾\n\n*🩷Join My WhatsApp Channel:* https://whatsapp.com/channel/0029Vb1AB158F2pCzMyd8O1B\n\n┗━┫*⚬°❀𝐘❀°⚬*┣━⁠⁠⁠⁠✾\n\n*🩷CREATED BY MANISHA SASMITHA.*\n\n┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠⁠⁠✾\n\n╰──────────────⊷❒` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/l2ofp9.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/yweqjg.png",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
  MENU_MS: process.env.MENU_MS || `menu 2`,

};
