const {SlashCommandBuilder}=require('@discordjs/builders');

module.exports={
    data:new SlashCommandBuilder()
        .setName('server')
        .setDescription('response server information'),
    async excute(interaction){
        await interaction.reply(`server name: ${interaction.guild.name}\nserver member count: ${interaction.guild.memberCount}`)
    }
};