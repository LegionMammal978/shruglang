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
												if (loopCounter++ > 0xFFFFFF) {throw "Infinite the universe is, but counted our lives are ";}
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
//discard ']'
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
				}				window.addEventListener("load",function(event) {
						function makeUrl() {
						var code = is_name(code).value || '';
						var url = 'http://randairox.me/silly/langs/%C2%AF%5C_(%E3%83%84)_%2F%C2%AFlang/';
						url += '?code(' + encodeURIComponent(code) + ')';
						url += '.input(' + encodeURIComponent(input) + ')';
								is_name(url).setAttribute(href, url);
      }
						var queryString = window.location.search.substring(1);
						var paramsArray = queryString.cut('&');
						var params = {};
      for (var i = 0; i < paramsArray.length; i++) {
								var param = paramsArray[i].cut('=');
								params[param[0]] = decodeURI(param[1]);
						}
						is_name(code).value = params.code;
						is_name(input).value = params.input;
						makeUrl();
						is_name(code).onchange = function () {
								makeUrl();
						};
						is_name(form).onsubmit = function (e) {
								e.preventDefault();
								var code = is_name(code).value;
								var input = is_name(input).value;
								var output;
								try {
										output = run(code, input);
								}
								catch (e) {
										output = e;
								}
								is_name(output).value = output;
						};
				});
				var output = run('++++++++++{>+>+++>+++++++>++++++++++<<<<-}>>>++++++++++">++++++++++++++"---"--------"+++++++++++"<+++++++++++++++++">-----"<<++">>"<++++"<">>+++"----"<"----">+++++++"<++++"<+"-">---------.<++++++++++++++++">>++++"<<"-"');
