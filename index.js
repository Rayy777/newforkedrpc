const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "200 Subscribers Road",
        state: "Creating Discord bots",
        startTimestamp: new Date(),
        largeImageKey: "gtav",
        largeImageText: "Grand Theft Auto V",
        smallImageKey: "gtavlvl",
        smallImageText: "Level 500",
        buttons : [{label : "Subscribe" , url : "https://youtube.com/c/"},{label : "Discord" , url : "https://discord.gg/z6bpqrKj"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '788651921308123136'
})
