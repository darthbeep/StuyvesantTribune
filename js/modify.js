//Get the data for modification
function requestArticleModify() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			//console.log(this.responseText.innerHTML);
			//return this.responseText;
			//console.log(this.responseText);
			displayData(this.responseText);
		}
	};
	xmlhttp.open("GET", "../php/fetchall.php", true);
	xmlhttp.send();
}

function displayData(dat) {
	//console.log(dat);
	var use = JSON.parse(dat);
	var rows = "<tbody>"
	for (var i = 0; i < use.length; i++) {
		rows += "<tr>";
		rows += "<td>" + use[i].number + "</td>";
		rows += "<td>" + use[i].title + "</td>";
		rows += "<td>" + use[i].author + "</td>";
		rows += "<td>" + use[i].image + "</td>";
		rows += "<td>" + use[i].text + "</td>";
		rows += "<td><a href='../html/edit.html?id=" + use[i].number + "'><button class='nolink'>edit</button></a><br><button onclick='remove(" + use[i].number  +")'>delete</button></td>";
		rows += "</tr>";
	}
	rows += "</tbody>"
	document.getElementById('mod').innerHTML += rows;
}

function remove(key) {
	var x = new XMLHttpRequest();
	x.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	}
	x.open("GET", "../php/delete.php?number=" + key, true);
	x.send();
}
