/*
* Thanks For 𝗠𝗵𝗮𝗻𝗸𝗕𝗮𝗿𝗕𝗮𝗿
*/

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") //ANAK ASU
const moment = require("moment-timezone") //TOBAT SU
const fs = require("fs") //SU
const { color, bgcolor } = require('./A187ID/color')
const { help } = require('./A187ID/help')
const kagApi = require('@kagchi/kag-api')
const { donasi } = require('./A187ID/donasi')
const { fetchJson } = require('./A187ID/fetcher')
const { recognize } = require('./A187ID/ocr')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./A187ID/functions')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./A187ID/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./A187ID/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./A187ID/simi.json'))
const vcard = 'BEGIN:VCARD\n' // ANAK ANJING MAU NGAPAIN?
            + 'VERSION:3.0\n' // NGAPAIN LAGI KALO GA MAU NUMPANG NAMA DOANG XIXIXIXI
            + 'FN:CO NOEERBOT\n' // MENDING LU TOBAT SU!
            + 'ORG:Creator NOEERBOT;\n' // KASIH CREDITS GUA SU!!!
            + 'TEL;type=CELL;type=VOICE;waid=6285722553839:+62 857-2255-3839\n' // JANGAN KEK BABI SU
            + 'END:VCARD' // ARIS187 ID
prefix = '!'
const speed = require('performance-now')         
blocked = []            
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '👾AR15BOT👾', // TOBAT SU ASU
    instagram: 'https://instagram.com/_sadboy.ig', // INFO JANGAN DI UBAH
    nomer: 'wa.me/6285722553839', // INFO SU JNGAN DI UBAH
    youtube: 'https://youtube.com/channel/UCGYLWtyT9IADYNUiK0uZiGg', // KINTIL
    whatsapp: 'https://chat.whatsapp.com/DSSHmG2KjKJLoFp9B9mkVs', // BABI
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}


const { tanggal, waktu, instagram, whatsapp, youtube, nomer, ontime } = config



const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Aris187 ID`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@_sadboy.ig`)

