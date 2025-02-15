const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "", // ADD Your Session Id 
  OWNER_NUMBER: process.env.OWNER_NUMBER || "", //add owner number
  PREFIX: process.env.PREFIX || ".", // Add Your Custom Prefix
  mode: process.env.mode || "private",// Add Your Bot Mode 
 //==================================================API KEY======================================================================
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|decd54b4fa030634e54d6c87fdffbb95f0bb9fb5", // https://api.skymansion.site/movies-dl
  GEMINI_API_KEY: process.GEMINI_API_KEY ||"AIzaSyBP9qAGQUHjtIPuaZcyvSnbZDGSyHUD6bc", // https://aistudio.google.com/prompts/new_chat?gad_source=1&gclid=CjwKCAiAh6y9BhBREiwApBLHC50TkPdPNhXo-Fp32k3EdtcZTb3xlpTFT6sBsRr64eaajRHntsvNwhoCjk8QAvD_BwE
  //==============================================================================================================================
};
