
import fetch from 'node-fetch'
import fs from "fs"
import Canvas from "discord-canvas"

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan*

${usedPrefix + command} tai @user

*List Command*
• anjing
• asu
• babi
• bajingan
• banci
• bangsat
• bego
• bejad
• bencong
• bolot
• brengsek
• budek
• buta
• geblek
• gembel
• gila
• goblok
• iblis
• idiot
• jablay
• jelek
• kampret
• kampungan
• kamseupay
• keparat
• kontol
• kunyuk
• maho
• memek
• monyet
• ngentot
• pecun
• perek
• sarap
• setan
• sinting
• sompret
• tai
• tolol
• udik
`
conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
            
if (command) {
switch (template) {

case 'anjing':
case 'asu':
case 'babi':
case 'bajingan':
case 'banci':
case 'bangsat':
case 'bego':
case 'bejad':
case 'bencong':
case 'bolot':
case 'brengsek':
case 'budek':
case 'buta':
case 'geblek':
case 'gembel':
case 'gila':
case 'goblok':
case 'iblis':
case 'idiot':
case 'jablay':
case 'jelek':
case 'kampret':
case 'kampungan':
case 'kamseupay':
case 'keparat':
case 'kontol':
case 'kunyuk':
case 'maho':
case 'memek':
case 'monyet':
case 'ngentot':
case 'pecun':
case 'perek':
case 'sarap':
case 'setan':
case 'sinting':
case 'sompret':
case 'tai':
case 'tolol':
case 'udik':
// await conn.sendFile(m.chat, pp, 'propil.jpg', caption, m , false, { contextInfo: { mentionedJid: [who] } })

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
     let angka = Math.floor(Math.random() * 100)
let caption = `Tingkat ke *${args[0]}an* \nAtas nama ${name} @${who.split("@")[0]} \nAdalah Sebesar *${angka}%*`

let wel = await new Canvas.Welcome()
  .setUsername(`${name}`)
  .setDiscriminator(`${exp} Exp`)
  .setMemberCount(`Money ${money}`)
  .setGuildName(`${global.author}`)
  .setAvatar(`${pp}`)
  .setColor("border", "#000000")
  .setColor("username-box", "#000000")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#000000")
  .setColor("title", "#FFFFFF")
  .setColor("avatar", "#000000")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7c3n7snGnpzS676fXaU2yxSjGsFNrCURXw&usqp=CAU")
  .toAttachment();
  
  this.sendHydrated(m.chat, caption, wm + '\n\n' + botdate, wel.toBuffer(), null, null, user.split`@`[0], 'Nomor', [
      ['Menu', '/menu'],
    ], null, false, { mentions: [who] })
    
break
            }
       }
}
handler.help = ['cek <menu> <user>']
handler.tags = ['tools'] 
handler.command = /^cek$/i
export default handler