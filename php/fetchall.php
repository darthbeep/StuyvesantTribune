<?php
//Create connection
$host = "localhost";
$user = "root";
$password = "password";
$database = "politique";
$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//access articles
$sql = "SELECT number, title, author, image, text FROM articles";
$result = $conn->query($sql);
//Make data returnable
$ret = "[";
if ($result->num_rows>0) {
	while ($row = $result->fetch_assoc()) {
		if ($ret!=="[") {
			$ret .= ",";
		}
		$ret .=  "{\"number\":\"" . $row["number"] . "\", \"title\":\"" . $row["title"] . "\", \"author\":\"" . $row["author"] . "\", \"image\":\"" . $row["image"] . "\", \"text\":\"" . $row["text"] . "\"}";
	}
}
$ret .= "]";
echo $ret;
$conn->close();
?>
