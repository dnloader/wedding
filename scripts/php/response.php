<?php
include_once "SQL_connect.php";
$user = $_POST['user'];
$sql = "INSERT INTO guests(name)
        VALUES ('$user')";
$result = $connect->prepare($sql);
$result->execute();
$result->store_result();
$result->fetch();
$result->close();
$connect->close();
