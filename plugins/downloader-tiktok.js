import fetch from 'node-fetch'
import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
let caption = `*TIKTOK DOWNLOADER*
*Nickname:* ${nickname}
*Description:* ${description}

_©${global.wm}_`
	let buttons = [
	{ buttonText: { displayText: 'To Mp3' }, buttonId: `${usedPrefix}tomp3` },
	{ buttonText: { displayText: 'With Wm' }, buttonId: `${usedPrefix + command} tiktokwm ${args[0]}` },
	{ buttonText: { displayText: 'No Wm' }, buttonId: `${usedPrefix + command} tiktoknowm ${args[0]}` }
	]
	conn.sendMessage(m.chat, { video: { url: url }, caption: caption , footer: await shortUrl(url), buttons }, { quoted: m })
	
if (args[0] == 'tiktokwm') {
let caption2 = `*TIKTOK WITH WM*
_©${global.wm}_`
	let buttons2 = [{ buttonText: { displayText: 'To Mp3' }, buttonId: `${usedPrefix}tomp3` }]
	conn.sendMessage(m.chat, { video: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[1]}` }, caption: caption2 , footer: await shortUrl(url), buttons2 }, { quoted: m })
}

if (args[0] == 'tiktoknowm') {
let link = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=9b817532fadff8fc7cb86862&url=${args[1]}`)
let has = link.json()
let x = has.result

let caption3 = `*TIKTOK NO WM*
*Title:* ${x.title}
*Description:* ${x.description}
*Keyword:* ${x.keywords}
*Description:* ${x.description}
*Username:* ${x.author.username}
*Nickname:* ${x.author.nickname}
*Digg:* ${x.statistic.diggCount}
*Share:* ${x.statistic.shareCount}
*Comment:* ${x.statistic.commentCount}
*View:* ${x.statistic.playCount}

_©${global.wm}_`
	let buttons3 = [{ buttonText: { displayText: 'To Mp3' }, buttonId: `${usedPrefix}tomp3` }]
	conn.sendMessage(m.chat, { video: { url: x.link }, caption: caption3 , footer: await shortUrl(x.link), buttons3 }, { quoted: m })
}

}
handler.help = ['tiktok']
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

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

