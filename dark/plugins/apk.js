const { cmd, commands } = require('../command');
const scraper = require("../DATABASE/scraper");
const axios = require('axios');
const fetch = require('node-fetch');
const { fetchJson, getBuffer } = require('../DATABASE/functions');
const { lookup } = require('mime-types');
const fs = require('fs');
const path = require('path');

//Apk Download
cmd({
    pattern: "apk",
    desc: "Downloads Apk",
    use: ".apk <app_name>",
    react: "📥",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const appId = q.trim();
    if (!appId) return reply(`Please provide an app name`);
    
    reply("_Downloading " + appId + "_");
    
    try {
        const appInfo = await scraper.aptoideDl(appId);
        const buff = await getBuffer(appInfo.link);
        
        if (!buff || !appInfo.appname) {
            return await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        }
        
        await conn.sendMessage(
            from,
            { document: buff, caption: `> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`, mimetype: "application/vnd.android.package-archive", filename: `${appInfo.appname}.apk` },
            { quoted: mek }
        );
        
        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
        reply("*_Download Success_*");
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply(`Error: ${e.message}`);
    }
});
