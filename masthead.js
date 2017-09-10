function addMasthead() {
	var m = ''+
'<div class="col-sm-2"></div>'+ "<div class='row'>" +
		'<div class="col-sm-4 mhtext">'+
			'Editor In Chief: Melissa Hinckly'+
		'</div>'+
		'<div class="col-sm-4 mhtext">'+
			'Web Editor: Shaina Peters'+
		'</div>'+
		'<div class="col-sm-2"></div></div>';
	/*'<div id="masthead" class="row">'+
		'<div class="col-sm-2"></div>'+
		'<div class="col-sm-4 mhtext">'+
			'Junior Editor In Chief: Chloe Hanson'+
		'</div>'+
		'<div class="col-sm-4 mhtext">'+
			'Web Editor: Shaina Peters'+
		'</div>'+
		'<div class="col-sm-2"></div>'+
	'</div>';*/
	document.getElementById("masthead").innerHTML = m;
}

//Sets up the heading with room to add an article
function setupTopArticle() {
	var t = ''+
'<div id="header">The Stuyvesant Tribune</div>'+
	'<div id="masthead"></div><br>'+
	'<div id="article">'+
		'<div class="col-sm-2"></div>'+
		'<div class="col-sm-8">'+
			'<div class="title"></div>'+
			'<div class="author"></div>'+
			'<div class="textwrap"></div>'+
		'</div>'+
		'<div class="col-sm-2"></div>'+
	'</div>';
	document.getElementById("setup").innerHTML = t;
	addMasthead();
}

//Sets up the heading with room to customize
function setupTop() {
	var t = ''+
'<div id="header">The Stuyvesant Tribune</div>'+
	'<div id="masthead"></div>'+
	'</div>';
	document.getElementById("setup").innerHTML = t;
	addMasthead();
}
