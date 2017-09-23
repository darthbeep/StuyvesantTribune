//Starts the ajax request for info
function setupFetch() {
	var all = requestArticleDispatch();
}

//Recives database data and aims to display it
function useData(all) {
	console.log(all);
	var f = all;//fixNewline(all);
	var use = JSON.parse(f);
	console.log(f + "notice me");
	for (var i = 0; i < use.length; i++) {
		displayArticle(use[i]);
	}
}

function fixNewline(all) {//Doesn't work, ignore
	var ret = "";
	console.log("help");
	for (var i = 0; i < all.length; i++) {
		if (all.substring(i,i+1) == "\n") {
			ret += "<br>";
		}
		else {
			ret += all.substring(i, i+1);
		}
	}
	console.log(ret)
	return ret;
}

//Takes in a JSON object representing the article, returns relevant HTML
function displayArticle(art) {
	console.log(ti + ":)");
	var ti = art.title;
	var a = art.author;
	var i = art.image;
	var te = art.text;
	var final = ''+
'<div class="col-sm-2"></div>'+
	'<div class="col-sm-8">'+
		'<div class="title">'+ti+'</div>'+
		'<div class="author">'+a+'</div>'+
		'<div class="textwrap">'+ '<img src="' + i+'" class="imdisp">' +te+'</div>'+
	'</div>'+
	'<div class="col-sm-2"></div>';
	document.getElementById("article").innerHTML = final;
	//console.log(a);
}
