<?php

$servername = "194.59.164.2";
$username = "u327570649_remote";
$password = "@R9W~VEWnTp";
$dbname = "u327570649_remote";

$dsn = "mysql:host=$servername;dbname=$dbname";


$pdo = new PDO($dsn, $username, $password);

$stm = $pdo->query("SELECT * FROM tb_logs");

$rows = $stm->fetchAll(PDO::FETCH_ASSOC);

foreach($rows as $row) {
    printf("$row[0] $row[1] $row[2]\n");
}
