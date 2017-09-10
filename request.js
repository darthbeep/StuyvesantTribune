//Accesses a specific article
function requestArticle(key) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			returnData(this.responseText, key);
			//document.getElementById("article").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "fetchall.php", true);
	xmlhttp.send();
}

function returnData(tolist, key) {
	var list = JSON.parse(tolist);
	for (var i = 0; i < list.length; i++) {
		if (list[i].number == key) {
			createEditForm(list[i]);
		}
	}
}

//Like above but for normal articles
function setupSpecificArticle(key) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			continueData(this.responseText, key);
			//document.getElementById("article").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET", "../fetchall.php", true);
	xmlhttp.send();
}

function continueData(tolist, key) {
	var list = JSON.parse(tolist);
	for (var i = 0; i < list.length; i++) {
		if (list[i].number == key) {
			displayArticle(list[i]);
		}
	}
}

//Acccess and returns all articles from database
function requestArticleDispatch() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText.innerHTML);
			//return this.responseText;
			console.log("hi");
			useData(this.responseText);
		}
	};
	xmlhttp.open("GET", "fetchall.php", true);
	xmlhttp.send();
}

//Adds article to database
function postArticle(title, author, image, text) {
	var x = new XMLHttpRequest();
	x.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("article").innerHTML = this.responseText;
		}
	}
	x.open("GET", "update.php?ti=" + title +"&a=" + author + "&i=" + image + "&te=" + text);
	x.send();
}
