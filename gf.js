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
