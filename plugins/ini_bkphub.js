import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

    if (command == 'caribokep') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
  let json = await fetch(`https://betabotz-api.herokuapp.com/api/search/xvideos?query=${text}&apikey=BetaBotz`)
  let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
Judul *${x.title}*
Info: ${x.info}
Link: ${x.link}
`}
        return m.reply(caption)
    }
   
  if (command == 'caribokep2') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
  let json = await fetch(`https://betabotz-api.herokuapp.com/api/search/xnxx?query=${text}&apikey=BetaBotz`)
  let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result) {
        caption += `
Judul *${x.title}*
Info: ${x.info}
Link: ${x.link}
`}
        return m.reply(caption)
    }
    
    if (command == 'caribokep3') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
  let json = await fetch(`https://betabotz-api.herokuapp.com/api/search/pornhub?query=${text}&apikey=BetaBotz`)
  let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
        for (let x of jsons.result.results) {
        caption += `
Judul *${x.title}*
views: ${x.views}
author: ${x.author}
link: ${x.link}
`}
        return m.reply(caption)
    }
    if (command == 'dlbokep') {
    /*
    if (!text) throw `Contoh penggunaan ${usedPrefix}${command} link Xvideos`
  let json = await fetch(`https://appsdev.cyou/xv-ph-rt/api/?site_id=xvideos&video_id=${text}`)
  let jsons = await json.json()
  let x = jsons.result
conn.sendFile(m.chat, x.files.high, 'asupan.mp4', x.title, m)
*/
m.reply('Source ilang')
}

}
handler.command = handler.help = ['caribokep', 'caribokep1', 'dlbokep']
handler.tags = ['nsfw']

export default handler
