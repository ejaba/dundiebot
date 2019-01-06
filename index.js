const Discord = require("discord.js");

const PREFIX = "d!"

var quote = [
	"Just pretend we're talking until the cops leave. -Creed Bratton",
	"Dwight, you ignorant slut. -Michael Scott",
	"I'm not superstitous, but I'm a little-stitous. -Michael Scott",
	"If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice. -Michael Scott",
	"I should really have a tweeter account. -Dwight Schrute",
	"The worst thing about prison were the dementors. -Michael Scott",
	"Bears. Beets. Battlestar Galactica. -Jim Halpert",
	"Toby works in HR, which technically means he works for corporate, so he's not really a part of our family. He's also divorced, so he's not really a part of his family. -Michael Scott",
	"Webster's Dictionary defines wedding as: The fusing of two metals with a hot torch. -Michael Scott",
	"I feel like all my kids grew up, and then they married each other. -Michael Scott",
	"I don't talk trash, I talk smack. They're totally different. -Kelly Kapoor",
	"I would date the hell out of me. -Darryl Philbin",
	"***DID I STUTTER???*** -Stanley Hudson",
	"I have very little patience for stupidity. -Kevin Malone",
	"You miss 100% of the shots you don't take. -Wayne Gretzky -Michael Scott",
	"Friends joke around with one another like 'you're poor', 'well, your mom's dead'. -Michael Scott",
	"Nope it's not Ashton Kutcher, it's Kevin Malone. Equally handsome, equally smart. -Kevin Malone",
	"I am not offended by homosexuality. In the 60's I made love to many, many women, often outdoors in the mud and rain. It's possible a man could've slipped in there. There'd be no way of knowing. -Creed Bratton",
	"The Taliban's the worst. Great heroin though. -Creed Bratton",
	"Who has two thumbs and loves bonin' your mom? THIS GUY! -Todd Packer",
	"Andy Bernard does not lose contests. He wins them. Or he quits them because they're unfair. -Andy Bernard",
	"Heads I do it, tails I don't. Best out of seven. -Michael Scott"
];

var michaelquote = [
	"Dwight, you ignorant slut. -Michael Scott",
	"I'm not superstitous, but I'm a little-stitous. -Michael Scott",
	"If I had a gun with two bullets and I was in a room with Hitler, Bin Laden and Toby, I would shoot Toby twice. -Michael Scott",
	"The worst thing about prison were the dementors. -Michael Scott",
	"Toby works in HR, which technically means he works for corporate, so he's not really a part of our family. He's also divorced, so he's not really a part of his family. -Michael Scott",
	"Webster's Dictionary defines wedding as: The fusing of two metals with a hot torch. -Michael Scott",
	"I feel like all my kids grew up, and then they married each other. -Michael Scott",
	"Friends joke around with one another like 'you're poor', 'well, your mom's dead'. -Michael Scott",
	"Heads I do it, tails I don't. Best out of seven. -Michael Scott"
];

var creedquote = [
	"Just pretend we're talking until the cops leave. -Creed Bratton",
	"I am not offended by homosexuality. In the 60's I made love to many, many women, often outdoors in the mud and rain. It's possible a man could've slipped in there. There'd be no way of knowing. -Creed Bratton",
	"The Taliban's the worst. Great heroin though. -Creed Bratton"
];

var dwightgif = [
	"https://i.imgur.com/2lnC5yi.gif",
	"https://media.giphy.com/media/9PdfJQgHt2AgM/giphy.gif"
];

var jimgif = [
	"https://media.giphy.com/media/l3bwrFzIUMEM0/giphy.gif",
	"https://media.giphy.com/media/12LxZlbPbAV5PW/giphy.gif",
	"https://media.giphy.com/media/QBSzVwyQRphpC/giphy.gif",
	"https://media.giphy.com/media/26gsp7XjMlbpgOxwI/giphy.gif",
	"https://media.giphy.com/media/agd5h8tLLOx32/giphy.gif",
	"https://media.giphy.com/media/87eGvMYGJsI2A/giphy.gif"
]

var mikegif = [
	"https://media.giphy.com/media/fsqJLKTGxlJmg/giphy.gif",
	"https://media1.giphy.com/media/elPYgmQ506HK0/giphy.gif",
	"https://media.giphy.com/media/goEWraNuCucVi/giphy.gif",
	"https://media.giphy.com/media/h7No5m3tAeV4Q/giphy.gif",
	"https://media.giphy.com/media/5tSSgmS7sd8Vq/giphy.gif",
	"https://media.giphy.com/media/oyIpShY494JVe/giphy.gif",
	"https://media.giphy.com/media/3cRckyeMg6whi/giphy.gif"
]

var bot = new Discord.Client();

var dunder = [
	"'Hottest in the Office'",
	"'Bushiest Beaver'",
	"'Whitest Shoes'",
	"'Diabetes'",
	"'Best Dad'",
	"'Extreme Repulsiveness'",
	"'Kind of A Bitch'",
	"'Worst Salesman of the Year'",
	"'Doobie Doobie Pothead Stoner of the Year'",
	"'Tight-Ass Award'",
	"'Cutest Redhead in the Office'"
];


bot.on("ready", function(message) {
	console.log("Ready!")
})

bot.on('message', message => {
	if (message.content === 'd!quote creed') {
	  message.channel.send(creedquote[Math.floor(Math.random() * creedquote.length)]);
	}
  });

bot.on('message', message => {
	if (message.content === 'd!quote michael') {
	  message.channel.send(michaelquote[Math.floor(Math.random() * michaelquote.length)]);
	}
  });

  bot.on('message', message => {
	if (message.content === 'd!quote') {
	  message.channel.send(quote[Math.floor(Math.random() * quote.length)]);
	}
  });

bot.on('message', message => {
	if (message.content === 'd!gif dwight') {
		message.channel.send(message.channel.send(" ",{
			file: dwightgif[Math.floor(Math.random() * dwightgif.length)]
		}))
	}
})

bot.on('message', message => {
	if (message.content === 'd!gif jim') {
		message.channel.send(message.channel.send(" ",{
			file: jimgif[Math.floor(Math.random() * jimgif.length)]
		}))
	}
})

bot.on('message', message => {
	if (message.content === 'd!gif michael') {
		message.channel.send(message.channel.send(" ",{
			file: mikegif[Math.floor(Math.random() * mikegif.length)]
		}))
	}
})

bot.on("message", function(message) {
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0].toLowerCase()) {
		case "help":
			var embed = new Discord.RichEmbed()
				.setTitle("CURRENT COMMANDS:")
				.addField("d!quote (name)", "Quotes any character from The Office.")
				.addField("d!gif", "Sends a gif of any character from The Office.")
				.addField("d!help", "DMs you this menu.")
			message.author.sendEmbed(embed)
		break;
		case "dundie":
			message.channel.send("Congradulations, " +  message.author + ". You have been granted the award " + dunder[Math.floor(Math.random() * dunder.length)] + "!")
		break;
		default:
			
	}
});

var gamelol = [
	"with my forman grill",
	"i just hit meredith with my car",
	"you're such an idiot, dwigt.",
	"D W I G H T.",
	"i think michael made out with jan",
	"thats what she said",
	"and the hottest in the office goes to: ryan !!!",
	"cleanup on isle five.",
	"i cant even take of my hat, because them i'm hitler.",
	"tan all over. jan all over."
];

bot.on('ready', () => {
	bot.user.setGame(gamelol[Math.floor(Math.random() * gamelol.length)] + " | d!");
  });

bot.login(TOKEN);
