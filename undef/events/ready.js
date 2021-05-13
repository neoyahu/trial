const chalk = require("chalk");
const moment = require("moment");
const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {

client.on('ready', () => {
    console.log(`------------------------------------------------`)
    console.log(`${client.commands.size} Tane komut yüklendi`)
    console.log ('Pişt botun başarıyla aktif oldu yakışıklı!')
    console.log(`------------------------------------------------`)
    
    // Botun durumu
    const durumlen = [
      "Shréwd Was Here",
      "",
      "",
      "", // tırnak içinde olanları değiştirebilirsiniz 
      
      `${client.guilds.cache.size} Tane Sunucuya Hizmet Ediyorum!`,
      `${client.users.cache.size} Tane Kullanıcı!`,
    ]
    setInterval(function () {
     let durumaw = durumlen[Math.floor(Math.random()*durumlen.length)]
     client.user.setStatus("idle") // İDLE = BOŞTA | DND = RAHATSIZ ETMEYİN | ONLİNE = ÇEVRİMİÇİ | OFFLİNE = ÇEVRİMDIŞI
     client.user.setActivity(durumaw)

    }, 5000);
  });   
}