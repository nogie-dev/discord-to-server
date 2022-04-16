const {SlashCommandBuilder}=require('@discordjs/builders');
const { Guild } = require('discord.js');

module.exports={
    data:new SlashCommandBuilder()
        .setName('disconnect')
        .setDescription('server disconnect'),
    async excute(interaction){
        await interaction.reply('server disconnected')
        interaction.guild.channels.cache.forEach((test)=>{
            if(test.name==interaction.user.username){test.delete()}
        })
        // .then(console.log)
        // .catch(console.error);
    }
};