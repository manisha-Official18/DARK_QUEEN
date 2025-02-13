// MEDIAFIRE DOWNLOAD COMMAND


const { cmd } = require('../../command')
const { fetchJson } = require('../functions')

const apilink = 'https://www.dark-yasiya-api.site' // API LINK ( DO NOT CHANGE THIS!! )


cmd({
    pattern: "mfire",
    alias: ["mf","mediafire"],
    react: "🔥",
    desc: "",
    category: "download",
    use: '.mfire < mediafire url >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{
  
if(!q) return await reply("*please give me mediafire url*");
  if(!q.includes('mediafire.com')) return await reply("This url is invalid");
  
const mfire = await fetchJson(`${apilink}/download/mfire?url=${q}`);
  
const msg = `
           *DARK_QUEEN  MEDIAFIRE DOWNLOADER*


• *file name* - ${mfire.result.fileName}

• *file size* - ${mfire.result.size}

• *upload date and time* - ${mfire.result.date}

> *©ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`



       // Sending the image with caption
       
  await conn.sendMessage(from, { image: { url: `https://i.ibb.co/dPw1fHD/mfire.jpg`}, caption: msg }, { quoted: mek });
          
// SEND FILE
await conn.sendMessage(from, { document: { url: mfire.result.dl_link }, mimetype: mfire.result.fileType , fileName: mfire.result.fileName, caption: > *©ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ* }, { quoted: mek });

  
} catch (e) {
console.log(e)
reply('*this url type is not working !!*')
}
})
