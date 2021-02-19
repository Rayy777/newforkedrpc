const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "In Public Session",
        state: "GTA Online",
        startTimestamp: new Date(),
        largeImageKey: "large",
        largeImageText: "Grand Theft Auto V",
        smallImageKey: "small",
        smallImageText: "Level 500",
        buttons : [{label : "Subscribe" , url : "https://youtube.com/c/UltraX1"},{label : "Discord" , url : "https://discord.gg/7kMWXGTxCD"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '788651921308123136'
})
