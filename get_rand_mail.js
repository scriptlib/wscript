// ==UserScript==
// @name           RandomFormFiller
// @namespace      xiaoranzzz
// @include        http://*/register.php*
// ==/UserScript==

function random_int(max,min) {
    max = max ? max : 100;
    min = min ? min : 0;
    return Math.floor((max-min-1)*Math.random()+min);
}
function random_name(length) {
    length = length ? length : random_int(12,10);
    var source = "aaaabcdeeeefghiiiiijklmnooooopqrstuuuuvwxyz";//ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var s_len = source.length;
    var result="";
    for(var i=0;i<length;i++) {
        result += source.substr(random_int(s_len-1,0),1);
    }
    return result;
}

function random_email(email) {
	var name = random_name(12);
	return name + "@" + email;
}

function confirm(text,title) {
    var sh = WScript.CreateObject("WScript.Shell");
    WScript.Echo(text);
    var bt = sh.Popup(text,5,"Confirm ?",69);
    if(bt == 4) {
        return true;
    }
    else {
        return false;
    }
}

var ws = WScript;
var args = ws.Arguments;


if(args.length>0) {
	for(var i=0;i<args.count;i++) {
        while(confirm(random_email(args.item[i]) + "\n\nGenerate next name?                  ")) {
            ;;
         }
	}
}
else {
        while(confirm(random_email("163.com") + "\n\nGenerate next name?                     ")) {
            ;;
         }
}

