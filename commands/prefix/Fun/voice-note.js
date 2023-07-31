const { readFile } = require('fs/promises');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: "vn", // Name of Command
        description: "Gacha vn kitsu", // Command Description
        usage: "pap vn" // Command usage
    },
    permissions: ["SendMessages"], // User permissions needed
    owner: true, // Owner only?
    run: async (client, message, args, prefix, config) => {
      console.log("Vn executed")
        // execute
        const sample = await readFile('./baka.ogg');
       const waveform = Buffer.from(sample.slice(0, 100)).toString('base64');
      const cache = await fetch(`https://discord.com/api/v10/channels/${message.channelId}/attachments`, {
        method: 'POST',
        headers: { Authorization: `Bot ${process.env.token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: [
            {
              file_size: sample.length,
              filename: 'voice-message.ogg',
              id: '2'
            }
          ]
        })
      });
      const rawData = await cache.json();
      const { upload_filename, upload_url } = rawData.attachments[0];
      console.log
      await fetch(upload_url, {
        method: 'PUT',
        headers: {'Content-Type': 'audio/ogg'},
        body: sample
      });
      const post = await fetch(`https://discord.com/api/v10/channels/${message.channelId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bot ${process.env.token}`,
          'Content-Type': 'application/json',
          'x-super-properties': 'eyJvcyI6IldpbmRvd3MiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo5OTk5OTk5fQ=='
        },
        body: JSON.stringify({
          message_reference: {
            message_id: message.id,
            guild_id: message.guildId
          },
          flags: 8192,
          attachments: [{
            id: '0',
            filename: 'voice-message.ogg',
            uploaded_filename: upload_filename,
            duration_secs: 2,
            waveform
          }]
        })
      })
        console.log((await post.json()));
    },
};