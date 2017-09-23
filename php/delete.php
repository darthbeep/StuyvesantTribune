<?php
$id = $_REQUEST["number"];

$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "politique";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM articles WHERE number=" . $id;
echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    //echo "Error deleting record: " . $conn->error;
}

$conn->close;
//header("Location: modify.html");
header("Refresh:0");

 ?>
