import fetch from "node-fetch"

export async function all(m, { conn, text }) {

  //Kalo mau menggokil pake ini
  if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    let user = global.db.data.users[m.sender]
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    let name = await conn.getName(who)
    let caption = `👋 Hai *${name} @${who.split("@")[0]}*, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\nKetik *.menu* untuk melihat list fitur bot\nKetik *.join* untuk memasukkan bot ke grup kamu`}
    `.trim()
    this.sendButton(m.chat, caption, global.wm, pp, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    } catch (e) {
        return
    }

                                
}
