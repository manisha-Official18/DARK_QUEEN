// XVIDEO DOWNLOAD COMMAND

const { cmd } = require('../../command')
const { fetchJson } = require('../functions')

const apilink = 'https://www.dark-yasiya-api.site' // API LINK ( DO NOT CHANGE THIS!! )



cmd({
    pattern: "xvideo",
    alias: ["xvdl","xvdown"],
    react: "🔞",
    desc: "Download xvideo.com porn video",
    category: "download",
    use: '.xvideo < text >',
    filename: __filename
},
async(conn, mek, m,{from, quoted, reply, q }) => {
try{

  if(!q) return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝗆𝖾 𝖥𝖾𝗐 𝖶𝗈𝗋𝖽 !")
    
const xv_list = await fetchJson(`${apilink}/search/xvideo?q=${q}`)
if(xv_list.result.length < 0) return await reply("Not results found !")

const xv_info = await fetchJson(`${apilink}/download/xvideo?url=${xv_list.result[0].url}`)
    
  // FIRST VIDEO
  
const msg = `
           *DARK_QUEEN XVIDEO DOWNLOADER* 🔞

       
• *𝖳𝗂𝗍𝗅𝖾* - ${xv_info.result.title}

• *𝖵𝗂𝖾𝗐𝗌* - ${xv_info.result.views}

• *𝖫𝗂𝗄𝖾* - ${xv_info.result.like}

• *𝖣𝖾𝗌𝗅𝗂𝗄𝖾* - ${xv_info.result.deslike}

• *𝖲𝗂𝗓𝖾* - ${xv_info.result.size}

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`

// Sending the image with caption
await conn.sendMessage(from, { image: { url: xv_info.result.image ||''}, caption: msg}, { quoted: mek });

// SEND VIDEO
await conn.sendMessage(from, { document: { url: xv_info.result.dl_link }, mimetype: "video/mp4", fileName: xv_info.result.title, caption: xv_info.result.title }, { quoted: mek });


} catch (error) {
console.log(error)
reply(error)
}
})
