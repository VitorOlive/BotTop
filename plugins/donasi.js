let handler = async m => m.reply(`
╭─「 Doação • 」
│ • Oi, Para ajudar o bot vc só tem, q baixar um aplicativo chamado tik tok, fazer seu cadastro e    dps vai lá em baixo em Eu, vai na moeda lá em cima no canto superior esquerdo é coloca o código: 29758821 e poderar adicionar o bot em quantos grupo quiser.
Qualquer dúvida: Wa.me/5598989016015
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
