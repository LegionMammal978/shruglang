var parse = (function () {
  var input;
  var output;
  var data;
  var ptr;
  var i;
  var stp = 0;
  var ll = true;
  var debug = false;

  var ops = {
    '+': function () {
      data[ptr] = data[ptr] || 0;
      data[ptr] += 1;
      debug && console.log('+', data[ptr], ptr);
    },

    '-': function () {
      data[ptr] = data[ptr] || 0;
      data[ptr] -= 1;
      debug && console.log('-', data[ptr], ptr);
    },

    '\\': function () {
      ptr -= 1;
      if (ptr < 0) {
        ptr = 0; //Don't allow pointer to leave data array
      }
      debug && console.log('\\', ptr);
    },

    '/': function () {
      ptr += 1;
      debug && console.log('/', ptr);
    },

    '$': function () {
      var c = String.fromCharCode(data[ptr]);
      output.push(c);
      debug && console.log('$', c, data[ptr]);
    },

    '_': function () {
      var c = input.shift();
      if (typeof c == "string") {
        data[ptr] = c.charCodeAt(0);
      }
      debug && console.log('_', c, data[ptr]);
    },
    '@': function(){
      while (ptr >= 0) {
        data[ptr] = 0;
        ptr -= 1;
      }
    },
    '#': () => setTimeout(function(){stp += 1;}, 1000),
    '%': function(){
      var luck_num = Math.floor(Math.random()*(401));
      if (luck_num <= 200 && luck_num > 100) {
				output.push("`-.        .-\u00B4.\r\n                                    `-.    -.\/\\.-    .-\u00B4\r\n                                        -.  \/_|\\  .-\r\n                                    `-.   `\/____\\\u00B4   .-\u00B4.\r\n                                 `-.    -.\/.-\/\\-.\\.-      \u00B4\r\n                                    `-.  \/<  XM  >\\  .-\u00B4\r\n                                  -   .`\/__`-..-\u00B4__\\\u00B4   .-\r\n                                ,...`-.\/___|____|___\\.-\u00B4.,.\r\n                                   ,-\u00B4   ,` . . \u00B4,   `-,\r\n                                ,-\u00B4   ________________  `-,\r\n                                   ,\u00B4\/____|_____|_____\\\r\n                                  \/ \/__|_____|_____|___\\\r\n                                 \/ \/|>_____|____|_____|_\\\r\n                                \u00B4 \/____|_____8_____|_____\\\r\n                              .\u00B4 \/__|_____|_____|_____|___\\\r\n                             ,\u00B4 \/|_____|_____|_____|_____|_\\\r\n                            \/..\/____|_____|_____|_____0_____\\ \r\n                           \u00B4..\/__|_____|_____|_____|_____|___\\\r\n      \\    )              \u00B4.:\/|_____|_____|_____|_____|_____|_\\               (    \/\r\n      )\\  \/ )           ,\u00B4:.\/____|_____|_____9_____|_____|_____\\             ( \\  \/(\r\n     \/ \/ ( (           \/:..\/__|_____|_____|_____|_____|_____|___\\             ) ) \\ \\\r\n    | |   \\ \\         \u00B4...\/|_____|_____|____|_____|__|_____|_____\\           \/ \/   | |\r\n .-.\\ \\    \\ \\       \/..:\/____|_____<||>_____|_____|_____|_____|__\\         \/ \/    \/ \/.-.\r\n(=  )\\ `._.\u00B4 |       \\:.\/ _  _ ___  ____ ____ _    _ _ _ _ _  _ ___\\       | `._.\u00B4 \/(  =)\r\n \\ (_)       )        \\.\/  |  | |__  |___ |___ |___ |_| ___  |  _|_ \\      (       (_)  \/\r\n  \\    `----\u00B4         \u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4\u00B4       `----\u00B4    \/\r\n   \\   ____\\__         __ __    _  __ _  __  __  ___  _      _        __     \/____ \/  \/\r\n    \\ (=\\     \\       (_ |_ |V||_)|_ |_)  \\  \/ |\/  __ | |   \/_\\ |\\ | (_     \/     \/-)\/\r\n     \\_)_\\     \\      __)|__| ||  |__| \\   \\\/  |\\___\/ | |__\/   \\| \\| __)   \/     \/_(\/\r\n          \\     \\                                                         \/     \/\r\n           )     )  _                                                _   (     (\r\n          (     (,-\u00B4 `-..__                                    __..-\u00B4 `-, )     )\r\n           \\_.-\u00B4\u00B4          ``-..____                  ____..-\u00B4\u00B4          ``-._\/\r\n            `-._                    ``--...____...--\u00B4\u00B4                    _.-\u00B4\r\n                `-.._                    Let them wait               _..-\u00B4\r\n                     `-..__            and enlightenment       __..-\u00B4\r\n                           ``-..____      shall come  ____..-\u00B4\u00B4\r\n                                    ``--...____...--\u00B4\u00B4");
				//BTW, many of this are just for fun;
			} else if (luck_num <= 300 && luck_num >= 200) {
				var conTrr = $('body').createElement("IMG");
				conTrr.attrib('src', 'style/imgs/gl17ch.gif');
			}
			else if (luck_num <= 10) {
				var igniTer = $('body').createElement("IFRAME");
				igniTer.attrib('src', 'http://ondras.zarovi.cz/demos/rubik/index.html');
			} else {
				//I have no idea
ll = true;
			}
    }
  };

  function program(nodes) {
    return function (inputString) {
      output = [];
      data = [];
      ptr = 0;

      input = inputString && inputString.split('') || [];

      nodes.forEach(function(node){node();});

      return output.join('');
    };
  }

  function loop(nodes) {
    return function () {
      var loopCounter = 0;

      while(data[ptr] > 0) {
        if ((loopCounter + 1) > 10000) { throw "Infinite loop detected"; }

        nodes.forEach(function(node){node();});
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
        throw "Missing opening bracket";
      } else {
        // ignore it
ll = true;
      }
    }

    return program(nodes);
  }

  function parseLoop() {
    var nodes = [];
    var nextChar;

    while (programChars[0] != '}') {
      nextChar = programChars.shift();
      if (nextChar == undefined) {
        throw "Missing closing bracket";
      } else if (ops[nextChar]) {
        nodes.push(ops[nextChar]);
      } else if (nextChar == '{') {
        nodes.push(parseLoop());
      } else {
        // ignore it
ll = true;
      }
    }
    programChars.shift(); //discard '}'

    return loop(nodes);
  }

  function parse(str) {
    programChars = str.split('');
    return parseProgram();
  }

  return parse;
})();


