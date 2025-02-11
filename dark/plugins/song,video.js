const {cmd , commands} = require('../../command')
const yts = require('yt-search');
const fg = require('api-dylux');

// -------- Song Download --------
cmd({
    pattern: 'song',
    alias: ["get"],
    desc: 'Download Song',
    use: '.play Title',
    react: "🎵",
    category: 'download',
    filename: __filename
},
async (conn,
       mek, 
       m, 
       {
         from, 
         quoted, 
         body,
         isCmd, 
         command, 
         args,
         q, 
         isGroup,
         sender,
         senderNumber,
         botNumber2, 
         botNumber, 
         pushname,
         isMe, 
         isOwner, 
         groupMetadata, 
         groupName,
         participants, 
         groupAdmins, 
         isBotAdmins,
         isAdmins, 
         reply }) => {
    try {
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
╔═══════✮❁•°♛°•❁✮════════╗
 𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑺𝑶𝑵𝑮 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫
╚═══════✮❁•°♛°•❁✮════════╝

╔═══════✮❁•°❀°•❁✮════════╗
⭕➥Title:* ${data.title} 
⭕➥Duration:* ${data.timestamp} 
⭕➥Views:* ${data.views} 
⭕➥Uploaded On:* ${data.ago} 
⭕➥Link:* ${data.url} 

*🔢 REPLY NUMBER*

*𝟏  𝑨𝑼𝑫𝑰𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫*
*𝟐  𝑨𝑼𝑫𝑰𝑶 𝑫𝑶𝑪𝑼𝑴𝑬𝑵𝑻*

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
╚═══════✮❁•°❀°•❁✮════════╝`;

        const vv = await conn.sendMessage(
          from, { 
            image: { url: data.thumbnail }, 
            caption: desc 
          },
          { 
            quoted: mek }
        );

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let down = await fg.yta(url);
                        let downloadUrl = down.dl_url;
                        await conn.sendMessage(
                          from, { audio: { url:downloadUrl },
                                 caption: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*',  
                                 mimetype: 'audio/mpeg'
                                },
                          { 
                            quoted: mek }
                        );
                        break;
                    case '2':
                        let downdoc = await fg.yta(url);
                        let downloaddocUrl = downdoc.dl_url;
                        await conn.sendMessage(
                          from, { document: { url:downloaddocUrl }, 
                                 caption: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*',
                                 mimetype: 'audio/mpeg', 
                                 fileName:data.title + ".mp3"
                                }, 
                          {
                            quoted: mek });
                        break;
                        await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
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



//====================VIDEO_DOWNLOAD=================

// -------- Video Download --------
cmd({
    pattern: 'video',
    alias: ["get"],
    desc: 'Download Video',
    use: '.play Title',
    react: "🎬",
    category: 'download',
    filename: __filename
},
async (
  conn,
       mek, 
       m, 
       { 
  from, 
  quoted, 
  body, 
  isCmd, 
  command, 
  args, 
  q,
  isGroup, 
  sender, 
  senderNumber, 
  botNumber2,
  botNumber, 
  pushname, 
  isMe, 
  isOwner, 
  groupMetadata,
  groupName, 
  participants, 
  groupAdmins, 
  isBotAdmins, 
  isAdmins, 
  reply }) => {
    try {
        if (!q) return reply('Please provide a title.');

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        let desc = `
╔═══════✮❁•°♛°•❁✮════════╗
 𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑽𝑰𝑫𝑬𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫
╚═══════✮❁•°♛°•❁✮════════╝

╔═══════✮❁•°❀°•❁✮════════╗
⭕➥Title:* ${data.title} 
⭕➥Duration:* ${data.timestamp} 
⭕➥Views:* ${data.views} 
⭕➥Uploaded On:* ${data.ago} 
⭕➥Link:* ${data.url} 

*🔢 REPLY NUMBER*

*𝟏  𝑽𝑰𝑫𝑬𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫*
*𝟐  𝑽𝑰𝑫𝑬𝑶 𝑫𝑶𝑪𝑼𝑴𝑬𝑵𝑻*

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
╚═══════✮❁•°❀°•❁✮════════╝`;

        const vv = await conn.sendMessage(
          from, 
          { 
            image: { url: data.thumbnail
          }, 
            caption: desc 
          }, 
          { 
            quoted: mek}
        );

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        let downvid = await fg.ytv(url);
                        let downloadvUrl = downvid.dl_url;
                        await conn.sendMessage(
                          from,
                          { 
                            video : { url:downloadvUrl }, 
                            caption: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*', 
                            mimetype: 'video/mp4'
                          },
                          { 
                            quoted: mek }
                        );
                        break;
                    case '2':
                        let downviddoc = await fg.ytv(url);
                        let downloadvdocUrl = downviddoc.dl_url;
                        await conn.sendMessage(
                          from, { 
                            document: { url:downloadvdocUrl }, 
                            caption: '> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*', 
                            mimetype: 'video/mp4',
                            fileName:data.title + ".mp4" 
                          }, 
                          { 
                            quoted: mek }
                        );
                        break;
                        await conn.sendMessage(
                          from, { react: { text: '✅', key: mek.key } })
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

