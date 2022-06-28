import fetch from "node-fetch"
import { readFileSync } from "fs"

let handler = async (m, { conn, text }) => {
let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  let stc = readFileSync('./ynkts.webp')
  await this.sendMessage(m.chat, { sticker : stc, thumbnail: await( await fetch(pp)).buffer() , contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: 'https://wa.me/6282195322106',
title: '「 ❔ 」',
body: wm,
sourceUrl: 'http://github.com/AyGemuy', thumbnail: await( await fetch(pp)).buffer()
  }
 }}, { quoted: m })
  }
handler.customPrefix = /(?)/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
