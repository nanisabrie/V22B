import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()


let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan*
${usedPrefix + command} cecan
`
conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }
            
if (command) {
switch (template) {

        case 'cecan':
case 'china':
case 'hijaber':
case 'indonesia':
case 'japan':
case 'korea':
case 'loli':
case 'malaysia':
case 'random':
case 'santuy':
case 'thailand':
case 'ukhty':
case 'vietnam':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} cecan
*List Command*
• cecan
• china
• hijaber
• indonesia
• japan
• korea
• loli
• malaysia
• random
• santuy
• thailand
• ukhty
• vietnam
`
        let as= `https://api.zacros.my.id/asupan/${one}`
        let ass = `*Result:* ${one}`
        await conn.sendButton(m.chat, ass, wm, as, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'alphacoders':
            case 'wallpapercave':
            case 'konachan':
            if (!two) throw `Contoh penggunaan ${usedPrefix}${command} alphacoders|teks
*List Command*
• alphacoders
• wallpapercave
• konachan
`
        let wl = `https://api.zacros.my.id/search/${one}?query=${two}`
        let wll = `*Result:* ${one}`
        await conn.sendButton(m.chat, wll, wm, wl, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'pinterest':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let pn = await fetch(`https://api.zacros.my.id/search/pinterest?query=${one}`)
        let pnn = await pn.json()
        let pnnn = pnn.result
        let pnnnn = `*Result:* ${one}`
        await conn.sendButton(m.chat, pnnnn, wm, pnnn.getRandom(), [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'sstick':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let sp = await fetch(`https://api.zacros.my.id/search/sticker?query=${one}`)
        let spp = await sp.json()
        let sppp = `*Result:* ${spp.result[0].title}
        ${spp.result[0].url}
`
        await conn.sendButton(m.chat, sppp, wm, null, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'google':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let go = await fetch(`https://api.zacros.my.id/search/google?query=${one}`)
        let goo = await go.json()
        let gooo = `*Result:* ${goo.result[0].title}
        ${goo.result[0].link}
`
        await conn.sendButton(m.chat, gooo, wm, null, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'hmod':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let hm = await fetch(`https://api.zacros.my.id/search/google?query=${one}`)
        let hmm = await hm.json()
        let hmmm = `*Result:* ${hmm.result[0].title}
        ${hmm.result[0].link}
`
        await conn.sendButton(m.chat, hmmm, wm, hmm.icon, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'wiki':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let wk = await fetch(`https://api.zacros.my.id/search/google?query=${one}`)
        let wkk = await wk.json()
        let wkkk = `*Result:* ${wkk.result[0].wiki}
        ${wkk.result[0].judul}
`
        await conn.sendButton(m.chat, wkkk, wm, wkk.thumb, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'milf':
            case 'waifu':
            case 'husbu':
            case 'loli':
            case 'cosplay':
            case 'darkjokes':
            case 'meme':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let rimg = `https://api.zacros.my.id/randomimg/${one}`
        let riimg = `*Result:* ${one}
`
        await conn.sendButton(m.chat, riimg, wm, rimg, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'ppcouple':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let pp = await fetch(`https://api.zacros.my.id/randomimg/${one}`)
        let ppc = await pp.json()
        let cwo = `*Cwok:* ${one}`
        await conn.sendButton(m.chat, cwo, wm, ppc.male, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            let cwe = `*Cwok:* ${one}`
        await conn.sendButton(m.chat, cwe, wm, ppc.female, [
                ['Next', `${usedPrefix + command} ${one}`]
            ], m, fdoc)
            break
            case 'quotes':
        let qtt = await qt.json()
        let qttt = `*Result:* ${qtt.result.quotes}
        ${qtt.result.author}
`
        await conn.sendButton(m.chat, qttt, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            case 'quotesanime':
        let qm = await fetch(`https://api.zacros.my.id/randomtext/quotesanime`)
        let qmm = await qm.json()
        let qmmm = `*Result:* ${qmm.result.char_name}
        ${qmm.result.anime}
        ${qmm.result.quotes}
        ${qmm.result.episode}
`
        await conn.sendButton(m.chat, qmmm, qmm.result.date, qmm.result.img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            break
            case 'faktaunik':
            case 'fml':
            case 'cerpen':
            case 'katagalau':
            case 'truth':
            case 'dare':
            if (!one) throw `Contoh penggunaan ${usedPrefix}${command} query`
        let fa = await fetch(`https://api.zacros.my.id/randomtext/${one}`)
        let faa = await fa.json()
        let faaa = `*Result:* ${faa.result}`
        await conn.sendButton(m.chat, faaa, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            break
}
}
}
handler.help = ['zac <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^zac$/i
export default handler