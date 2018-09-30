const commando = require('discord.js-commando');
const Discord = require('discord.js')
var espriler = [
'ÇaImak fiiIinin geIecek zamanı nedir? Hapse girmek.', 
'Geçen gün taksi çevirdim hala dönüyor.', 
'Adamın biri güneşte yanmış, ay da düz.', 
'Adamın biri kızmış istemeye gelmişler.', 
'Ayda 5 milyon kazanma ister misin? Evet.  O zaman Ay’a git.',
"Sinirlenince telefonun kabını çıkarıp kabı duvara vuruyorum. Fakiriz ama salak değiliz.",
  "Aklımı kaçırdım, 100.000 TL fidye istiyorum.",
  "Dondurmayı ben yalamam, himalayalar.",
  "Tenyalar bağırsakta yaşar, bağırmasakta",
  "Ben Yedigün içiyorum, sen Onbeşgün iç",
  "Denizaltı'nın bir üst modeli nedir?\n- Denizyedi",
  "Sözde ışık sesten hızlıymış. O zaman nasıl oluyor da öndeki araç şoförü yeşil ışık yandığını, arkadaki arabanın korna sesinden sonra görüyor.",
  "Aya ilk bayrağı kim dikmiştir?\n- Terzi.",
  "- Saçı olmayan il'e ne denir?\n- İlkel.",
  "Hayat, ha tekne...",
  "- Oğlum hayırlı olsun; araba almışsın.\n- Evet aldık.\n- Peki niye araba aldın? Kendine alsaydın ya.",
  "Yaş olmuş 35 babam sende göz var oğlum dedi. Bunu 35 yıl sonra mı fark ettin babacım. Çok şaşırdım.",
  "Oğlumun adını mafya koydum, artık ben de bir mafya babasıyım.",
  "Öğretmen: Çocuklar dinleyin.\nÖğrenciler: Din din din din…",
  "Aykut gol atamayınca ne demiş? I couldnt",
  "Aşkım seni aldatıyorum; birde ortak yönümüz yok diyorsun... Aşk olsun.",
  "– Yabancı diliniz var mı?\n- Bir tane dilim var onu da doğduğumdan beri tanıyorum, yabancı değil.",
  "- Oğlum canlılara örnek ver.\n- Kedi, köpek.\n- Cansızlara örnek ver.\n- Ölü kedi, ölü köpek.",
  "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.",
  "+ Mustafa!\n- Evet hocam?\n+ 50.\n- Şaka mı hocam?\n+ Tabi ki şaka, otur 10.",
  "- En çok hangi ilimizde araba var?\n- Kars.",
  "Bekarlık sultanlıktır, fakat er ya da geç demokrasiye geçilir.",
  "– Sinemaya ne dersin?\n+ Sinema derim, sen?\n– Ben de Sinema derim.\n+ Ne çok ortak yanımız var böyle!",
  " iPhone alacağım.\n+ 6 mı, 7 mi?\n– Bir tane yeter kanka.",
  "Adamın gözleri dolmuş; ayakları taksi.",
  "Geçen gün arkadaşlarla fırında patates yiyorduk, fırın sıcak geldi bahçeye çıktık.",
  "Uzun lafın kısası: U.L.",
  "Cem Uzan, üstünü örteyim.",
  "Şakir saz çaldı; polis tutukladı.",
  "+ Aşkım sana hediye aldım.\n- Ama bunu kabul edemem çok pahalı!\n+ Ver o zaman.\n- Ama aşkım.\n+ Ver lan!",
  "- Fransızların nesi eksiktir ?\n- 'Fran'ları tabii ki.",
  "- Adın ne?\n- Bill.\n- Nereden bileyim be?",
  "– Tatlı alır mıydınız efendim?\n+ Seçenekler nelerdir?\n– Evet veya hayır.\n+ Veya diyorum.  ",
  "Adamın biri gülmüş, saksıya koymuşlar.",
  "– Benim neden kardeşim yok baba?\n- Seni görünce ikincisine cesaret edemedik.",
  "- LG Marka telefon aldım.\n- Ayakçı niye almadın?",
  "- Şakir bot berbat!\n- AHAHHAHHAHHAHA!",
  "Geçen gün taksi çevirdim hala dönüyor.",
  "İngilizcem yok, tanıdığım bütün Cem'ler Türk.",
  "+ Kanka sen meteoroloji okudun dime?\n– Evet?\n+ Baksana şu kızın havası kime?",
  "Adamın kafası atmış bacakları eşek.",
  
]

module.exports = class EchoCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'espri',
            group: 'eğlence',
            memberName: 'espri',
            description: 'Espri yapar.',
            guildOnly: true,
            throttling: {
                 usages: 1,
                 duration: 10
             },

        });
    }

async run(message) {

    var espri = espriler[Math.floor(Math.random() * espriler.length)];

  	const embed = new Discord.RichEmbed()
  	.setColor("RANDOM")
    .setDescription(`${espri}`) 
    message.channel.send({embed})
    }
}