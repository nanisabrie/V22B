
import fetch = from 'node-fetch'
import { servers, ytv } = from '../lib/y2mate'
import xfar = from 'xfarr-api'
import hxz = from "hxz-api"
import axios = from 'axios'
let limit = 1024354
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'ttdownloader') {
let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, 'Nih', m)
}

if (command == 'ytamp3') {
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize 
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* ${title}
│• *Type:* MP3
┆• *📥 Ukuran File:* ${filesizeF}
└❏
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}

if (command == 'ytvmp4') {
if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  let name = await conn.getName(m.sender)
let wm = global.wm
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*${isLimit ? 'Pakai ': ''}Link:* ${dl_link}
`.trim(), m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*Title:* ${title}
*Filesize:* ${filesizeF}
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
}

if (command == 'ytv720') {
if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
jika masih blur, berarti videonya emang ngeblur dari youtubenya
Atau bisa jadi faktor *MUKA*`, m)
}

handler.command = handler.help = ['ttdownloader', 'ytamp3', 'ytvmp4', 'ytv720']
handler.tags = ['downloader']

export default handler