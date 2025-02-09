const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb://mongo:pqhIdfGdqeHbLRZRFbzBRMlAhASSYFWP@junction.proxy.rlwy.net:48487",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "private",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94721551183",
  //========================================- OTHER - CONFIGS -=====================================================================
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ",
  author: process.env.author || "ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ ",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `╭──────────────⊷❒\n\n- *🩷සාදරයෙන් පිලිගන්නවා DARK_QUEEN WHATSAPP BOT වෙත.*\n\n⁠⁠⁠⁠┗━┫*⚬°❀𝐌❀°⚬*┣━⁠⁠⁠⁠✾\n\n- *🩷DARK_QUEEN යනූ සීඝ්‍රයෙන් වර්ධනය වන Whatsapp රොබෝවෙකි.*⁠\n\n┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠⁠⁠✾\n\n- *🩷ඔබගේ ගිණුම දැන් සක්‍රියයි.*\n\n⁠⁠⁠⁠┗━┫*⚬°❀𝐍❀°⚬*┣━⁠⁠⁠⁠✾\n\n⁠⁠⁠⁠⁠⁠- *🩷මෙය ඔබගේ LOG අංකයයි මෙහි විධාන භාවිතයෙන් වළකින්න⚠️.*\n\n⁠⁠⁠⁠⁠⁠⁠⁠┗━┫*⚬°❀𝐈❀°⚬*┣━⁠⁠⁠⁠✾\n\n⁠⁠⁠⁠⁠⁠⁠⁠- *🩷CREATE BY MANISHA SASMITHA.*\n\n⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠┗━┫*⚬°❀𝐘❀°⚬*┣━⁠⁠⁠⁠✾\n\n- *🩷Join My WhatsApp Channel:* https://whatsapp.com/channel/0029VavZd1y0lwgxqEopap2e\n\n⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠┗━┫*⚬°❀𝐀❀°⚬*┣━⁠⁠⁠⁠✾\n\n⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠⁠╰──────────────⊷❒ ` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/v1k9r3.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "i am alive now",
  MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/v1k9r3.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
  MENU_MS: process.env.MENU_MS || `menu 2`,

};
