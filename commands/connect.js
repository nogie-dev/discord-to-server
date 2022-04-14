const {SlashCommandBuilder}=require('@discordjs/builders');
const { Guild } = require('discord.js');

module.exports={
    data:new SlashCommandBuilder()
        .setName('connect')
        .setDescription('server connect'),
    async excute(interaction){
        await interaction.reply('server connected')
        
        const username=interaction.user.username
        interaction.guild.channels.create(username, { reason: 'Needed a cool new channel' })
        // .then((ch)=>{
        //     interaction.guild.channel.send('hello')
        // })
        //.then(console.log)
        //.catch(console.error);
    }
};