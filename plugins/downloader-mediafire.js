import { lookup } from 'mime-types'
import { mediafiredl } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*Name:* ${filename}
*Size:* ${filesizeH}
*Extension:* ${ext}
*Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch {
if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
	let res = await mediafiredl(args[0])
	let mimetype = await lookup(res.url)
	delete res.url2
	m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
	conn.sendMessage(m.chat, { document: { url: res.url }, fileName: res.filename, mimetype }, { quoted: m })
}
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
