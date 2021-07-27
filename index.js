const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const Embeds = require('./embed')

client.on("ready", async => {
    console.log('Bot logged in as ' + client.user.tag)
    console.log('Der Bot ist auf ' + client.guilds.cache.size + ' Servern.')
})

var cmdmap = {
    ping: cmd_ping,
    hypixel: cmd_hypixel

}

function cmd_ping(msg,args) {
    msg.channel.send('Pong @everyone')
}

function cmd_hypixel(msg, args) {
    Embeds.hypixel(msg.channel, args)
}

client.on('message', (msg) => {

    var cont = msg.content,
        author = msg.member,
        channel = msg.channel,
        guild = msg.guild


    if (author.id != client.user.id && cont.startsWith("!")) {

        var invoke = cont.split(' ')[0].substr("!".length),
            args = cont.split(' ').slice(1)
        console.log(invoke, args)
        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args)
        }
    }
})

client.login('ODY5NTQ5NTczMjM5MTA3NjI0.YP_1JQ.lrX1Cg9WVkcoBLYl1yHCp191v0E')