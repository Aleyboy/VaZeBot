const commando = require('discord.js-commando');
const RichEmbed = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'arma',
            group: 'simple',
            memberName: 'arma',
            description: 'Sends the Arma 3 mod collection link',
            examples: ['embed testing'],
            args:[
                {
                    key: 'text',
                    prompt: 'what text would you like the bot to embed',
                    type: 'string'
                }
            ]
        });
    }

    run(msg, args) {
        const { text } =args;
        const embed = new RichEmbed()
            .setTitle('VaZe Clan Arma 3 Mod Collection')
            .setDescription('This link is the VaZe Clan Arma Mod Collection')
            .setColor('#f54242')
            .setURL('https://steamcommunity.com/sharedfiles/filedetails/?id=2432475640')
            .setFooter('Make sure you are up to date!');
        return msg.embed(embed);
    }
};