client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐇𝐚𝐥𝐥𝐨 @${num.split('@')[0]}\n𝐬𝐞𝐥𝐚𝐦𝐚𝐭 𝐝𝐚𝐭𝐚𝐧𝐠 𝐝𝐢 𝐠𝐫𝐨𝐮𝐩 _*${mdata.subject}*_ `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `𝐓𝐢𝐭𝐢𝐩 𝐠𝐨𝐫𝐞𝐧𝐠𝐚𝐧 𝐲𝐚𝐡 @${num.split('@')[0]}\n 𝐈 𝐰𝐢𝐥𝐥 𝐦𝐢𝐬𝐬 𝐲𝐨𝐮🏃`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			
			const { text, extendedText, contact, location, liveLocation, image, video, stiker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '❬❕❭ 𝐖𝐀𝐈𝐓 𝐏𝐑𝐎𝐒𝐄𝐒',
				success: '️❬ ✅ ❭ 𝐒𝐔𝐂𝐂𝐄𝐒𝐒 𝐊𝐀𝐊🖤',
				error: {
					stick: '𝐘𝐞𝐚𝐡 𝐠𝐚𝐠𝐚𝐥 ;( , 𝐜𝐨𝐛𝐚 𝐥𝐚𝐠𝐢 𝐤𝐚𝐤  ><',
					Iv: '𝗠𝗮𝗮𝗳 𝗹𝗶𝗻𝗸 𝘁𝗶𝗱𝗮𝗸 𝘃𝗮𝗹𝗶𝗱☹️'
				},
				only: {
					group: '𝐌𝐚𝐚𝐟 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐝𝐚𝐥𝐚𝐦 𝐠𝐫𝐨𝐮𝐩',
					ownerG: '𝐌𝐚𝐚𝐟 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫 𝐠𝐫𝐨𝐮𝐩',
					ownerB: '𝐌𝐚𝐚𝐟 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫 𝐛𝐨𝐭',
					admin: '𝐌𝐚𝐚𝐟 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐨𝐥𝐞𝐡 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩',
					Badmin: '𝐌𝐚𝐚𝐟 𝐩𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐢𝐧𝐢 𝐡𝐚𝐧𝐲𝐚 𝐛𝐢𝐬𝐚 𝐝𝐢 𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐣𝐢𝐤𝐚 𝐛𝐨𝐭 𝐦𝐞𝐧𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["6285722553839@s.whatsapp.net"] // ganti nomer lu
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'help': 
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break				
					case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `➽𝐍𝐚𝐦𝐚 𝐛𝐨𝐭 : ${me.name}\n➽𝐍𝐨𝐦𝐞𝐫 𝐛𝐨𝐭 : @${me.jid.split('@')[0]}\n➽𝐏𝐫𝐞𝐟𝐢𝐱 : ${prefix}\n➽𝐓𝐨𝐭𝐚𝐥 𝐛𝐥𝐨𝐜𝐤 : ${blocked.length}\n➽𝐀𝐤𝐭𝐢𝐟 𝐬𝐞𝐣𝐚𝐤 : ${kyun(uptime)}\n➽𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 : https://www.instagram.com/_sadboy.ig\n➽𝐘𝐨𝐮𝐓𝐮𝐛𝐞 : https://youtube.com/channel/UCGYLWtyT9IADYNUiK0uZiGg\n➽𝐒𝐜𝐫𝐢𝐩𝐭 𝐛𝐲 : 𝐀𝐫𝐢𝐬𝟏𝟖𝟕 𝐈𝐃 [𝐀𝟏𝟖𝟕]\n➽𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐓𝐡𝐚𝐧𝐤𝐬 𝐭𝐨:\n➽𝐀𝐥𝐥𝐚𝐡 𝐒𝐖𝐓\n➽𝐌𝐡𝐚𝐧𝐤𝐛𝐚𝐫𝐛𝐚𝐫\n➽𝐒𝐞𝐥𝐮𝐫𝐮𝐡 𝐜𝐫𝐞𝐚𝐭𝐨𝐫 𝐛𝐨𝐭 𝐲𝐚𝐧𝐠 𝐚𝐝𝐚 𝐝𝐢 𝐆𝐫𝐨𝐮𝐩 𝐁𝐎𝐓 𝐖𝐄 𝐀\n➽𝐒𝐞𝐥𝐮𝐫𝐮𝐡 𝐩𝐞𝐦𝐢𝐥𝐢𝐤 𝐰𝐞𝐛 𝐩𝐞𝐧𝐲𝐞𝐝𝐢𝐚 𝐥𝐚𝐲𝐚𝐧𝐚𝐧 𝐀𝐏𝐈`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break				
					case 'ytmp3':
				if (args.length < 1) return reply('link YouTube nya mana?')
					tels = body.slice(7)				
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/yta?url=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.thumb)
					hasil = `Judul ➼* ${anu.title}\n*Filesize ➼* ${anu.filesize}\n*Tipe ➼* ${anu.ext}\n*Link ➼* ${anu.result}`					
					client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
					break				
					case 'ytmp4':
				if (args.length < 1) return reply('link YouTube nya mana?')
					tels = body.slice(7)				
					reply(mess.wait)
					buffer = await getBuffer(anu.thumb)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/ytv?url=${tels}`, {method: 'get'})
					hasil = `Judul ➼* ${anu.title}\n*Filesize ➼* ${anu.filesize}\n*resolution ➼* ${anu.resolution}\n*Tipe ➼* ${anu.ext}\n*Link ➼* ${anu.result}`					
					client.sendMessage(from, buffer, image,  {quoted: mek, caption: hasil})
					break							
				case 'logowolf':
					var gh = body.slice(11)
					var teks1 = gh.split("|")[0];
					var teks2 = gh.split("|")[1];
					if (args.length < 1) return reply(`teksnya mana? contoh ${prefix}logowolf Aris|Ganss`)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${teks1}&text2=${teks2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break				
					case 'setpp': 
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('𝐢𝐜𝐨𝐧 𝐠𝐫𝐨𝐮𝐩 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐝𝐢𝐮𝐛𝐚𝐡 ')
                                        break											
				case 'qrcode':
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'masukan teks/url!', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'map':
					if (args.length < 1) return reply('𝐋𝐨𝐤𝐚𝐬𝐢 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢𝐜𝐚𝐫𝐢 𝐝𝐢𝐦𝐚𝐧𝐚 𝐤𝐚𝐤?')
					tels = body.slice(5)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${tels}`, {method: 'get'})
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝐓𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐭𝐮𝐫𝐮𝐧𝐤𝐚𝐧 𝐚𝐝𝐦𝐢𝐧')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 @${mentioned[0].split('@')[0]}\n 𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩 _*${groupMetadata.subject}*_`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝐓𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐣𝐚𝐝𝐢𝐤𝐚𝐧 𝐚𝐝𝐦𝐢𝐧!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 @${mentioned[0].split('@')[0]}\n 𝐣𝐚𝐝𝐢 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩 _*${groupMetadata.subject}*_ `, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
			    case 'waifu':
					gatauda = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'loli':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image,{quoted: mek})
					break
				case 'spamsms':
					if (args.length < 1) return reply('𝐍𝐨𝐦𝐞𝐫 𝐭𝐚𝐫𝐠𝐞𝐭')
					tels = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/spamsms?no=${tels}&jum=10`, {method: 'get'})
					reply(anu.logs)
					break	
				case 'spamgmail':
					if (args.length < 1) return reply('𝐠𝐦𝐚𝐢𝐥 𝐭𝐚𝐫𝐠𝐞𝐭')
					tels = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/spamgmail?target=${tels}&jum=10`, {method: 'get'})
					reply(anu.logs)
					break	
				case 'spamcall':
					if (args.length < 1) return reply('𝐍𝐨𝐦𝐞𝐫 𝐭𝐚𝐫𝐠𝐞𝐭')
					tels = body.slice(10)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=${tels}`, {method: 'get'})
					reply(anu.logs)
					break			
				case 'randomanime':
					gatauda = body.slice(13)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break						
				
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/nekonime`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break				 						
				case 'nama':
					tels = body.slice(6)					
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${tels}`, {method: 'get'})
					reply(anu.result)
					break
				case 'shortlink':
					tels = body.slice(11)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${tels}`, {method: 'get'})
					reply(anu.result)
					break									
				case 'tagme':
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} 𝐓𝐮𝐡 𝐝𝐚𝐡 𝐚𝐤𝐮 𝐭𝐚𝐠!`,
					contextInfo: { mentionedJid: [nom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break					
               case 'adminbot':
              case 'owner':
                case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, '𝐍𝐢𝐞𝐡 𝐧𝐨𝐦𝐞𝐫 𝐂𝐎 𝐤𝐮 𝐤𝐚𝐤, 𝐣𝐢𝐤𝐚 𝐦𝐚𝐮 𝐦𝐚𝐬𝐮𝐤𝐚𝐧 aku 𝐤𝐞 𝐠𝐫𝐨𝐮𝐩 𝐤𝐚𝐥𝐢𝐚𝐧 𝐜𝐡𝐚𝐭 𝐝𝐢𝐚 𝐲𝐚𝐡 kak',MessageType.text, { quoted: mek} )
                break  
            
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('𝐟𝐢𝐭𝐮𝐫 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐯')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐧𝐬𝐟𝐰 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐧𝐬𝐟𝐰 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢')
					} else {
						reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧, 𝟎 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫')
					}
					break	
					case 'nsfwloli': 
				    try {
						if (!isNsfw) return reply('𝐌𝐚𝐚𝐟 𝐟𝐢𝐭𝐮𝐫 𝐢𝐧𝐢 𝐛𝐞𝐥𝐮𝐦 𝐝𝐢 𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧')
						res = await fetchJson(`https://api.lolis.life/random?nsfw=true`, {method: 'get'})
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝐄𝐑𝐑𝐎𝐑')
					}
					break
					case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(prefix), text)
					break				
              
                case 'jago':
              case 'abangjago':
              case 'abgjago':
                    let eerrr = fs.readFileSync('./A187ID/abangjago.mp3')
                    client.sendMessage(from, eerrr, MessageType.audio, { ptt: true, quoted: mek })
                    break    
                
				case 'bucin':
					gatauda = body.slice(7)					
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply(anu.desc)
					break	
				case 'quotes':
					gatauda = body.slice(8)					
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/randomquotes`, {method: 'get'})
					reply(anu.quotes)
					break		
				case 'chord':
					if (args.length < 1) return reply('𝐣𝐮𝐝𝐮𝐥 𝐥𝐚𝐠𝐮 𝐤𝐚𝐤')
					tels = body.slice(7)					
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break						 
				case 'wiki':
					if (args.length < 1) return reply('𝐦𝐚𝐬𝐮𝐤𝐤𝐚𝐧 𝐤𝐚𝐭𝐚 𝐤𝐮𝐧𝐜𝐢')
					tels = body.slice(6)					
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break	
				case 'wikien':
					if (args.length < 1) return reply('𝐦𝐚𝐬𝐮𝐤𝐤𝐚𝐧 𝐤𝐚𝐭𝐚 𝐤𝐮𝐧𝐜𝐢')
					tels = body.slice(8)					
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/wikien?q=${tels}`, {method: 'get'})
					reply(anu.result)
					break				
				case 'blocklist': 
					teks = '𝐁𝐋𝐎𝐂𝐊 𝐋𝐈𝐒𝐓 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝐓𝐨𝐭𝐚𝐥 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr': 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`𝐊𝐢𝐫𝐢𝐦 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐭𝐚𝐠  𝐟𝐨𝐭𝐨 𝐲𝐚𝐧𝐠 𝐬𝐮𝐝𝐚𝐡 𝐭𝐞𝐫𝐤𝐢𝐫𝐢𝐦 ${prefix}𝗼𝗰𝗿`)
					}
					break
					case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'stiker': 
				case 'sticker':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
				
				case 'gtts':	
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, '𝗱𝗶𝗽𝗲𝗿𝗹𝘂𝗸𝗮𝗻 𝗸𝗼𝗱𝗲 𝗯𝗮𝗵𝗮𝘀𝗮 𝘁𝗼𝗱!', text, {quoted: mek})
					const gtts = require('./A187ID/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '𝗧𝗲𝗸𝘀 𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗷𝗮𝗱𝗶𝗶𝗻 𝘀𝘂𝗮𝗿𝗮 𝗺𝗮𝗻𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('𝗜𝗱𝗶𝗵 𝗻𝗴𝗲𝗹𝘂𝗻𝗷𝗮𝗸 𝗻𝗴𝗲𝗻𝘁𝗼𝗱, 𝘁𝗲𝗸𝘀𝗻𝘆𝗮 𝗷𝗮𝗻𝗴𝗮𝗻 𝗸𝗲𝗽𝗮𝗻𝗷𝗮𝗻𝗴𝗮𝗻 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('𝐘𝐞𝐚𝐡 𝐠𝐚𝐠𝐚𝐥 ;( , 𝐜𝐨𝐛𝐚 𝐥𝐚𝐠𝐢 𝐤𝐚𝐤  ><')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 : ${prefix}`)
					break 	
				case 'meme': 
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo': 
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break							
				
				case 'hilih': 
					if (args.length < 1) return reply('𝐭𝐞𝐤𝐬 𝐤𝐚𝐤!')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				
				case 'ytsearch': 
					if (args.length < 1) return reply('𝘆𝗮𝗻𝗴 𝗺𝗮𝘂 𝗱𝗶𝗰𝗮𝗿𝗶 𝗮𝗽𝗮 𝘁𝗼𝗱? 𝘁𝘆𝘁𝗱 𝗸𝗮𝗵?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					 
				case 'tiktok': 
					if (args.length < 1) return reply('𝐮𝐫𝐥𝐧𝐲𝐚  𝐦𝐚𝐧𝐚 𝐤𝐚𝐤?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, '𝐔𝐬𝐞𝐫𝐧𝐚𝐦𝐞 𝐧𝐲𝐚 𝐦𝐚𝐧𝐚 𝐤𝐚𝐤? ', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞 𝐭𝐢𝐝𝐚𝐤 𝐯𝐚𝐥𝐢𝐝')
					}
					break
				case 'nulis': 
				case 'tulis': ini
					if (args.length < 1) return reply('𝐚𝐤𝐮 𝐬𝐮𝐫𝐮𝐡 𝐧𝐮𝐥𝐢𝐬 𝐚𝐩𝐚 𝐤𝐚𝐤? 𝐓𝐲𝐭𝐝 𝐤𝐚𝐡!')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				
		 	
				
				case 'url2img': 
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('𝐏𝐢𝐥𝐢𝐡 𝐭𝐢𝐩𝐞 𝐧𝐲𝐚 𝐤𝐚𝐤?')
					if (!tipelist.includes(args[0])) return reply('𝐓𝐢𝐩𝐞 𝐚𝐩𝐚 𝐝𝐞𝐤𝐬𝐭𝐨𝐩|𝐭𝐚𝐛𝐥𝐞𝐭|𝐦𝐨𝐛𝐢𝐥𝐞')
					if (args.length < 2) return reply('𝐮𝐫𝐥𝐧𝐲𝐚  𝐦𝐚𝐧𝐚 𝐤𝐚𝐤?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})					 
							break
				
                 
                  case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break				
				
				case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('𝐂𝐥𝐞𝐚𝐫 𝐀𝐥𝐥 𝐒𝐮𝐜𝐜𝐞𝐬𝐬 :)')
					break			       
                 	
                 			                    
				case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝐏𝐄𝐒𝐀𝐍 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 𝐍𝐎𝐄𝐄𝐑𝐁𝐎𝐓 ❯\n\n${body.slice(4)}`})
						}
						reply('𝐬𝐮𝐜𝐜𝐬𝐬 𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `❮ 𝐏𝐄𝐒𝐀𝐍 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 𝐍𝐎𝐄𝐄𝐑𝐁𝐎𝐓 ❯\n\n${body.slice(4)}`)
						}
						reply('𝐬𝐮𝐜𝐜𝐬𝐬 𝐛𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭')
					}
					break
			       	case 'setpp': 
                        if (!isGroup) return reply(mess.only.group)
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('𝐢𝐜𝐨𝐧 𝐠𝐫𝐨𝐮𝐩 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐝𝐢𝐮𝐛𝐚𝐡 ')
                                        break						
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('𝐌𝐚𝐮 𝐦𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐚𝐧𝐚𝐤 𝐩𝐮𝐧𝐠𝐮𝐭 𝐤𝐚𝐡 𝐤𝐚𝐤?')
					if (args[0].startsWith('08')) return reply('𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐤𝐨𝐝𝐞 𝐧𝐞𝐠𝐚𝐫𝐚 𝐤𝐚𝐤')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('𝐆𝐚𝐠𝐚𝐥 𝐦𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐭𝐚𝐫𝐠𝐞𝐭, 𝐦𝐮𝐧𝐠𝐤𝐢𝐧 𝐤𝐚𝐫𝐞𝐧𝐚 𝐝𝐢 𝐩𝐫𝐢𝐯𝐚𝐭𝐞')
					}
					break
					case 'grup':
					case 'gc':
					case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐬𝐞𝐦𝐮𝐚 𝐨𝐫𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐛𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐦𝐞𝐧𝐠𝐮𝐛𝐚𝐡 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐧𝐲𝐚 𝐚𝐝𝐦𝐢𝐧 𝐲𝐚𝐧𝐠 𝐛𝐢𝐬𝐚 𝐦𝐞𝐧𝐠𝐢𝐫𝐢𝐦 𝐩𝐞𝐬𝐚𝐧`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
		   		
				
			     	case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝐓𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐤𝐢𝐜𝐤!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐚𝐚𝐟 𝐤𝐚𝐦𝐮 𝐝𝐢 𝐤𝐢𝐜𝐤 𝐝𝐚𝐫𝐢 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐝𝐢𝐭𝐞𝐫𝐢𝐦𝐚, 𝐦𝐚𝐚𝐟 @${mentioned[0].split('@')[0]}\n𝐤𝐚𝐦𝐮 𝐝𝐢 𝐤𝐢𝐜𝐤 𝐝𝐚𝐫𝐢 𝐠𝐫𝐨𝐮𝐩 _*${groupMetadata.subject}*_ `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `𝐋𝐢𝐬𝐭 𝐚𝐝𝐦𝐢𝐧 𝐠𝐫𝐨𝐮𝐩 _*${groupMetadata.subject}*_\n𝐓𝐨𝐭𝐚𝐥 : _${groupAdmins.length}_\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `┣➥ @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
					if (!isQuotedSticker) return reply('𝐫𝐞𝐩𝐥𝐲 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐤𝐚𝐤')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('𝐘𝐞𝐚𝐡 𝐠𝐚𝐠𝐚𝐥 ;( , 𝐜𝐨𝐛𝐚 𝐥𝐚𝐠𝐢 𝐤𝐚𝐤 ><')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗱𝗮𝗵 𝗷𝗮𝗱𝗶 𝘁𝗼𝗱'})
						fs.unlinkSync(ran)
					})
					break
		
			 
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝐟𝐢𝐭𝐮𝐫 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐯')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐬𝐢𝐦𝐢𝐡 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐬𝐢𝐦𝐢𝐡 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢️️')
					} else {
						reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧, 𝟎 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫')
					}
					break 
				
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('𝐟𝐢𝐭𝐮𝐫 𝐬𝐮𝐝𝐚𝐡 𝐚𝐤𝐭𝐢𝐯')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝐒𝐔𝐂𝐂𝐒𝐄𝐒𝐒 ❭ 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫 𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝐩𝐚𝐝𝐚 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧𝐢️')
					} else {
						reply('𝐤𝐞𝐭𝐢𝐤 𝟏 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧, 𝟎 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐨𝐧𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐟𝐢𝐭𝐮𝐫')
					}
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('𝐭𝐚𝐠 𝐭𝐚𝐫𝐠𝐞𝐭 𝐲𝐚𝐧𝐠 𝐦𝐚𝐮 𝐝𝐢 𝐜𝐥𝐨𝐧𝐞!')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`𝐅𝐨𝐭𝐨 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐛𝐨𝐭 𝐁𝐞𝐫𝐡𝐚𝐬𝐢𝐥 𝐝𝐢 𝐩𝐞𝐫𝐛𝐚𝐫𝐮𝐢 𝐨𝐥𝐞𝐡 𝐨𝐰𝐧𝐞𝐫, 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐟𝐨𝐭𝐨 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('𝐘𝐞𝐚𝐡 𝐠𝐚𝐠𝐚𝐥 ;( , 𝐜𝐨𝐛𝐚 𝐥𝐚𝐠𝐢 𝐤𝐚𝐤 ><')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('𝐊𝐢𝐫𝐢𝐦 𝐟𝐨𝐭𝐨 𝐚𝐭𝐚𝐮 𝐭𝐚𝐠 𝐟𝐨𝐭𝐨 𝐲𝐚𝐧𝐠 𝐬𝐮𝐝𝐚𝐡 𝐭𝐞𝐫𝐤𝐢𝐫𝐢𝐦')
					}
					break
				default:
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

                     
/*
*Thanks For 𝗠𝗵𝗮𝗻𝗸𝗕𝗮𝗿𝗕𝗮𝗿
*/

 