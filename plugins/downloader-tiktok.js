import fetch from 'node-fetch'
import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://vt.tiktok.com/ZSwWCk5o/`
let buttons = [
	{ buttonText: { displayText: 'To Mp3' }, buttonId: `${usedPrefix}tomp3` },
	{ buttonText: { displayText: 'With Wm' }, buttonId: `${usedPrefix}tiktokwm ${args[0]}` },
	{ buttonText: { displayText: 'No Wm' }, buttonId: `${usedPrefix}tiktoknowm ${args[0]}` }
	]
if (command == 'tiktok') {
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
let caption = `*TIKTOK DOWNLOADER*
*Nickname:* ${nickname}
*Description:* ${description}

_©${global.wm}_`
	conn.sendMessage(m.chat, { video: { url: url }, caption: caption , footer: await shortUrl(url), buttons }, { quoted: m })
}

if (command == 'tiktokwm') {
let linkwm = `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`
if (!linkwm) throw 'Can\'t download video!'
let caption2 = `*TIKTOK WITH WM*
_©${global.wm}_`
	conn.sendMessage(m.chat, { video: { url: linkwm }, caption: caption2 , footer: await shortUrl(`${args[0]}`), buttons }, { quoted: m })
}

if (command == 'tiktoknowm') {
let link = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
let has = await link.json()
let x = has.result
if (!x.link) throw 'Can\'t download video!'
let caption3 = `*TIKTOK NO WM*
*Title:* ${x.title}
*Keyword:* ${x.keywords}
*Description:* ${x.description}

_©${global.wm}_`
	conn.sendMessage(m.chat, { video: { url: x.link }, caption: caption3 , footer: await shortUrl(x.link), buttons }, { quoted: m })
}

}
handler.command = handler.help = ['tiktok', 'tiktokwm', 'tiktoknowm']
handler.tags = ['downloader']

export default handler

async function getInfo(url) {
	// url = (await fetch(url)).url
	let id = url.split('?')[0].split('/')
	let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
	return res?.seoProps?.metaParams
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}
