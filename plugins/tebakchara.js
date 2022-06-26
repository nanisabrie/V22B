import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.karakter = conn.karakter ? conn.karakter : {}
    let id = m.chat
    if (id in conn.karakter) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.karakter[id][0])
        throw false
    }
    let res = await fetch('https://betabotz-api.herokuapp.com/api/game/tebakchara?apikey=BetaBotz')
    let jsons = await res.json()
    let json = jsons.result
    let caption = `Siapakah nama dari gambar ini

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hcha untuk hint
Bonus: ${poin} XP
    `.trim()
    conn.karakter[id] = [
        await conn.sendButton(m.chat, caption, author, json.image, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.karakter[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}\nDesk : ${json.desc}*`, author, null, [
                ['karakter', '/karakter']
            ], conn.karakter[id][0])
            delete conn.karakter[id]
        }, timeout)
    ]
}
handler.help = ['karakter']
handler.tags = ['game']
handler.command = /^karakter/i

export default handler

const buttons = [
    ['Hint', '/hcha'],
    ['Nyerah', 'menyerah']
]