let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

let toM = a => '@' + a.split('@')[0]
if (command == 'jodohnya') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    let caption = `*Ciee...* ${toM(a)} ❤️ ${toM(b)}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
    
if (command == 'jodohku') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let caption = `*Ciee...* ${toM(who)} ❤️ ${toM(a)}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
    
}
handler.tags = ['main', 'fun']
handler.command = handler.help = ['jodohnya', 'jodohku']

handler.group = true

export default handler
