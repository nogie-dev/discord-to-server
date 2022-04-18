//const myEvent=require('./ssh/sshConnect')
const toServer=require('./ssh/testConnect')

const fs=require('node:fs')
const {prefix,bot_token}=require('./config/config.json')
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands=new Collection()

const commandFiles=fs.readdirSync('./commands').filter(file=>file.endsWith('.js'))

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

     //존재하는 슬래시 명령어로 들어오면 key 매칭
    const command = client.commands.get(interaction.commandName);


    const username=interaction.user.username.toLowerCase()+"-terminal"
    console.log(interaction.channel.name)

     //command가 없을 경우 무반응
    if (!command) return;

    try{
        //interaction을 command 파일에 넘겨서 처리함    
        command.excute(interaction) 
    }catch(err){
        console.log(err)
        await interaction.reply({ content: '명령어를 실행하면서 Error가 발생했습니다.', ephemeral: true });
    }
});

client.on('messageCreate', async msg=>{
    //메세지가 길드에서 온것이 아니면 무시
    if(!msg.guild) return
    //메세지가 bot이 보낸거라면 무시
    if(msg.author.bot) return
    const username=msg.member['user']['username'].toLowerCase()+'-terminal'
    if(msg.channel.name!=username){
        msg.reply(':no_entry_sign: There is not your terminal channel')
    }else{
    const returnShell=await toServer.test(msg.content)

        if(returnShell['stderr']){
            msg.reply('```'+returnShell['stderr']+'```')
        }else{
            msg.reply('```'+returnShell['stdout']+'```')
        }
    }
})

client.login(bot_token);