<?php
//The purpose of this file is to make an update to add an article to the table
//Gather the parameters
$number = $_REQUEST["n"];
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
//Generate the SQL
$dbname = "articles";
$sql = "UPDATE " . $dbname . " SET title=\"" . $title . "\", author=\"" . $author . "\", image=\"" . $image . "\", text=\"" . $text . "\" WHERE number=" . $number;
//POST
if ($conn->query($sql) === TRUE) {
}
else {
    echo "Error: " . $sql . "<br>" . $conn->error; //Error checking
}
$conn->close();
//echo $sql;
header("Location: modify.html");
 ?>
