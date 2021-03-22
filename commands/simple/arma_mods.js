const { DiscordAPIError } = require('discord.js');
const commando = require('discord.js-commando');

class ArmaModsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'arma',
            group: 'simple',
            memberName: 'arma',
            description: 'Sends the Arma 3 mod collection link to chat.'
        });
    }

    async run(message, args, commando)
    {
        const armaEmbed = new commando.MessageEmbed()
        .setColor('#f54242')
        .setTitle('VaZe Clan Arma 3 Mod Collection')
        .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2432475640')
        .setDescription('This link is the VaZe Clan Arma Mod Collection')
        .setFooter('Make sure you are up to date!');

        message.channel.send(armaEmbed)
    }
}

module.exports = ArmaModsCommand;