let handler = async (m, { conn }) => {
    conn.karakter = conn.karakter ? conn.karakter : {}
    let id = m.chat
    if (!(id in conn.karakter)) throw false
    let json = conn.karakter[id][1]
    conn.sendButton(m.chat, '```' + json.name.replace(/[AIUEOaiueo]/ig, '_') + '```', author, null, [
        ['Nyerah', 'menyerah']
    ], m)
}
handler.command = /^hcha$/i

handler.limit = true

export default handler