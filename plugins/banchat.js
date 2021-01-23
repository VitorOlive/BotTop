let handler = async (m, { conn, participants }) => {
  if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].isBanned = true
    m.reply('Pronto, usuário banido do Berhasil!')
  } else m.reply('Há um número de host aqui...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.owner = false
handler.mods = true

module.exports = handler
