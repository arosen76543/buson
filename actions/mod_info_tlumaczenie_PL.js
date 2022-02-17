module.exports = {

name: "Tłumaczenie na język polski",
section: "#Mod Information",

subtitle: function(data) {
return `Tłumaczenie na język polski`;
},
author: "Lego#8486",
version: "1.0",
short_description: "Informacje o tłumaczeniu na język polski",
variableStorage: function(data, varType) {},
fields: ["mods"],

html: function(isEvent, data) {
return `
<style>
span
{
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

span.wrexlink2, span.wrexlink3
{
color: #0096cf;
text-decoration: none;
cursor:pointer;
font-family: inherit;
font-weight: inherit;
}

span.wrexlink2:hover, span.wrexlink3:hover
{
  text-decoration: underline;
}
  
span.discord_channel
{
background-color: rgba(114,137,218,.1);
color: #7289da;
cursor: pointer;
font-family: sans-serif;
padding: 2px;
}
  
span.discord_channel:hover
{
background-color: rgba(114,137,218,.7);
color: #fff;
}
  
span.discord_code_blocks
{
background: #2f3136;
border: 1.5px solid #2b2c31;
border-radius: 7px;
box-sizing: border-box;
overflow: hidden;
padding: 8px 10px;
color: #839496;
font-family: Consolas
}

</style>
<div id ="wrexdiv" style="width: 550px; height: 350px; overflow-y: scroll;">
<p>
<h1 style="color: #fff">Witaj!</h1>
Dziękuję za pobranie mojego tłumaczenia! - Lego#8486<Br>
<h3 style="color: #fff">GitHub:</h3>
Wejdź na mojego <b>GitHub</b>a, aby być na bieżąco.<Br>
Kliknij lub skopiuj poniższy link i otwórz go swojej przeglądarce.<Br>
<span class="wrexlink3" data-url3="https://github.com/damian160501">https://github.com/damian160501</span><br>
</p>
<h3 style="color: #fff">Discord:</h3>
Jeśli potrzebujesz pomocy w budowaniu swojego bota, odwiedź <span class="wrexlink2" data-url2="https://www.youtube.com/channel/UC9dZXvB9Cz-hl2Yr9P-czaw">Mój kanał na YouTube</span> oraz dołącz na <span class="wrexlink2" data-url2="https://discord.gg/TNkQ6X6">Discordowy serwer wsparcia</span>.<p>Napisz na kanale <span class="discord_channel wrexlink" data-url="https://discordapp.com/channels/599334250365583363/617103496633778206">#pomoc</span>, a na pewno ktoś pomoże Ci rozwiązać problem.
</p></div>`
},

//---------------------------------------------------------------------
// Action Editor Init Code
//
// When the HTML is first applied to the action editor, this code
// is also run. This helps add modifications or setup reactionary
// functions for the DOM elements.
//---------------------------------------------------------------------

init: function() {
const {glob, document} = this;

var path = require("path")

try {

	var mods = document.getElementById("mods");

	require("fs").readdirSync(__dirname).forEach(function(file) {
		if(file.match(/MOD.js/i)) {
			var action = require(path.join(__dirname, file));
			if(action.name && action.action !== null) {

				const tr = document.createElement('tr')
				tr.setAttribute('class', 'table-dark')

				const name = document.createElement('td')
				const headerText = document.createElement("b")
				headerText.innerHTML = action.name
				name.appendChild(headerText)

				name.setAttribute('scope', 'row')
				tr.appendChild(name)

				const section = document.createElement('td')
				section.appendChild(document.createTextNode(action.section))
				tr.appendChild(section)

				const author = document.createElement('td')
				author.appendChild(document.createTextNode(action.author ? action.author : "DBM"))
				tr.appendChild(author)
				mods.appendChild(tr);
			}
		}
	});
} catch (error) {
	// write any init errors to errors.txt in dbm's main directory
	require("fs").appendFile("errors.txt", error.stack ? error.stack : error + "\r\n");
}

var wrexlinks = document.getElementsByClassName("wrexlink")
	for(var x = 0; x < wrexlinks.length; x++) {
	    var wrexlink = wrexlinks[x];
	    var url = wrexlink.getAttribute('data-url');
	    if(url){
		    wrexlink.addEventListener("click", function(e){
		        e.stopImmediatePropagation();
		        console.log("Launching URL: [" + url + "] in your default browser.");
		        require('child_process').execSync('start ' + url);
		    });
	    }
	}

var wrexlinks2 = document.getElementsByClassName("wrexlink2")
	for(var x2 = 0; x2 < wrexlinks2.length; x2++) {
	    var wrexlink2 = wrexlinks2[x2];
	    var url2 = wrexlink2.getAttribute('data-url2');
	    if(url2){
		    wrexlink2.setAttribute("title", url2);
		    wrexlink2.addEventListener("click", function(e2){
		        e2.stopImmediatePropagation();
		        console.log("Launching URL: [" + url2 + "] in your default browser.");
		        require('child_process').execSync('start ' + url2);
		    });
	    }
	}

var wrexlinks3 = document.getElementsByClassName("wrexlink3")
	for(var x3 = 0; x3 < wrexlinks3.length; x3++) {
	    var wrexlink3 = wrexlinks3[x3];
	    var url3 = wrexlink3.getAttribute('data-url3');
	    if(url3){
		    wrexlink3.setAttribute("title", url3);
		    wrexlink3.addEventListener("click", function(e3){
		        e3.stopImmediatePropagation();
		        console.log("Launching URL: [" + url3 + "] in your default browser.");
		        require('child_process').execSync('start ' + url3);
		    });
	    }
	}
},

//---------------------------------------------------------------------
// Action Bot Function
//
// This is the function for the action within the Bot's Action class.
// Keep in mind event calls won't have access to the "msg" parameter,
// so be sure to provide checks for variable existance.
//---------------------------------------------------------------------

action: function(cache) {

console.log('Music function successfully overwritten.');

},

//---------------------------------------------------------------------
// Action Bot Mod
//
// Upon initialization of the bot, this code is run. Using the bot's
// DBM namespace, one can add/modify existing functions if necessary.
// In order to reduce conflictions between mods, be sure to alias
// functions you wish to overwrite.
//---------------------------------------------------------------------

mod: function(DBM) {
	//Check for PlayingNow Data Object
	if(DBM.Audio.playingnow === undefined) {
		DBM.Audio.playingnow = [];
	};

	//Check for Loop Data Objects
	if(DBM.Audio.loopQueue === undefined) {
		DBM.Audio.loopQueue = {};
	};
	if(DBM.Audio.loopItem === undefined) {
		DBM.Audio.loopItem = {};
	};

	DBM.Audio.addToQueue = function(item, cache) {
		if(!cache.server) return;
		const id = cache.server.id;
		if(!this.queue[id]) {
			this.queue[id] = [];
			DBM.Audio.loopQueue[id] = false;//Reset loop status
			DBM.Audio.loopItem[id] = false;
		};
		this.queue[id].push(item);
		this.playNext(id);
	};

	DBM.Audio.playNext = function(id, forceSkip) {
		if(!this.connections[id]) {
			DBM.Audio.loopQueue[id] = false;//Reset loop status
			DBM.Audio.loopItem[id] = false;
			return;
		};
		if(!this.dispatchers[id] || !!forceSkip) {
			if(DBM.Audio.loopItem[id] == true) {//Check if Item Loop is active
				const item = this.playingnow[id];
				this.playItem(item, id);
			} else if(DBM.Audio.loopQueue[id] == true) {//Check if Queue Loop is active
				const currentItem = this.playingnow[id];
				this.queue[id].push(currentItem);
				const nextItem = this.queue[id].shift();
				this.playItem(nextItem, id);
			} else {//Basic DBM function (No Loops are active)
				if(this.queue[id].length > 0) {
					const item = this.queue[id].shift();
					this.playItem(item, id);
				} else {
					DBM.Audio.loopQueue[id] = false;//Reset loop status
					DBM.Audio.loopItem[id] = false;
					this.connections[id].disconnect();
				};
			};
		};
	};
	
	DBM.Audio.playItem = function(item, id) {
		if(!this.connections[id]) return;
		if(this.dispatchers[id]) {
			this.dispatchers[id]._forceEnd = true;
			this.dispatchers[id].end();
		};
		const type = item[0];
		let setupDispatcher = false;
		switch(type) {
			case 'file':
				setupDispatcher = this.playFile(item[2], item[1], id);
				this.playingnow[id] = item;
				break;
			case 'url':
				setupDispatcher = this.playUrl(item[2], item[1], id);
				this.playingnow[id] = item;
				break;
			case 'yt':
				setupDispatcher = this.playYt(item[2], item[1], id);
				this.playingnow[id] = item;
				break;
		};
		if(setupDispatcher && !this.dispatchers[id]._eventSetup) {
			this.dispatchers[id].on('end', function() {
				const isForced = this.dispatchers[id]._forceEnd;
				this.dispatchers[id] = null;
				if(!isForced) {
					this.playNext(id);
				}
			}.bind(this));
			this.dispatchers[id]._eventSetup = true;
		};
	};
}

}; // End of module
