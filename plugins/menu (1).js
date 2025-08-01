const { cmd, commands } = require("../command");
const config = require('../config');

cmd(
  {
    pattern: "menu",
    alise: ["list"],
    react: "⚔️",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
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
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `😺 *HelloW  ${pushname}*

> *𝘸𝘦𝘭𝘤𝘰𝘮𝘦 𝘵𝘰 𝘬𝘢𝘷𝘪-𝘮𝘥 🎗️*

* ${menu.main}
* ${menu.download}    
* ${menu.group}
* ${menu.convert}

${config.FOOTER}`;

      await robin.sendPresenceUpdate('recording', from);

      await robin.sendMessage(
        from,
        { audio: { url: "https://files.catbox.moe/x1tr4y.mp3" }, mimetype: 'audio/mpeg', ptt: true },
        { quoted: mek }
      );

      await robin.sendMessage(
        from,
        {
          image: { url: config.ALIVE_IMG },
          caption: madeMenu
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
