const {prefix,bot_token}=require('./auth/token.json') //변수 명 맞춰야 함
const Discord=require('discord.js')
const client=new Discord.Client();


console.log(prefix)
client.on('ready',()=>{
    console.log(client.user.tag)
})

client.on('message',msg=>{
    //무한반복 방지
    if(msg.author.bot){return} //메세지 작성자가 bot일 경우 무시
    if(msg.author.id===client.user.id){return}

    if(msg.content=="야"){
        
    }
})

client.login(bot_token)