//========= alive command ===========
const config = require('../../config')
const {cmd , commands} = require('../../command')



//============= menu command ================

const os = require("os")
const {runtime} = require('../lib/functions')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "alive",
    react: "👋",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "restart",
    alias: ["rebot","reboot"], 
    react: "🔃",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!isOwner) return;
const {exec} = require("child_process")
reply("restarting...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📃",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭═「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ 」*
*│◈ ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰═══════════════○●►*
*╭────────────────○●►*
*┃「𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑴𝑬𝑵𝑼」*
*╰────────────────○●►*
*╭───────────────○●►*
*╎ 01 OWNER*
*╎ 02 CONVERT*
*╎ 03 AI*
*╎ 04 SEARCG*
*╎ 05 DOWNLOAD* 
*╎ 06 FUN*
*╎ 07 MAIN*
*╎ 08 GROUP*
*╎ 09 OTHER*
*╎ 10 TOOL*
*╰───────────────○●►*
*╭─ 「𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵」*
*╰───────────────○●►*

🌟 ℝ𝔼ℙ𝕃𝕐 𝕥𝕙𝕖 ℕ𝕒𝕞𝕓𝕖𝕣 𝕐𝕠𝕦 𝕨𝕒𝕟𝕥 𝕥𝕠 𝕤𝕖𝕝𝕖𝕔𝕥

💻 *GitHub:* https://github.com/MANISHA-CMD/DARK_QUEEN

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> 𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐁𝐲 - : ©ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/v1k9r3.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU──╼◈*

╭────────●●►
│ • *restart* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU──╼◈*

╭────────●●►
│ • *convert* 
╰──────────────────●●►
╭────────●●►
│ • *currency* 
╰──────────────────●●►
╭────────●●►
│ • *url* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU──╼◈*

╭────────●●►
│ • *ai* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU──╼◈*

╭────────●●►
│ • *yts* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU──╼◈*

╭────────●●►
│ • *apk* 
╰──────────────────●●►
╭────────●●►
│ • *xvideo* 
╰──────────────────●●►
╭────────●●►
│ • *song* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '6':               
                        reply(`*◈╾──FUN MENU──╼◈*


╭────────●●►
│ • *animegirl* 
╰──────────────────●●►
╭────────●●►
│ • *dog* 
╰──────────────────●●►
╭────────●●►
│ • *joke* 
╰──────────────────●●►
╭────────●●►
│ • *hack* 
╰──────────────────●●►
╭────────●●►
│ • *quote* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU──╼◈*

╭────────●●►
│ • *alive* 
╰──────────────────●●►
╭────────●●►
│ • *owner* 
╰──────────────────●●►
╭────────●●►
│ • *menu* 
╰──────────────────●●►
╭────────●●►
│ • *allmenu* 
╰──────────────────●●►
╭────────●●►
│ • *repo* 
╰──────────────────●●►
╭────────●●►
│ • *system* 
╰──────────────────●●►
╭────────●●►
│ • *ping* 
╰──────────────────●●►
╭────────●●►
│ • *runtime* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU──╼◈*

╭────────●●►
│ • *promote* 
╰──────────────────●●►
╭────────●●►
│ • *demote* 
╰──────────────────●●►
╭────────●●►
│ • *kick* 
╰──────────────────●●►
╭────────●●►
│ • *add* 
╰──────────────────●●►
╭────────●●►
│ • *admins* 
╰──────────────────●●►
╭────────●●►
│ • *grouplink* 
╰──────────────────●●►
╭────────●●►
│ • *groupinfo* 
╰──────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰──────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰──────────────────●●►
╭────────●●►
│ • *groupdesc* 
╰──────────────────●●►
╭────────●●►
│ • *gname* 
╰──────────────────●●►
╭────────●●►
│ • *setsubject* 
╰──────────────────●●►
╭────────●●►
│ • *tagall* 
╰──────────────────●●►
╭────────●●►
│ • *requests* 
╰──────────────────●●►
╭────────●●►
│ • *accept* 
╰──────────────────●●►
╭────────●●►
│ • *reject* 
╰──────────────────●●►
╭────────●●►
│ • *approve* 
╰──────────────────●●►
╭────────●●►
│ • *poll* 
╰──────────────────●●►
╭────────●●►
│ • *getpic* 
╰──────────────────●●►
╭────────●●►
│ • *mute* 
╰──────────────────●●►
╭────────●●►
│ • *unmute* 
╰──────────────────●●►
╭────────●●►
│ • *lock* 
╰──────────────────●●►
╭────────●●►
│ • *hidetag* 
╰──────────────────●●►
╭────────●●►
│ • *unlock* 
╰──────────────────●●►
╭────────●●►
│ • *del* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);
                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU──╼◈*

╭────────●●►
│ • *weather* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);

                        break;
                    case '10':               
                        reply(`*◈╾──TOOLS MENU──╼◈*

╭────────●●►
│ • *calc* 
╰──────────────────●●►
╭────────●●►
│ • *translate* 
╰──────────────────●●►
╭────────●●►
│ • *reverse* 
╰──────────────────●●►
╭────────●●►
│ • *tempmail* 
╰──────────────────●●►
╭────────●●►
│ • *checkmail* 
╰──────────────────●●►
╭────────●●►
│ • *delmail* 
╰──────────────────●●►
╭────────●●►
│ • *encode* 
╰──────────────────●●►
╭────────●●►
│ • *decode* 
╰──────────────────●●►
╭────────●●►
│ • *npmstalk* 
╰──────────────────●●►
╭────────●●►
│ • *iplookup* 
╰──────────────────●●►
╭────────●●►
│ • *instastalk* 
╰──────────────────●●►
╭────────●●►
│ • *githubuser* 
╰──────────────────●●►
╭────────●●►
│ • *password* 
╰──────────────────●●►

👩‍💻 *Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

> ᴄʀᴇᴀᴛᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍REPO LINK ❤️‍🔥👇*

🩷◦ https://github.com/MANISHA-CMD

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/v1k9r3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})



