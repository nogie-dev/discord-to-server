const fs=require('fs')
//const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, bot_token } = require('./config/config.json');

const commands = [];
const commandFiles=fs.readdirSync('./commands').filter(file=>file.endsWith('.js')) //commands 아래 파일명을 불러옴

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    //console.log(typeof command)
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(bot_token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


//재실행 시 기존의 명령어들은 삭제되고 새로 추가 됨