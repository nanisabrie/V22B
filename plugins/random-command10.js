import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'sspng') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://google.com`
let f = await fetch(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Get Picture', `${usedPrefix}get ${x.screenshot}`]
            ], m, fdoc)
}

if (command == 'catboys') {
if (args[0] == 'baka') {
let f = await fetch(`https://api.catboys.com/baka`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Get Picture', `${usedPrefix}get ${x.url}`]
            ], m, fdoc)
}
if (args[0] == 'img') {
let f = await fetch(`https://api.catboys.com/img`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Get Picture', `${usedPrefix}get ${x.url}`]
            ], m, fdoc)
}
if (args[0] == '8ball') {
let f = await fetch(`https://api.catboys.com/8ball`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Get Picture', `${usedPrefix}get ${x.url}`]
            ], m, fdoc)
}
if (args[0] == 'dice') {
let f = await fetch(`https://api.catboys.com/dice`)
let x = await f.json()
await conn.sendButton(m.chat, `*Silahkan pilih di bawah:*
  ${command}`, wm, null, [
                ['Get Picture', `${usedPrefix}get ${x.url}`]
            ], m, fdoc)
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
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka`
let f = await fetch(`https://nekos.best/api/v2/${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Name:* ${x.results[0].artist_name}
*Latin:* ${x.results[0].artist_href}
*Type:* ${x.results[0].source_url}
`, wm, x.results[0].url, [
                ['Get Picture', `${usedPrefix}get ${x.results[0].url}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['sspng', 'catboys', 'animals', 'nekos']
handler.tags = ['random']

export default handler