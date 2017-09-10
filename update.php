<?php
//The purpose of this file is to make an update to add an article to the table
//Gather the parameters
$title = $_REQUEST["ti"];
$author = $_REQUEST["a"];
$image = $_REQUEST["i"];
$text = $_REQUEST["te"];
$text = trim(preg_replace('/(\r\n)+/', '<br>&emsp;&emsp;&emsp;', $text));
$text = trim(preg_replace('/\s+/', ' ', $text));
$text = "&emsp;&emsp;&emsp;" . $text;
//Create connection
$host = "localhost";
$user = "root";
$password = "password";
$database = "politique";
$conn = new mysqli($host, $user, $password, $database);
//Get the number
$retrieve = "SELECT number FROM articles";
$retres = $conn->query($retrieve);
$numdet = -1;
if ($retres->num_rows > 0) {
	while ($row = $retres->fetch_assoc()) {
		$numdet = max($numdet, $row["number"]);
	}
}
$numdet +=1;
//Generate the SQL
$dbname = "articles";
$sql = "INSERT INTO " . $dbname . " (number, title, author, image, text) VALUES ('". $numdet . "', '" . $title . "', '" . $author . "', '" . $image . "', '" . $text . "')";
//POST
if ($conn->query($sql) === TRUE) {
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error; //Error checking
}
$conn->close();
//create the page
$aurl = "articles/" . $numdet . ".html";
$myfile = fopen($aurl, "w") or die("unable to open file");
$filetext = "<!DOCTYPE html><html><head><meta charset='utf-8'><title>Politique</title><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script><script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script><script src='../request.js' charset='utf-8'></script><link rel='stylesheet' href='../main.css'><script src='../masthead.js' charset='utf-8'></script><script src='../article.js' charset='utf-8'></script><link href='https://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet'></head><body><div id='setup'></div></body><script type='text/javascript'>setupTopArticle();setupSpecificArticle(" . $numdet . ");</script></html>";
fwrite($myfile, $filetext);
fclose($myfile);
header("Location: upload.html");
 ?>
