let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial VitinnBot:
Crédito: *~Vitinn.sx*

Digitar *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Para Github..
5) $git Soltarei em breve !
6) $ls
7) $cd Em breve soltarei

por *último*..
última instalação  :)
8) npm i
9) node index.js

_segue la no insta_
*Istagram:*
https://www.instagram.com/Vitinnfe/
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


