//Stolen from stackoverflow
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function retrieveInfo() {
	var n = GetURLParameter('id');
	requestArticle(n);
	//return n;
}

function createEditForm(list) {
	console.log(list.title);
	var use = ''+
'<form class="formarea" action="edit.php?n=' + list.number+'" method="post">'+
		'<div class="formtext">'+
			'Title:'+
		'</div>'+
		'<input type="text" name="ti" value="'+ list.title +'">'+
		'<div class="formtext">'+
			'Author:'+
		'</div>'+
		'<input type="text" name="a" value="' + list.author +'">'+
		'<div class="formtext">'+
			'Image:'+
		'</div>'+
		'<input type="text" name="i" value="' + list.image +'">'+
		'<div class="formtext">'+
			'Article text:'+
		'</div>'+
		'<textarea name="te" rows="8" cols="80">'+list.text+'</textarea><br>'+
		'<input type="submit">'+
	'</form>';
	document.getElementById("edit").innerHTML = use;
}
