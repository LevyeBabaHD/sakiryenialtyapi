const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = class NewsCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'yenilikler',
			group: 'bot',
			memberName: 'yenilikler',
			description: 'Bot ile ilgili yeni özellikleri gösterir.',
			guildOnly: false,
			throttling: {
				usages: 1,
				duration: 10
			}
		});
	}

	async run(message) {
		if (message.guild) {
			var embed = new RichEmbed()
			.setAuthor('Better Bot | Yenilikler', this.client.user.avatarURL)
			.setDescription(`Tüm komutları görmek için \`${this.client.commandPrefix}yardım\` yazabilirsiniz.`, this.client.user.avatarURL)
			.addField(`Yenilikler | v1.0.5`, stripIndents`
			+ Resimli giriş çıkış mesajı eklendi.
			+ \`espri\` komutu eklendi.
			+ Müzik Komutları Güncellendi.
			+ \`oynat\` komutu düzenlendi.
			+ \`dur\` komutu düzenlendi.
			+ \`geç\` komutu düzenlendi.
			+ \`ses\` komutu eklendi.
			+ \`şarkı-listesi\` komutu eklendi.
			+ Bazı hatalar giderildi.
			`)
			.addField(`Bağlantılar/Linkler`, stripIndents`
			• **Şakir Bot'u** sunucularınıza eklemek isterseniz [bana](https://discordapp.com/oauth2/authorize?client_id=457547769159352341&permissions=8&scope=bot) tıklayarak ekleyebilirsiniz.
			• Bir sorun var ise [bana](https://discord.gg/rc5kfTU) tıklayarak **Destek Sunucum'a** gelip yardım alabilirsiniz.
			• **Şakir Bot'a** oy vermek için [bana](https://discordbots.org/bot/484052182975643649) tıkla! Şakir Bota oy vermeyi unutmayın !
			`)
			.setColor("RANDOM")
			.setFooter('©' + (new Date()).getFullYear() + ' Şakir Bot', this.client.user.avatarURL)
			.setTimestamp()
			message.channel.send({embed});
		}
	}
};