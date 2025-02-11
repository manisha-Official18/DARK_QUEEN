const { cmd, commands } = require("../../command");
const yts = require("yt-search");
const { ytmp3 } = require("@vreden/youtube_scraper");

cmd(
  {
    pattern: "song",
    react: "🎵",
    desc: "Download Song",
    category: "download",
    filename: __filename,
  },
  async (
    manisha,
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
      reply,
    }
  ) => {
    try {
      if (!q) return reply("Please give me a url or title");

      // Search for the video
      const search = await yts(q);
      const data = search.videos[0];
      const url = data.url;

      // Song metadata description
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
╚═══════✮❁•°❀°•❁✮════════╝
`;

      // Send metadata thumbnail message
      
const vv = await manisha.sendMessage(
  from, 
  { 
   image: { url: data.thumbnail }, caption: desc 
  }, 
  { quoted: mek }
  );

          manisha.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        const quality = "128"; // Default quality
                         const songData = await ytmp3(url, quality);

      // Validate song duration (limit: 30 minutes)
      let durationParts = data.timestamp.split(":").map(Number);
      let totalSeconds =
        durationParts.length === 3
          ? durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2]
          : durationParts[0] * 60 + durationParts[1];

      if (totalSeconds > 1800) {
        return reply("⏱️ audio limit is 30 minitues");
      }
                        await manisha.sendMessage(
                        from, 
                        { 
                          audio: { url: songData.download.url },
                          mimetype: 'audio/mpeg'
                        },
                          { quoted: mek }
                          );
                        break;
                    case '2':
                        const quality = "128"; // Default quality
                         const songData = await ytmp3(url, quality);

      // Validate song duration (limit: 30 minutes)
      let durationParts = data.timestamp.split(":").map(Number);
      let totalSeconds =
        durationParts.length === 3
          ? durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2]
          : durationParts[0] * 60 + durationParts[1];

      if (totalSeconds > 1800) {
        return reply("⏱️ audio limit is 30 minitues");
                }
                        await manisha.sendMessage(
                        from, 
                        { 
                          document: { url: songData.download.url },
                          mimetype: 'audio/mpeg', 
                          fileName:`${data.title}.mp3`,
                          caption: "*©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ",
                          },
                          { quoted: mek }
                        );
                        break;
                        await manisha.sendMessage(
                          from, 
                          { react: { text: '✅', key: mek.key 
                          } 
                          })
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await manisha.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});



    
