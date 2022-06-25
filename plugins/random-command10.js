import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'gqr') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://google.com`
let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'sspng') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://google.com`
let f = await fetch(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}`)
let x = await f.json()
await conn.sendFile(m.chat, x.screenshot, 'image.png', wm, m)
}

if (command == 'catboys') {
if (args[0] == 'baka') {
let f = await fetch(`https://api.catboys.com/baka`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.gif', wm, m)
}
if (args[0] == 'img') {
let f = await fetch(`https://api.catboys.com/img`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == '8ball') {
let f = await fetch(`https://api.catboys.com/8ball`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'dice') {
let f = await fetch(`https://api.catboys.com/dice`)
let x = await f.json()
await conn.sendFile(m.chat, x.url, 'image.png', wm, m)
}
if (args[0] == 'catboy') {
let f = await fetch(`https://api.catboys.com/catboy`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${x.catboy}`, wm, null, [
                ['Awkawk', `${usedPrefix}tts ${x.catboy}`]
            ], m, fdoc)
}
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
${usedPrefix + command} baka
${usedPrefix + command} img
${usedPrefix + command} 8ball
${usedPrefix + command} catboy
`, wm, null, [
                ['BAKA', `${usedPrefix + command} baka`],
                ['IMG', `${usedPrefix + command} img`],
                ['8BALL', `${usedPrefix + command} 8ball`]
            ], m, fdoc)
}

if (command == 'animals') {
let f = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Name:* ${x.name}
*Latin:* ${x.latin_name}
*Type:* ${x.animal_type}
*Active Time:* ${x.active_time}
*Length Min.:* ${x.length_min}
*Length Max.:* ${x.length_max}
*Weight Min.:* ${x.weight_min}
*Weight Max.:* ${x.weight_max}
*Lifespan:* ${x.lifespan}
*Habitat:* ${x.habitat}
*Diet:* ${x.diet}
*Geo:* ${x.geo_range}
*ID:* ${x.id}
`, wm, x.image_link, [
                ['Get Picture', `${usedPrefix}get ${x.image_link}`]
            ], m, fdoc)
}

if (command == 'nekos') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• kitsune
• neko
• waifu
• baka
• bite
• blush
• bored
• cry
• cuddle
• dance
• facepalm
• feed
• handhold
• happy
• highfive
• hug
• kick,kiss
• laugh
• pat
• poke
• pout
• punch
• shoot
• shrug
• slap
• sleep
• smile
• smug
• stare
• think
• thumbsup
• tickle
• wave
• wink
`
let f = await fetch(`https://nekos.best/api/v2/${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Name:* ${x.results.artist_name}
*Latin:* ${x.results.artist_href}
*Type:* ${x.results.source_url}
`, wm, x.results.url, [
                ['Get Picture', `${usedPrefix}get ${x.results.url}`]
            ], m, fdoc)
}

if (command == 'crafatar') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/avatars/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar2') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/renders/head/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar3') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/renders/body/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar4') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/skins/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'crafatar5') {
if (!text) throw `Contoh:\n${usedPrefix + command} uuid\n*Cth:* 853c80ef3c3749fdaa49938b674adae6`
let res = `https://crafatar.com/capes/${text}`
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, res, [
                ['Get Picture', `${usedPrefix}get ${res}`]
            ], m, fdoc)
}

if (command == 'lmsea') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://google.com`
let res = await fetch(`https://imsea.herokuapp.com/api/1?q=${text}`)
let ran = res.results
await conn.sendButton(m.chat, `*Result:*
  ${res.image_name}`, wm, ran.getRandom(), [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['gqr', 'sspng', 'catboys', 'animals', 'nekos', 'crafatar', 'crafatar2', 'crafatar3', 'crafatar4', 'crafatar5', 'lmsea']
handler.tags = ['random']

export default handler