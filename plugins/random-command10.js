import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'ssc') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} https://google.com 600 600`
if (!args[1]) throw `Contoh:\n${usedPrefix + command} masukkan width`
if (!args[2]) throw `Contoh:\n${usedPrefix + command} masukkan heght`
let res = `https://shot.screenshotapi.net/screenshot?&url=${args[0]}&width=${args[1]}&height=${args[2]}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`
await conn.sendButton(m.chat, `*Result:*
  ${command}`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['ssc']
handler.tags = ['random']

export default handler