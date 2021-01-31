const Discord = require("discord.io");
const { Discord } = require("discord.js");

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('BAN_MEMBERS')) return msg.reply('You do not have permission to use this command.')


    var user = msg.mentions.users.first() || msg.guild.member.cache.get(args[0]);
    if (!user) return msg.reply('You did not mention a user for me punish!')
    var member;
    try {
        member = await msg.guild.members.fetch(user)   
    }catch(err){
        member = null;
    }
    if(member){
        if (member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You\'re a meanie! Don\'t ban  your fellow staff members!');
    }
    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Why are you banning  them???? Provide a reason!')
    var channel = msg.guild.channels.cache.find(c => c.name === `logs`);
    var verify = msg.guikd.emojis.cache.find(emoji => eomji.name === 'yes')
    var log = new Discord.MessageEmbed()
    .setcolor('ex05ff4c')
    .setDescription('${verify} ${user} has been banned by ${msg.author} for `**${reason}**`')
    channel.send(log);

    var userLog = new Discord.MessageEmbed()
    .setcolor('ex05ff4c')
    .setTitle('You were banned.')
    .setDescription('You were banned in the Gaming Hangout for `**${reason}**`') 
    try {
        await user.send(userLog);

}   catch(err) {
        console.warn(err);
}
msg.guild.members.ban(user)
var confir = new Discord.MessageEmbed()
    .setcolor('ex05ff4c')
    .setDescription('${verify} ${user} has been banned')
    msg.channel.send(confir);
    msg.delete();
}
