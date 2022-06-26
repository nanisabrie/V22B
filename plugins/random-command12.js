import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'chara') {
let f = await fetch(`https://betabotz-api.herokuapp.com/api/game/tebakchara?apikey=BetaBotz`)
let res = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${res.result.name}
*Name:* ${res.result.desc}
*Caption:* ${res.result.url}
`, wm, `${res.result.image}`, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
}
handler.command = handler.help = ['chara']
handler.tags = ['random']

export default handler