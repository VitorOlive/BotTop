let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Feito com linguagem javascript via NodeJs
╠➥ Rec: 
╠➥ Script: @Vitinnfe
║
╠➥ Github:. Soltarei em breve !
╠➥ Instagram: @Vitinnfe
╠➥ YouTube: Não tenho kkk
║
╠═〘 Thanks To 〙 ═
╠➥ Vitinn
╠➥ Tmj familia  :)
║
╠═〘 Ajudar o bot 〙 ═
╠➥ Wa.me/5598989016015
║
║>Solicitação? Wa.me/5598989016015
║
╠═〘 VITINN BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler



