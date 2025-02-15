const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "",
  // ADD Your Session Id 
  OWNER_NUMBER: process.env.OWNER_NUMBER || "",
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  OWNER_NUMBER_REACT: process.env.OWNER_NUMBER_REACT ||"",
  //add number reacat
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group  
//=============API KEY=============
  MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|decd54b4fa030634e54d6c87fdffbb95f0bb9fb5",
  GEMINI_API_KEY: process.GEMINI_API_KEY ||"AIzaSyBP9qAGQUHjtIPuaZcyvSnbZDGSyHUD6bc",
  //==============START================
};
