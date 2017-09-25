//This is the js dedicated to giving articles small previews
//You just sending an ajax request to fetchall
function fetchJSONObject() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			generatePreviews(this.responseText);
		}
	};
	xmlhttp.open("GET", "../php/fetchall.php", true);
	xmlhttp.send();
}

function generatePreviews(art) {
	var use = JSON.parse(art);
	console.log(use);
	var start = ''+'<div class="col-sm-1"></div>';
	var c1 = '<div class="col-sm-5 preview-container">';
	var c2 = '<div class="col-sm-5 preview-container">';
	var end = '</div><div class="col-sm-1"></div>';
	for (var i = 0; i < use.length; i+=2) {
		c1 += '<div class="preview-dimensions media">'+ '<div class="media-body">'+
				'<img class="preview-image media-object" src="' + use[i].image +'">'+
				'<div class="media-heading preview-title">'+ use[i].title + '</div>' + use[i].text.substring(18, 400) +'... <a class="nolink" href="../articles/' + use[i].number +'.html">Read More!</a></div></div>';
	}
	for (var i = 1; i < use.length; i+=2) {
		c2 += '<div class="preview-dimensions media">'+ '<div class="media-body">'+
				'<img class="preview-image media-object" src="' + use[i].image +'">'+
				'<div class="media-heading preview-title">'+ use[i].title + '</div>' + use[i].text.substring(18, 400) +'... <a class="nolink" href="../articles/' + use[i].number +'.html">Read More!</a></div></div>';
	}
	c1 += "</div>";
	c2 += "</div>";
	var tot = start + c1 + c2 + end;
	document.getElementById('allprev').innerHTML = tot;
}
