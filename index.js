"use strict";

const 
    irc = require('irc');
const configs = require("./config.json");

const nick = "diegojsrw_bot";
var client = new irc.Client('irc.freenode.net', nick, {
    channels: ["#diegojsrw-test"],
    sasl: false,
    nick: "diegojsrw_bot",
    username: "diegojsrw_bot",
    password: configs.passwd
});
const fireStatusQuerying = function(){
    client.say("diegojsrw", "cmd status");
    setTimeout(fireStatusQuerying, 5000);
    
}

client.on("join", (chan, _nick, msg)=>{
    if(_nick != nick) return;
    client.say("diegojsrw", "cmd login diegojsrw "+configs.minetest.passwd);
    setTimeout(fireStatusQuerying, 1000);
})

client.on("raw", (msg)=>{
    console.log(msg);
})

client.on("message", (nick,to,text,msg)=>{
    //Parse and Get max_lag

    //Send it to shared websocket
})