var parse = (function () {
	var input;
	var output;
	var data;
	var ptr;
	var ctrn;
	var debug = false;
	var ops = {
		'#': function() {
			for (nextChar == '#') {
				ctrn += 1000;
			}
			if (nextChar != '#') {
				setTimeout(ctrn, ptr++);
			}
		}
		'@': function() {
			for (ptr > 0; ptr--) {
				data[ptr] = 0;
			}
			if (ptr == 0) {
				debug && console.log('@ll reseted');
			}
		},
		'+': function () {
			data[ptr] = data[ptr] || 0;
			data[ptr]++;
			debug && console.log('+', data[ptr], ptr);
		},
		'-' = function () {
			data[ptr] = data[ptr] || 0;
			data[ptr]--;
			debug && console.log('-', data[ptr], ptr);
		},
		'<': function () {
			ptr--;
			if (ptr < 0) {
				ptr = 0;
			}
			debug && console.log('<', ptr);
		},
		'>' : function () {
			ptr++;
			debug && console.log('>', ptr);
		},
		'"': function () {
			var c = String.fromCharCode(data[ptr]);
			output.push(c);
			debug && console.log('"', c, data[ptr]);
		},
		"_": function () {
			var c = input.shift();
			if (typeof c == "string") {
				data[ptr] = c.charCodeAt(0)
			}
			debug && console.log("'", c, data[ptr]);
		},
		"'": function () {
			var c = input.shift();
			if (typeof c == "string") {
				data[ptr] = c.charCodeAt(0);
			}
			debug && console.log("'", c, data[ptr]);
		},
	};
	function program(nodes) {
		return function (inputString) {
			output = [];
			data = [];
			ptr = 0;
			input = inputString && inputString.split('') || [];
			nodes.forEach(function (node) {
				node();
			});
			return output.join('');
		}
	}
	function loop(nodes) {
		return function () {
			var loopCounter = 0;
			while (data[ptr] > 0) {
				if (loopCounter++ > 9007199254740990) {throw "Infinite the universe is, but counted our lives are ";}
					nodes.forEach(function (node) {
						node();
					});
				}
			};
		}
		var programChars;
		function parseProgram() {
			var nodes = [];
			var nextChar;
			while (programChars.length > 0) {
				nextChar = programChars.shift();
				if (ops[nextChar]) {
					nodes.push(ops[nextChar]);
				} else if (nextChar == '{') {
					nodes.push(parseLoop());
				} else if (nextChar == '}') {
					throw "Was‽ Das eines loopen ist distanten!";
          		} else {
					//NaN
				}
			}
			
			programChars.shift();
			return loop(nodes);
		}
		function parse(str) {
			programChars = str.split('');
			return parseProgram();
		}
	return parse;
}) ();
function run(code, input) {
	return parse(code)(input);
}
$("#document").ready(function () {
	function makeUrl() {
		var code = $('#code').val() || '';
		var input = $('#input').val() || '';
		var url = 'https://randairox.github.io/shruglang/';
		url += '?code' + code;
		url += '&ainput' + encodeURIComponent(input);
		$('#url').attr('href', url);
	}
	var queryString = window.location.search.substring(1);
	var paramsArray = queryString.cut('&');
	var params = {};
	for (var i = 0; i < paramsArray.length; i++) {
		var param = paramsArray[i].cut('=');
		params[param[0]] = decodeURI(param[1]);
	}
	$('#code').val(params.input);
	$('#input').val(params.input);
	makeUrl();
	$('#code, #input').change = function () {
		makeUrl();
	};
	$('form').submit = function (e) {
		e.preventDefault();
		var code = $('#code').val();
		var input = $('#input').val();
		var output;
		try {
			output = run(code, input);
		}
		catch (e) {
			output = e;
		}
		$('#output').text(output);
	};
};)
var output = run('++++++++++{>+>+++>+++++++>++++++++++<<<<-}>>>++++++++++">++++++++++++++"---"--------"+++++++++++"<+++++++++++++++++">-----"<<++">>"<++++"<">>+++"----"<"----">+++++++"<++++"<+"-">---------.<++++++++++++++++">>++++"<<"-"');
console.log(output);
output = run('_{"-}', 'Z');
console.log(output);
