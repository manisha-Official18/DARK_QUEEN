const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "", // ADD Your Session Id 
  OWNER_NUMBER: process.env.OWNER_NUMBER || "", //add owner number
  OWNER_REACT: process.env.OWNER_REACT || "", // add you owner number
  OWNER_REACT_EMOJI: process.env.OWNER_REACT_EMOJI || "🙂", //add you owner emoji
  PREFIX: process.env.PREFIX || ".", // Add Your Custom Prefix
  mode: process.env.mode || "private",// Add Your Bot Mode 👇
//=============API KEY=============
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|decd54b4fa030634e54d6c87fdffbb95f0bb9fb5", // movie api key
  GEMINI_API_KEY: process.GEMINI_API_KEY ||"AIzaSyBP9qAGQUHjtIPuaZcyvSnbZDGSyHUD6bc", // gemini api key 
  //=============================================================
};
