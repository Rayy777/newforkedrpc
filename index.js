const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "200 Subscribers Road",
        state: "Creating Discord bots",
        startTimestamp: new Date(),
        largeImageKey: "big",
        largeImageText: "Adobe After Effects",
        smallImageKey: "small",
        smallImageText: "Editing A File",
        buttons : [{label : "Subscribe" , url : "https://www.youtube.com/channel/UCHE7K19D-UzbPWUr7sJaICQ"},{label : "Discord" , url : "https://discord.gg/z6bpqrKj"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '812250397623582722'
})
