let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    
if (command == 'jodohnya') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    /*
    m.reply(`*Ciee...* ${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    */
    let caption = `*Ciee...* ${toM(a)} ❤️ ${toM(b)}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
    
if (command == 'jodohku') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    /*
    m.reply(`*Ciee...* ${name.split("@")[0]} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    */
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let caption = `*Ciee...* ${who.split("@")[0]} ❤️ ${toM(b)}`
    await conn.sendButton(m.chat, caption, wm, null, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
    }
    
}
handler.tags = ['main', 'fun']
handler.command = handler.help = ['jodohnya', 'jodohku']

handler.group = true

export default handler