function run(code, input) {
  return parse(code)(input);
}


$(document).ready(function () {
  function makeUrl() {
    var code = $('#code').val() || '';
    var input = $('#input').val() || '';
    var url = '//randairox.github.io/shruglang/';
    url += '?code=' + code;
    url += '&input=' + encodeURIComponent(input);
    $('#url').attr('href', url);
  }

  var queryString = window.location.search.substring(1);
  var paramsArray = queryString.split('&');
  var params = {};
  for (i = 0; i < paramsArray.length; i += 1) {
    var param = paramsArray[i].split('=');
    params[param[0]] = decodeURI(param[1]);
  }

  $('#code').val(params.code);
  $('#input').val(params.input);
  makeUrl();


  $('#code, #input').change(function () {
    makeUrl();
  });

  $('form').submit(function (e) {
    e.preventDefault();
    var code = $('#code').val();
    var input = $('#input').val();
    var output;
    try {
      output = run(code, input);
    }
    catch (e) {
      output = e;
      console.log(e);
    }
    document.getElementById('output').innerHTML = output;
    typeof output !== TypeError ? (()=>{}) : console.log(output);
  });
});

var output = run('++++++++++{\/+++++++\/++++++++++\/+++\/+\\\\\\\\-}\/++$\/+$+++++++$$+++$\/++$\\\\+++++++++++++++$\/$+++$------$--------$\/+$\/$');
console.log(output);
output = run('_{$-}', 'Z');
console.log(output);
