let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
    let src = await (await fetch('https://raw.githubusercontent.com/LuiXyz/apj/master/lib/kopel.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
 await conn.sendFile(m.chat, json.cowo, 'cowo.jpg', `Nih cowoknya`, m)
       conn.sendFile(m.chat, json.cewe, 'cewe.jpg', `Nih cewe nya`, m)

}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler