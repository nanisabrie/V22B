import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hcha/i.test(m.quoted.text) || /.*hcha/i.test(m.text))
        return !0
    this.karakter = this.karakter ? this.karakter : {}
    if (!(id in this.karakter))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttonkarakter, m)
    if (m.quoted.id == this.karakter[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.karakter[id][3])
            delete this.karakter[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttonkarakter, m)
        }
        let json = JSON.parse(JSON.stringify(this.karakter[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.karakter[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.karakter[id][2]} XP`, author, null, buttonkarakter, m)
            clearTimeout(this.karakter[id][3])
            delete this.karakter[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hcha'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttonkarakter = [
    ['karakter', '/karakter']
]
