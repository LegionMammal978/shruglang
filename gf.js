var idk = (function () {
  var input;
  var output;
  var data;
  var ptr;
		var debug = false;
		var ops = {
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
												if (loopCounter++ > 0xf) {throw "Infinite the universe is, but counted our lives are ";}
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
