const Discord = require('discord.js')
const { Client, Partials, Collection, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const fetch = require("node-fetch")
const Database = require('easy-json-database');
const config = require('./config/config');
const colors = require("colors");
const mongoose = require('mongoose');
const autoresSchema = require('./schemas/autores')
const prefix = 'k'

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "I Love you",
      type: 0
    }],
    status: 'dnd'
  }
});
client.snipes = new Map()
client.on('messageDelete', function(message){
  const { content, author, attachments } = message;
  client.snipes.set(message.channelId, { content, author, attachments })
})
require("replit-dis-uniter")(client);

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true});

client.rest.on("rateLimited", async ({ timeToReset, global }) => {
  if (timeToReset > 10000 && !global) await process.kill(1);
})

// Host the bot:
fetch("https://discord.com/api/v10/gateway")
  .then(async ({ status }) => {
    if (status === 429) await process.kill(1);
  })

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required! Use Envrionment Secrets or config.js.".red)
  return process.exit();
};

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});

setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, 3 * 1000 * 60);

client.on('guildMemberAdd', (member) => {
 let embed = new EmbedBuilder()
 .setDescription(`Thank You For Joining, and we hope you will have a nice stay. Don't forget to read the rules ! <3`)
 .setColor("#780505")
 .setImage('https://images-ext-2.discordapp.net/external/EvXrJEdbgVYn7CAB-aprJ4fdRWe12rGqI_9UM-iwHzc/https/media.discordapp.net/attachments/807855408101720094/821345918200184862/image0.jpg')
 
 member.guild.channels.cache.find(k => k.name == "⊹🍁┄-╮welcome").send({ content: `${member.user}, Welcome to ${member.guild.name}`, embeds: [embed] }).catch((err) => console.log(err))

})

const tiktokConfig = require("./config/tiktok");
    const resolveID = async () => (await tiktok.getUserProfileInfo("kitsunee._")).user.id;
    const sync = async (userID) => {
      const cache = db.get("cache");
      const { collector: newPosts } = await tiktok.user(userID);
      if (newPosts.length === 0) return;
        const newPostsSorted = newPosts.sort((a, b) => b.createTime - a.createTime).slice(0, 10);
      if (cache) {
        const post = newPostsSorted.filter(p => !cache.includes(p.id))[0];
        if (post && (post.createTime > ((Date.now() - 24 * 60 * 60 * 1000) / 1000))) {
          const author = post.authorMeta.nickname;
          const link = post.webVideoUrl;
          const embeds = [
            new EmbedBuilder()
            .setColor("#00FF00")
            .setAuthor({ name: author, iconURL: client.user.displayAvatarURL() })
            .setTitle(post.text)
            .setImage(post.covers.default)
            .setTimestamp()
          ]
          client.channels.cache.get(tiktokConfig.notify)
            .send({ content: "hai semua kitsu post video baru nih 🦊", embeds });
        }
      }
      db.set("cache", newPostsSorted.map(p => p.id));
}
client
	.once('ready', async () => {
		console.log(`${client.user.tag} Logged it`);
    const userID = await resolveID();
    sync(userID);
    setInterval(() => sync(userID), 120 * 1000)
	})
	.on('messageCreate', async (message) => {
        if(message.author.bot) return;
        var data = await autoresSchema.find({guildId: message.guild.id})
        if(data) {
            const f = data.find(c => c.msg.toLowerCase() === message.content.toLowerCase()) 
            if(f) {
            return message.reply(f.res)
            }
        } 
		if(message.content.startsWith(prefix + 'add')) {
            if(!message.member.permissions.has('ManageGuild')) return message.reply('You dont have permissions to run this command.')
            message.reply('**Hi, Please send msg thats you want 🦊, `Kitsu`**')
            const filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages({ filter, max: 1 }).then(c => {
                message.reply('**Now please send the response, `😆`**')
                message.channel.awaitMessages({ filter, max: 1 }).then(async(d) => {
                    const id = idgen()
                    message.reply({ embeds: [new EmbedBuilder()
                    .setTitle('🦊 Auto responsess')
                    .setColor("#2f3136")
                    .setDescription(`**\`\`\`>  msg: ${c.first().content}\n>  res: ${d.first().content}\n>  Id: ${id} \`\`\`**`)] });
                    await autoresSchema.create({ guildId: message.guild.id, msg: c.first().content, res: d.first().content, makeId: idgen() });
                })
            })
        }
        if(message.content.startsWith(prefix + 'list')) {
            if(!message.member.permissions.has('ManageGuild')) return message.reply('You dont have permissions to run this command.')

            if(data) {
                console.log(data)
                message.reply({ embeds: [new EmbedBuilder()
                .setTitle('🦊 Auto responsess')
                .setColor("#2f3136")
                .setDescription(data.map((d, index) => `**#${index+ 1}\n>  Message: ${d.msg}\n>  Response: ${d.res} \n>  Id: ${d.makeId}**`).join("\n"))
                ] })
            }
        }
        if(message.content.startsWith(prefix + 'edit')) {
            if(!message.member.permissions.has('ManageGuild')) return message.reply('You dont have permissions to run this command.')
            message.reply('Please send document ID (Auto response id)')
            const filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages({ filter, max: 1 }).then(async(c) => {
                var datas = await autoresSchema.findOne({guildId: message.guild.id, makeId: c.first().content})
                if(!datas) return message.reply('I can\'t find anything')
                message.reply('Please send new msg')
                message.channel.awaitMessages((msg) => msg.author.id === message.author.id, {max: 1}).then((d) => {
                    message.reply('Please send new Response')
                    message.channel.awaitMessages((msg) => msg.author.id === message.author.id, {max: 1}).then(async(e) => {
                        datas.msg = d.first().content
                        datas.res = e.first().content
                        await datas.save()
                                             
                          message.reply('Done thats save')
                    })
                })
            })
        }
        if(message.content.startsWith(prefix + 'remove')) {
            if(!message.member.permissions.has('ManageGuild')) return message.reply('You dont have permissions to run this command.')
            message.reply('Please send document ID (Auto response id)')
            const filter = m => m.author.id === message.author.id;
            message.channel.awaitMessages({ filter, max: 1 }).then(async(c) => {
                const datas =  await autoresSchema.findOne({guildId: message.guild.id, makeId: c.first().content})
                if(!datas) return message.reply('I cant find the document id')
                datas.deleteOne().then(() => message.reply('Done has been deleted'))
            })
        }
	}); 

function idgen() {
    return  `_${Math.random().toString(36).substr(2, 5)}_${Math.random().toString(36).substr(2, 5)}`
}