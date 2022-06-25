import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'sspng') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://google.com`
let res = await fetch(`https://shot.screenshotapi.net/screenshot?&url=${args[0]}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
  ${command}`, wm, x.screenshot, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['sspng']
handler.tags = ['random']

export default handler