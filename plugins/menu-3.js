
import Canvas from "discord-canvas"
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
Hai, *%name!*

*Tanggal:* %week, %date
*Waktu:* %time
*Bot Online:* %uptime (%muptime)
*Pengguna:* %totalreg Orang
*Lib:* Baileys-Md
*Language:* Javascript,Ts-Node
*Fitur:* %totalfeatures command

%readmore
*Support me:* _https://s.id/Cerdasin62_
*Note:*
_Jika Respon Tidak Muncul Kemungkinan Terjadi Error_
`.trimStart(),
  header: '▣═━–〈 *%category* 〉–━═▣',
  body: `┊${emot} %cmd %islimit %isPremium`,
  footer: '┗–––––––––––━═▣\n',
  after: `⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ 
`,
}
let handler = async (m, { conn, groupMetadata, usedPrefix: _p, __dirname, args }) => {
  let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'admin', 'advanced', 'anonymous', 'audio', 'Baileys', 'database', 'downloader', 'edukasi', 'fun', 'game', 'group', 'host', 'info', 'internet', 'jadian', 'jadibot', 'kerang', 'main', 'maker', 'nocategory', 'nsfw', 'nulis', 'owner', 'premium', 'primbon', 'quotes', 'quran', 'random', 'rpg', 'sticker', 'tools', 'vote', 'xp']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'rpg': 'RolePlay Games',
  'xp': 'Exp & Limit',
  'jadian': 'Jadian',
  'sticker': 'Sticker',
  'edukasi': 'Edukasi',
  'quran': 'Al Quran',
  'tools': 'Tools',
  'kerang': 'Kerang Ajaib',
  'primbon': 'Primbon',
  'fun': 'Fun',
  'game': 'Game',
  'quotes': 'Quotes',
  'audio': 'Audio',
  'maker': 'Maker',
  'downloader': 'Downloader',
  'internet': 'Internet',
  'random': 'Random',
  'nsfw': 'Nsfw',
  'nulis': 'MagerNulis & Logo',
  'anonymous': 'Anonymous Chat',
  'database': 'Database',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'advanced': 'Advanced',
  'info': 'Info',
  'owner': 'Owner',
  'jadibot': 'Jadi Bot',
  'host': 'Host',
  'Baileys': 'Baileys',
  'nocategory': 'No Category',
}
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'admin') tags = {
    'admin': 'Admin'
  }
  if (teks == 'advanced') tags = {
    'advanced': 'Advanced'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'Baileys') tags = {
    'Baileys': 'Baileys'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'host') tags = {
    'host': 'Host'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'jadian') tags = {
    'jadian': 'Jadian'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'main') tags = {
    'main': 'Main'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'primbon') tags = {
    'primbon': 'Primbon'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Quran'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RolePlay Games'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Sticker'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == '') tags = {
    '': 'No Category'
  }
  
  
    try {
      const sections = [
   {
	title: `${htki} MENU ${htka}`,
	rows: [
	    {title: `${emot} absen`, rowId: ".cobak absen", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} admin`, rowId: ".cobak admin", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} advanced`, rowId: ".cobak advanced", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} anonymous`, rowId: ".cobak anonymous", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} audio`, rowId: ".cobak audio", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} Baileys`, rowId: ".cobak Baileys", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} database`, rowId: ".cobak database", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} downloader`, rowId: ".cobak downloader", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} edukasi`, rowId: ".cobak edukasi", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} fun`, rowId: ".cobak fun", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} game`, rowId: ".cobak game", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} group`, rowId: ".cobak group", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} host`, rowId: ".cobak host", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} info`, rowId: ".cobak info", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} internet`, rowId: ".cobak internet", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} jadian`, rowId: ".cobak jadian", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} jadibot`, rowId: ".cobak jadibot", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} kerang`, rowId: ".cobak kerang", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} main`, rowId: ".cobak main", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} maker`, rowId: ".cobak maker", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} nocategory`, rowId: ".cobak nocategory", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} nsfw`, rowId: ".cobak nsfw", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} nulis`, rowId: ".cobak nulis", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} owner`, rowId: ".cobak owner", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} premium`, rowId: ".cobak premium", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} primbon`, rowId: ".cobak primbon", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} quotes`, rowId: ".cobak quotes", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} quran`, rowId: ".cobak quran", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} random`, rowId: ".cobak random", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} rpg`, rowId: ".cobak rpg", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} sticker`, rowId: ".cobak sticker", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} tools`, rowId: ".cobak tools", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} vote`, rowId: ".cobak vote", description: "Mungkin tools ini bisa membantu?"},
	{title: `${emot} xp`, rowId: ".cobak xp", description: "Mungkin tools ini bisa membantu?"}
	]
  },
]

let usrs = db.data.users[m.sender]
let tek = `*Hai ${conn.getName(m.sender)}*
*U S E R  I N F O*
• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
`
const listMessage = {
  text: tek,
  footer: '📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner',
  mentions: await conn.parseMention(tek),
  title: `${htki} *LIST MENU* ${htka}`,
  buttonText: `CLICK HERE ⎙`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
    
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
    let totalfeatures = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, totalfeatures, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //
    
    conn.sendHydrated(m.chat, text.trim(), wm + '\n\n' + botdate, hwaifu.getRandom(), gcwangsaf, 'Hinata Group', who.split`@`[0], 'Your Number', [
      ['Menu', '/menu'],
      ['Owner', '/owner'],
      ['Test', '/ping']
    ], null, false, { mentions: [text] })
    
    /*
    try {
 let wel = await new Canvas.Welcome()
  .setUsername(`${name}`)
  .setDiscriminator(`${money} Money`)
  .setMemberCount(`${groupMetadata.participants.length}`)
  .setGuildName(`${groupMetadata.subject}`)
  .setAvatar(`${pp}`)
  .setColor("border", "#000000")
  .setColor("username-box", "#000000")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#000000")
  .setColor("title", "#FFFFFF")
  .setColor("avatar", "#000000")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7c3n7snGnpzS676fXaU2yxSjGsFNrCURXw&usqp=CAU")
  .toAttachment();

  conn.sendHydrated2(m.chat, text.trim(), wm, wel.toBuffer(), webs, 'Website', gcwangsaf, 'Group WhatsApp', [
      ['Donate', '/donasi'],
      ['Owner', '/owner'],
      ['Test', '/ping']
    ], m)
    } catch {
    let wel = await new Canvas.Welcome()
  .setUsername(`${name}`)
  .setDiscriminator(`${exp} Exp`)
  .setMemberCount(`Money ${money}`)
  .setGuildName(`${global.author}`)
  .setAvatar(`${pp}`)
  .setColor("border", "#000000")
  .setColor("username-box", "#000000")
  .setColor("discriminator-box", "#000000")
  .setColor("message-box", "#000000")
  .setColor("title", "#FFFFFF")
  .setColor("avatar", "#000000")
  .setBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7c3n7snGnpzS676fXaU2yxSjGsFNrCURXw&usqp=CAU")
  .toAttachment();
  
    conn.sendHydrated2(m.chat, text.trim(), wm, wel.toBuffer(), webs, 'Website', gcwangsaf, 'Group WhatsApp', [
      ['Donate', '/donasi'],
      ['Owner', '/owner'],
      ['Test', '/ping']
    ], m)
    }
    */
                //
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu3']
handler.tags = ['main']
handler.command = /^(cobak|menu3)$/i

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }