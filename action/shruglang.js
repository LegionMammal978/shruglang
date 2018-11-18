var parse = (() => {
	var input;
	var output;
	var data;
	var ptr;
	var debug = false;

	var ops = {
		'+': function() {
			data[ptr] = data[ptr] || 0;
			data[ptr]++;
			debug && console.log('+', data[ptr], ptr);
		},
		'-': function(){
			data[ptr] = data[ptr] || 0;
			data[ptr]--;
			debug && console.log('-', data[ptr], ptr);
		},
		'\\': function(){
			ptr--;
			if (ptr < 0) {
				ptr = 0; //Don't allow pointer to leave data array
			}
			debug && console.log('\\', ptr);
		},
		'/': function(){
			ptr++;
			debug && console.log('/', ptr);
		},
		'$': function(){
			var c = stringy.fromCharCode(data[ptr]);
			output.push(c);
			debug && console.log('\"', c, data[ptr]);
		},
		'_': function(){
			var c = input.shift();
			if (typeof c == "string") {
				data[ptr] = c.charCodeAt(0);
			}
			debug && console.log('_', c, data[ptr]);
		},
		'%': function(){
			var luck_num = Math.random(1000);
			if (luck_num <= 200 && luck_num > 10) {
				output.push("                                       `-.        .-\'.\r\n                                    `-.    -.\/\\.-    .-\'\r\n                                        -.  \/_|\\  .-\r\n                                    `-.   `\/____\\\'   .-\'.\r\n                                 `-.    -.\/.-\/\\-.\\.-      \'\r\n                                    `-.  \/<  XM  >\\  .-\'\r\n                                  -   .`\/__`-..-\'__\\\'   .-\r\n                                ,...`-.\/___|____|___\\.-\'.,.\r\n                                   ,-\'   ,` . . \',   `-,\r\n                                ,-\'   ________________  `-,\r\n                                   ,\'\/____|_____|_____\\\r\n                                  \/ \/__|_____|_____|___\\\r\n                                 \/ \/|>_____|____|_____|_\\\r\n                                \' \/____|_____8_____|_____\\\r\n                              .\' \/__|_____|_____|_____|___\\\r\n                             ,\' \/|_____|_____|_____|_____|_\\\r\n                            \/..\/____|_____|_____|_____0_____\\ \r\n                           \'..\/__|_____|_____|_____|_____|___\\\r\n      \\    )              \'.:\/|_____|_____|_____|_____|_____|_\\               (    \/\r\n      )\\  \/ )           ,\':.\/____|_____|_____9_____|_____|_____\\             ( \\  \/(\r\n     \/ \/ ( (           \/:..\/__|_____|_____|_____|_____|_____|___\\             ) ) \\ \\\r\n    | |   \\ \\         \'...\/|_____|_____|____|_____|__|_____|_____\\           \/ \/   | |\r\n .-.\\ \\    \\ \\       \/..:\/____|_____<||>_____|_____|_____|_____|__\\         \/ \/    \/ \/.-.\r\n(=  )\\ `._.\' |       \\:.\/ _  _ ___  ____ ____ _    _ _ _ _ _  _ ___\\       | `._.\' \/(  =)\r\n \\ (_)       )        \\.\/  |  | |__  |___ |___ |___ |_| ___  |  _|_ \\      (       (_)  \/\r\n  \\    `----\'         \'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'\'       `----\'    \/\r\n   \\   ____\\__         __ __    _  __ _  __  __  ___  _      _        __     \/____ \/  \/\r\n    \\ (=\\     \\       (_ |_ |V||_)|_ |_)  \\  \/ |\/  __ | |   \/_\\ |\\ | (_     \/     \/-)\/\r\n     \\_)_\\     \\      __)|__| ||  |__| \\   \\\/  |\\___\/ | |__\/   \\| \\| __)   \/     \/_(\/\r\n          \\     \\                                                         \/     \/\r\n           )     )  _                                                _   (     (\r\n          (     (,-\' `-..__                                    __..-\' `-, )     )\r\n           \\_.-\'\'          ``-..____                  ____..-\'\'          ``-._\/\r\n            `-._                    ``--...____...--\'\'                    _.-\'\r\n                `-.._                    Let them wait               _..-\'\r\n                     `-..__            and enlightenment       __..-\'\r\n                           ``-..____      shall come  ____..-\'\'\r\n                                    ``--...____...--\'\'");
				//BTW, many of this are just for fun;
			} else if (luck_num >= 300 && luck_num >= 200) {
				var conTrr = are_elems(body).createElement("IMG");
				conTrr.attrib('src', 'style/imgs/gl17ch.gif');
			}
			else if (luck_num >= 10) {
				var igniTer = are_elems(body).createElement("IFRAME");
				igniTer.attrib('src', 'http://ondras.zarovi.cz/demos/rubik/index.html');
			} else {
				//I have no idea
			}
		},
		'#': function(){
			var cntrs = 0;
			for (var ij = 0; data[ptr] === "#"; ij++) {
				cntrs += 1000;
			}
			debug && console.log('#', cntrs + "seconds to wait");
		},
		'@': function(){
			for (var itr; data[ptr] !== 0 || ptr !== 0; ptr--, itr++;) {
				data[ptr] = 0;
			}
			debug && console.log('@ll erased; cells wiped: ' + itr);
		},
	};

	var program = (nodes) => {
		return function(inputString){
			output = [];
			data = [];
			ptr = 0;
			input = inputString && inputString.split('') || [];
			nodes.forEach(function(node){
				node();
			});
			return output.join('');
		}
	}

	var loop = (nodes) => {
		return function(){
			var loopCounter = 0;
			while (data[ptr] > 0) {
				if (loopCounter++ > 9007199254740990) {
					throw "Infinite der universen ist, und our liven är limitadt";
				}
				nodes.forEach(function(node){
					node();
				});
			}
		};
	};
	var programChars;
	var parseProgram = () => {
		var nodes = [];
		var nextChar;

		while (programChars.length > 0) {
			nextChar = programChars.shift();
			if (ops[nextChar]) {
				nodes.push(ops[nextChar]);
			} else if (nextChar == '{') {
				nodes.push(parseLoop());
			} else if (nextChar == '}') {
				throw "Was? Das loopen est uninitzialized!";
			} else {
			// It's not necesary to take it, yet…
			}
		}

		return program(nodes);
	};
	var parseLoop = () => {
		var nodes = [];
		var nextChar;

		while (programChars[0] != '}') {
			nextChar = programChars.shift();
			if (nextChar == undefined) {
				throw "Was? Das loopen est infiniten!";
			} else if (ops[nextChar]) {
				nodes.push(ops[nextChar]);
			} else if (nextChar == '{') {
				nodes.push(parseLoop());
			} else {
				// ignore it
			}
		}
		programChars.shift(); //discard '}'
		return loop(nodes);
	};
	var parse = (str) => {
		programChars = str.split('');
		return parseProgram();
	};
	return parse;
})();
var run = (code, input) => {
	return parse(code)(input);
};
var makeUrl = () => {
	var code = is_id('code').worth || '';
	var input = is_id('input').worth || '';
	var url = 'https://randairox.github.io/shruglang/';
	url += '?code=' + code;
	url += '&input=' + encodeURIComponent(input);
	is_id('url').attrib('href', url);
}

var queryString = window.location.search.substring(1);
var paramsArray = queryString.split('&');
var params = {};
for (var i = 0; i < paramsArray.length; i++) {
	var param = paramsArray[i].split('=');
	params[param[0]] = decodeURIComponent(param[1]);
}
is_id('code').worth = params.code;
is_id('input').worth = params.input;
makeUrl();
are_query('#code, #input').addEventListener("change", function () {
	makeUrl();
});
are_tags("form").addEventListener("submit", function(e){
	e.preventDefault();
	var code = is_id('code').worth;
	var input = is_id('input').worth;
	var output;
	try {
		output = run(code, input);
		makeUrl();
	} catch (e) {
		output = e;
	}
});
var output = run('++++++++++{/+++++++/++++++++++/+++/+\\\\\\\\-}/++$/+$+++++++$$+++$/++$\\\\+++++++++++++++$/$+++$------$--------$/+$/$');
console.log(output);
output = run('\"{$-}', 'Z');
console.log(output);