cmd({
    pattern: "owner",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*OWNER*

*💗WhatsApp:* https://wa.me/759934522?text=*help🥲*
*💗WhatsApp:* https://wa.me/721551183?text=*help🥲*
💗Join My WhatsApp Channel:* https://whatsapp.com/channel/0029Vb33Gmr6hENhFseLgF2f

*©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/v1k9r3.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "runtime",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "⏰",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =` *⏰ Runtime:-  ${runtime(process.uptime())}* `
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "🕛",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`┌────────────────────
    *├ ⏰ Runtime:-  ${runtime(process.uptime())}*    
    *├ 📟 Ram usage:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
    *├ ⚙️ Platform:- ${os.hostname()}*
    *├ 👨‍💻 Owner:- manisha sasmitha*   
    *├ 🖥️ Version:- 1*
    └───────────────────────
    *©ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🚀",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*ᴅᴀʀᴋ_Qᴜᴇᴇɴ*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `🚀 𝗽𝗶𝗻𝗴 : ${ping}ms` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})




cmd({
    pattern: "allmenu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
}
}

let madeMenu = ` *👋 Hello ${pushname}*

✨𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑴𝑬𝑵𝑼✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ :manisha
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 1
╰──────────●●►
╭──────────●●►
📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
${menu.download}
╰───────────●●►
╭──────────●●►
👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
${menu.ai}
╰───────────●●►
╭──────────●●►
🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.main}
╰───────────●●►
╭──────────●●►
🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.fun}
╰───────────●●►
╭──────────●●►
🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
${menu.convert}
╰───────────●●►
╭──────────●●►
🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
${menu.search}
╰───────────●●►
╭──────────●●►
👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
${menu.group}
╰───────────●●►
╭──────────●●►
🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.owner}
╰───────────●●►
╭──────────●●►
⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.other}
╰───────────●●►
╭──────────●●►
🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
${menu.tools}
╰───────────●●►
*🧚‍♂️ᴅᴀʀᴋ_Qᴜᴇᴇɴ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ🧚‍♂️*
`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/v1k9r3.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
