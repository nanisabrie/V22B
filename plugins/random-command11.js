import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'umma') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/downloader/umma?url=${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*Name:* ${x.result.author.name}
*Caption:* ${x.result.caption}
*Type:* ${x.result.type}
*Like.:* ${x.result.like}
*Link.:* ${x.result.media[0]}
`, wm, null, [
                ['Get', `${usedPrefix}get ${x.result.media[0]}`]
            ], m, fdoc)
}

if (command == 'dlanoboy') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://62.182.83.93/2021/03/black-clover-episode-170`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/downloader/anoboy?url=${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.judul}
*uptime:* ${x.result.uptime}

*mforu:* ${x.result.mforu.SD}
${x.result.mforu.HD}

*zippy:* ${x.result.zippy.SD}
${x.result.zippy.HD}

*mirror:* ${x.result.mirror.SD}
${x.result.mirror.HD}

`, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'animesearch') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/anime?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumbnail}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'animesearchv2') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/animev2?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].title}
*Link:* ${x.result[0].url}
*Title:* ${x.result[0].mal_id}
*Synopsis:* ${x.result[0].synopsis}
`, wm, `${x.result[0].image_url}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'mangasearch') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/manga?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumbnail}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'mangasearchv2') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/animev2?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].title}
*Link:* ${x.result[0].url}
*Title:* ${x.result[0].mal_id}
*Synopsis:* ${x.result[0].synopsis}
`, wm, `${x.result[0].image_url}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'kusonime2') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/kusonime?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.judul}
*Genre:* ${x.result.genre}
*status:* ${x.result.status}
*produser:* ${x.result.produser}
*rate:* ${x.result.rate}
*link:* ${x.result.link}
*durasi:* ${x.result.durasi}
*desk:* ${x.result.desk}
`, wm, `${x.result.thumb}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'anoboy') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/anoboy?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumb}`, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'storyanime') {
let res = `https://fatiharridho.herokuapp.com/api/anime/storyanime`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['umma', 'dlanoboy', 'animesearch', 'animesearchv2', 'mangasearch', 'mangasearchv2', 'kusonime2', 'anoboy', 'storyanime']
handler.tags = ['random']

export default handler