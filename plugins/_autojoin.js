let isJoin = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAutoJoin = isJoin.exec(m.text)

    if (chat.autoJoin && isAutoJoin) {
        await conn.sendButton(m.chat, `*Link Join Terdeteksi!*`, wm, ['off autojoin', '/disable autojoin'], m)
    let [_, code, expired] = text.match(isJoin) || []
    if (!code) throw 'Link invalid'
    let res = await conn.groupAcceptInvite(code)
    let name = await conn.getName(res).catch(_ => null)
    let caption = `*Berhasil join grup* ${name || res} \nJangan lupa baca rules ngap!*`
    await conn.sendButton(m.chat, caption, wm, null, [
                ['Rules', `${usedPrefix}rules`]
            ], m)
     }
    return !0
}