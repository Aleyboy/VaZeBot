const botconfig = require("./botconfig.json");

const Commando = require("discord.js-commando");

const bot = new Commando.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is online`);

    bot.user.setActivity("in the VaZe Dungeons")

});



bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;



    let prefix = botconfig.prefix;

    let messageArray = message.content.split(" ");

    let cmd = messageArray[0];

    let args = messageArray.slice(1);





});


// Simple Listener events
bot.on('message', message => {



    if(message.content.toLowerCase() === 'hello')

        message.channel.send('Hey there!' + message.author);



    else if(message.content.includes("taytay is bad"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("taytay is shit"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("taytay sucks"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("taylor swift is bad"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("taylor swift is shit"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("taylor swift sucks"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("fuck taylor swift"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("fuck taytay"))

        message.reply('Halt! Speak only of our almighty in a positive manner, or pay the price!');



    else if(message.content.includes("corey is dumb"))

        message.reply("You're damn right");



    else if(message.content.includes("You're damn right"))

        message.channel.send('Hah! Got eem!')

    }
)

// Word blacklisting attempts
bot.on('message', message => {

    let blacklisted = ['kitten', 'cummies']; // Blacklisted words

    //Checking for the word
    let foundInText = false;
    for (var i in blacklisted) {  //Loops through each blacklisted item
        if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    } //Checks if the current item is included in the message (case insensitive)

    //If the word is found, delete it and warn the user
    if (foundInText) {
        message.delete();
        message.channel.send('None of that!')
            .then(sentMessage => sentMessage.delete(10000)) // Auto delete message after 10 seconds in milliseconds
            .catch(console.error)
    }
    
})

bot.registry.registerGroup('simple','Simple');

bot.registry.registerDefaults();

bot.registry.registerCommandsIn(__dirname + '/commands');



bot.login(botconfig.token);