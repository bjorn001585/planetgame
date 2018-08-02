const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`);  
    //bot.user.setActivity("на Triger_3 и говорит что он даун", {type: "WATCHING"});     //Смотрит   {},
    bot.user.setGame("Crafter топ ники noob | #help");                   //Играет в  {}.
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);

    //command: avatar 
    if (cmd === `${prefix}avatar`) {
    }
    //command: say [text]
    if (cmd === `${prefix}say`) {
        if (!args[0])
            return message.channel.send("\`\`\`!say [text]\`\`\`")
        let say = args.join(" ");
        message.channel.send(say)
        message.delete().catch(O_o=>{});
    }
    //command: test [просто проверка!]
    if (cmd === `${prefix}test`) {
        message.delete().catch(O_o=>{});
        let testEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName + " | тест успешно пройден, напиши `!help` что-бы узнать больше команд!")
        .setColor("#0F0000")
        .setFooter("Ильич");
        return message.channel.send(testEmbed);
    }
    //command: on
    if (cmd === `${prefix}on`) {
        message.delete().catch(O_o=>{});
        let onEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName + " вернулся, но продолжает пинать хуи")
        .setColor("#0F0000")
        .setFooter("Ильич");
        return message.channel.send(onEmbed);
    }
    //command: off
    if (cmd === `${prefix}off`) {
        message.delete().catch(O_o=>{});
        let offEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName + " ушел пинать хуи, скоро вернется")
        .setColor("#0F0000")
        .setFooter("Ильич");
        return message.channel.send(offEmbed);
    }
    //command: ping
    if (cmd === `${prefix}ping`) {
        var p1 = `\`\`${bot.pings[0]}ms\`\``
        let pingEmbed = new Discord.RichEmbed()
        .setTitle("Основной Ping")
        .setColor("#0F0000")
        .setDescription("Соединение с сервером - " + p1)
        .setFooter("Внимание: это не ваш пинг, а бота!")
        return message.channel.send(pingEmbed);
        message.delete().catch(O_o=>{});
    }
    //command: pidor
    if (cmd === `${prefix}pidor`) {
        var pid1 = Math.floor(Math.random() * 100) + 0
        let pidorEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName + " на " + pid1 + "% пидор")
        .setColor("#0F0000")
        .setFooter("Ильич");
        return message.channel.send(pidorEmbed);
    }
    //command: creator
    if (cmd === `${prefix}creator`) {
        message.delete().catch(O_o=>{});
        let creatorEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName)
        .setColor("#0F0000")
        .setDescription("Разработчик этого бота... Ебобо Гитлер")
        .setFooter("Ильич");
        return message.channel.send(creatorEmbed);
    }
    //command: лох [@nick]
    if (cmd === `${prefix}лох`) {
        if (!args[0])
            return message.channel.send("\`\`\`!лох [@nick]\`\`\`")
        let лох = args.join(" ");
        message.delete().catch(O_o=>{});
        let лохEmbed = new Discord.RichEmbed()
        .setTitle("Я провел работу по поиску лохов, " + message.member.displayName)
        .setDescription("Оказалось, что лох вот этот пользователь, " + (лох))
        .setColor("#0F0000")
        .setFooter("Ильич");
        return message.channel.send(лохEmbed);
    }
    //command: iluxa [@nick]
    if (cmd === `${prefix}iluxa`) {
        if (!args[0])
            return message.channel.send("\`\`\`!iluxa [@nick]\`\`\`")
        let iluxa = args.join(" ");
        message.delete().catch(O_o=>{});
        let iluxaEmbed = new Discord.RichEmbed()
        .setTitle(message.member.displayName + " Отправил smsку " + `${iluxa}` + " со следующим содержанием")
        .setColor("#0F0000")
        .setDescription("Брей пизду и жопу, Илюха у мчится")
        .setFooter("Ильич");
        return message.channel.send(iluxaEmbed);
    }
    //command: sms [@user] [message]
    if (cmd === `${prefix}sms`) {
        let user = message.mentions.members.first();
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                if (!user) {
                    message.delete
                    message.reply('Ошибка. Причина: **Не указан получатель сообщения**');
                    return
                }
                const sendMessage = args.join(" ");
                let msg = user.send('**Вам пришло сообщение от ' + message.author + '. Он сказал:**' + sendMessage.replace(user, '')).catch(()=>{message.reply('Ошибка. Причина: **Не указано сообщение**');
                })
                message.delete().catch(O_o=>{});
            } else {
                message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду send, вы должны иметь право `Управлять сообщениями`**');
        }
        
    }
    //command: help
    if (cmd === `${prefix}help`) {
        message.delete().catch(O_o=>{});
        let helpEmbed = new Discord.RichEmbed()
        .setTitle("А вот и помощи подьехала: " + message.member.displayName)
        .setColor("#0F0000")
        .setDescription("Основной префикс бота `#`\n\n`#avatar` - покажу, каким я в последний раз видел вашего друга (в зазработке)\n`#test` - Проверить работу способность\n`#ping` - Узнать пинг бота\n`#лох` - найду того, кто последний раз вас отпиздил\n`#iluxa` - позвоним Илюхе (Бета, есть ошибки)\n`#pidor` - пройди тест на Пидора\n`#sms` - отправлю смс выбранному чуваку\n`#off` - оповещаю о том, что вы отошли\n`#on` - оповещаю о том, что вы подошли\n`#creator` - подскажу, кто из этой толпы мой создатель\n`#fight` - потренеруюсь с тобой в силе (в разработке)\n`#say` - горланю анекдоты про лупу и пупу за вас\n`#meme` - кидаю мемчики (в разработке)\n`#choose` - сделаю за тебя выбор (в разработке)\n`#ask` - задай мне вопрос (~~это не пиар аск.фм~~) (в зарзаботке)\n`#site` - узнаешь где сидит мой создатель (упырь)!\n\nТе команды где `(в зарработке)` не работают или не доработаны")
        .setFooter("Ильич");
        return message.channel.send(helpEmbed);
    }
    //command: 

    //command: site
    if (cmd === `${prefix}site`) {
        let vk = "https://vk.cc/8iKejH"
        let mono = "https://vk.cc/8iKeaz"
        let git = "https://vk.cc/8iKeSc"
        message.delete().catch(O_o=>{});
        let siteEmbed = new Discord.RichEmbed()
        .setTitle("Тут можно найти этого ублюдка!")
        .setColor("0F0000")
        .setDescription("VK - " + `${vk}` + "\nMono - " + `${mono}` + "\nGithub - " + `${git}`)
        .setFooter("Ильич");
        return message.channel.send(siteEmbed);
    }
});

bot.login(process.env.BOT_TOKEN);
