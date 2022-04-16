const {SlashCommandBuilder}=require('@discordjs/builders');
//const { Guild,Permissions } = require('discord.js');

module.exports={
    data:new SlashCommandBuilder()
        .setName('connect')
        .setDescription('server connect'),
    async excute(interaction,client){
        const guild=interaction.guild
        const username=interaction.user.username.toLowerCase()+"-terminal"
        let everyoneRole = guild.roles.cache.find(r => r.name === '@everyone');
        //console.log(everyoneRole)

        //채널 정보 담아옴
        const channelName={} //속도 개선을 위해 dictionary 방식 이용
        let channelInfo=await guild.channels.fetch()
        channelInfo.forEach((res)=>{
            channelName[res['name']]='blank'
        })

        console.log(username)

        if(!channelName[username]){
            interaction.reply(':white_check_mark:  Server connected')

            guild.channels.create(username, {
                type: 'GUILD_TEXT',
                permissionOverwrites: [
                    {
                        id: everyoneRole.id,
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: interaction.user.id,
                        allow: ['VIEW_CHANNEL']
                    }
                ],
            })
        }else{
            interaction.reply(':no_entry_sign:  Already exist your terminal')
        }
    }
};