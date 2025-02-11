const { cmd, commands } = require("../../command");
const { default: getFbVideoInfo } = import('fb-downloader-scrapper');
cmd(
  {
    pattern: "fb",
    alias: ["facebook"],
    react: "💀",
    desc: "Download Facebook Video",
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
      if (!q) return reply("*Please provide a valid Facebook video URL!* 🌚❤️");

      // Validate the Facebook URL format
      const fbRegex = /(https?:\/\/)?(www\.)?(facebook|fb)\.com\/.+/;
      if (!fbRegex.test(q))
        return reply("*Invalid Facebook URL! Please check and try again.* 🌚");

      // Fetch video details
      reply("*Downloading your video...* 🌚❤️");

      const result = await getFbVideoInfo(q);

      if (!result || (!result.sd && !result.hd)) {
        return reply("*Failed to download video. Please try again later.* 🌚");
      }

      const { title, sd, hd } = result;

      // Prepare and send the message with video details
      let desc = `
╔═══════✮❁•°♛°•❁✮════════╗
 𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵 𝑭𝑩 𝑽𝑰𝑫𝑬𝑶 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫𝑬𝑹
╚═══════✮❁•°♛°•❁✮════════╝
╔═══════✮❁•°❀°•❁✮════════╗
⭕➥Title:* ${title || "Unknown"}
⭕➥Quality:* ${hd ? "HD Available" : "SD Only"}

> *©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀɴɪꜱʜᴀ ꜱᴀꜱᴍɪᴛʜᴀ*
╚═══════✮❁•°❀°•❁✮════════╝`;
      await manisha.sendMessage(
        from,
        {
          image: {
            url: "https://raw.githubusercontent.com/manisha-Official18/TEST/refs/heads/main/fb_download.jpg",
          },
          caption: desc,
        },
        { quoted: mek }
      );
      // Send the video if available
      if (hd) {
        await manisha.sendMessage(
          from,
          { video: { url: hd }, caption: "----------HD VIDEO----------" },
          { quoted: mek }
        );
        await manisha.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------" },
          { quoted: mek }
        );
      } else if (sd) {
        await manisha.sendMessage(
          from,
          { video: { url: sd }, caption: "----------SD VIDEO----------" },
          { quoted: mek }
        );
      } else {
        return reply("*No downloadable video found!*");
      }

      return reply("*Thanks for using my bot*");
    } catch (e) {
      console.error(e);
      reply(`*Error:* ${e.message || e}`);
    }
  }
);
