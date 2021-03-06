//Web Page
const http = require('http');
http.createServer(function (req, res) {
  res.write("無事成功しました。");
  res.end();
}).listen(8080);

//定義系
const Discord = require('discord.js');
const client = new Discord.Client({ intents: Object.values(Discord.Intents.FLAGS) });
const token = process.env.DISCORD_BOT_TOKEN;
const prefix = "k#"

//起動設定
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(client.guilds.cache.size + "serversに導入済み | 暇を持て余した神々の遊び", { type: "PLAYING" },{ status: "online" });
  client.application.commands.set([
    {
      name: "ping",
      description: "Pong!"
    }
  ]);
});

//メッセージ対応
client.on('messageCreate', async message =>{
  if (message.author.bot) return;
  if (message.content === "にゃーん"){
    message.reply("にゃーん")
  }
  if (!message.content.startsWith(prefix) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  if (command === "ping") {
    message.channel.send(`只今のPing値は${client.ws.ping}msです。`);
  }
)};

//Login
client.login(token);
