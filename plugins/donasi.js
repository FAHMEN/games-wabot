let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085876902820]. 
│ • ovo [085876902820]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? 6285876902820
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
