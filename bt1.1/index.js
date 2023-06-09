// open bot nodemon
channelId = '1095942175952470097'
botname = 'bot-ts'
token ="MTA5NTk0MjI2MTgwMTUwMDY3Mg.GE3GqP.Ip0Iw1_DEbJpNKOQEhuocJ5US1sGuK65OTUyiI"
botver ="bt 1.1"

const { Client, IntentsBitField, Message} = require( 'discord.js');

const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers, 
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
    });

    client.on('ready', (c) => {
        console.log(`✅${c.user.tag} is online in ${channelId} pbtnn grop.`+ botver +`
😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎 `);
    });
    client.on('messageCreate', (msg)=>{
       // console.log((msg.channelId).toString)
        if (msg.channelId === channelId & msg.author.bot === false ){
        if (msg.content === 'ราคา' ){
           // cal();
            msg.reply("สามารถสอบถามราคาได้ที่ https://web.facebook.com/profile.php?id=100090767058801 หรือ ใช้คำสั่ง room-ตามด้วยจำนวนห้อง");
            console.log('reply ok 📤');
            console.log(msg.author.bot);
        }else if(msg.content.toLowerCase() === 'web'){
            msg.reply("Web url is https://pbtnn.000webhostapp.com");
            console.log('reply ok 📤');
           console.log(msg.author.bot );
        }else if (msg.content.toLowerCase() === "help") {
            msg.reply(`you can in put comman 
✅ ราคา
✅ web
✅ ver
✅ ping
✅ us_name
✅ room-ตามด้วยจำนวนห้อง`);
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
        }else if(msg.content.toLowerCase() === 'ver'){
            msg.reply("bot ver = "+botver);
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
        }
        else if (msg.content.toLowerCase() === 'ping') {  
            msg.reply(`Latency is ${Date.now() - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
          }
          else if(msg.content.toLowerCase() === 'us_name'){
            msg.reply(`BACKandFRONTend
อีเมล:PBTNN31@gmail.com
รหัส:PBTNN.com`);
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
        }
        else if(msg.content.toLowerCase().startsWith('room-')){
            as=msg.content.slice();
            g=as.substring(5);   
            const ins=parseInt(g);
            const r3 = parseInt(Math.floor(ins/3));
            const r2 = parseInt(Math.floor((ins-(r3*3))/2));
            const r1 = parseInt(ins-((r3*3)+(r2*2)));
            console.log(r3);
            console.log(r2);
            console.log(r1);
            a=((r3*1900)+(r2*1500)+(r1*1200));
            console.log("||||||||||");
            console.log(a);
            const asn=a.toString();
            msg.reply("ราคาโดยประมาณ " + asn + " บาท" +`
`+"แบบ 3 ห้อง  ราคา 1900 จำนวน "  + r3 + " ชุด "+`
`+"แบบ 2 ห้อง ราคา 1500 จำนวน" + r2 + " ชุด "+`
`+"แบบ  1 ห้อง ราคา 1500 จำนวน" + r1 + " ชุด ");
            console.log(typeof ins);
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
        }
        else{
            msg.reply("unknow comman if you want comman call help");
            console.log('reply ok 📤');
            console.log(msg.content);
            console.log(msg.author.bot);
        }
    }
    });

        client.login(token);
        

