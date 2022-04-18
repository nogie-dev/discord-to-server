const {SlashCommandBuilder}=require('@discordjs/builders');
const { Guild } = require('discord.js');

module.exports={
    data:new SlashCommandBuilder()
        .setName('disconnect')
        .setDescription('server disconnect'),
    async excute(interaction){

        const guild=interaction.guild
        const username=interaction.user.username.toLowerCase()+"-terminal"
        
        const channelName={} 
        let channelInfo=await guild.channels.fetch()
        channelInfo.forEach((res)=>{
            channelName[res['name']]=res
        })

        //console.log(channelName)
        if(channelName[username]){
            await interaction.reply('server disconnected')
            channelName[username].delete()
        }else{
            interaction.reply(':no_entry_sign:  such a terminal name not exist')
        }
        // .then(console.log)
        // .catch(console.error);
    }
};