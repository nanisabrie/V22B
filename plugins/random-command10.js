import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'ssc') {
if (!text1) throw `Masukkan link`
if (!text2) throw `Masukkan width`
if (!text3) throw `Masukkan height`
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
let json = await fetch(`https://shot.screenshotapi.net/screenshot?&url=${text1}&width=${text2}&height=${text3}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`)
await conn.sendButton(m.chat, `*Result:*
  ${command}`, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotoduck') {
  let res = await fetch(`https://random-d.uk/api/random`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Duck:*
  ${x.message}`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotobear') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} 600 600`
if (!args[1]) throw `Contoh:\n${usedPrefix + command} 600 600`
  let res = `https://placebear.com/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Bear:*
  ${args[0]}`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotodog') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} 600 600`
if (!args[1]) throw `Contoh:\n${usedPrefix + command} 600 600`
  let res = `https://place.dog/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Dog:*
  ${args[0]}`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotodog2') {
  let res = await fetch(`https://random.dog/woof.json`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Dog:*
  ${command}`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotofox') {
  let res = await fetch(`https://randomfox.ca/floof/`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Fox:*
  ${x.link}`, wm, x.image, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotoshibe') {
  let res = await fetch(`https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Shibe:*
  ${command}`, wm, x.getRandom(), [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'drinks') {
  let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*drinks:*\n
  *idDrink:* ${x.drinks[0].idDrink}
  *Drink:* ${x.drinks[0].strDrink}
  *Category:* ${x.drinks[0].strCategory}
  *Glass:* ${x.drinks[0].strGlass}
  *Instructions:* ${x.drinks[0].strInstructions}`, wm, x.drinks[0].strDrinkThumb, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'rules') {
let caption = `▣═━–〈 *RULES BOT* 〉–━═▣
│
┊ DILARANG TOXIC
┊ DILARANG SPAM
┊ DILARANG KIRIM VIRTEX
┊ DILARANG KIRIM 18+ APAPUN ITU
┊ DILARANG TELPON / VC
┊ DILARANG CULIK BOT
┊ DILARANG PROMOSI
┊ BOT TIDAK MENERIMA SAVE KONTAK
┊ KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
┊
│⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ 
▣═━–〈 *HINATA MD* 〉–━═▣`
await conn.sendButton(m.chat, caption, wm, `${imgr + command}`, [
                ['Ok!', `${usedPrefix}tts id Oke`]
            ], m, fdoc)
         }
         
if (command == 'repeat') {
if (!args[0]) throw `Cth. .repeat 7|Hai`
let urut = text.split`|`
let string = '\n' + urut[1]
let count = urut[0]
let caption = string.repeat(count);
await conn.reply(m.chat, caption, m, frep)
         }
         
if (command == 'repeat2') {
if (!args[0]) throw `Cth. .repeat2 7|Hai`
let urut = text.split`|`
let caption = '';
let i = 1;
while (i < `${urut[0]}`) {
  caption += '\n' + i + ' ' + `${urut[1]}`;
  i++;
}
await conn.reply(m.chat, caption, m, frep)
         }

if (command == 'dmpsearch') {
if (!text) throw `Masukkan Teks`
let json = await fetch(`https://psbdmp.ws/api/v3/search/${text}`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.data) {
        caption += `*Result:*\n
*ID:* ${x.id}
*length:* ${x.length}
*time:* ${x.time}
*text:* ${x.text}
  `}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'dmpdown') {
if (!text) throw `Masukkan ID`
let json = await fetch(`https://psbdmp.ws/api/v3/dump/${text}?key=6143730c1db586446444f0ec92799891`)
        let x = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        caption += `*Result:*\n
*ID:* ${x.id}
*length:* ${x.length}
*time:* ${x.date}
*content:* ${x.content}
  `
        await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}
}
handler.command = handler.help = ['urlscan', 'fotoduck', 'fotobear', 'fotodog', 'fotodog2', 'fotofox', 'fotoshibe', 'drinks', 'rules', 'repeat', 'repeat2', 'dmpsearch', 'dmpdown']
handler.tags = ['random']

export default handler