<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");

$servername = "localhost";
$username = "chau";
$password = "123456";
$dbname = "trade_2021";

$dsn = "mysql:host=$servername;dbname=$dbname";


$GLOBALS['db'] = new PDO($dsn, $username, $password);


$file = 'data_wefenex.json';
$string = file_get_contents($file);
$arra = json_decode($string,true);
//var_dump($arra['d']);
foreach($arra['d'] as $value){
	// var_dump($value);
	$session = $value['9'];//session
	$openPrice = $value['1'];//openPrice
	$closePrice = $value['4'];//closePrice
	$isBetSession = ($value['8']==true)?1:0;//isBetSession
	$createDateTime = date("Y-m-d H:i:s", $value['6']/1000);//createDateTime
	$timeServer = date("Y/m/d h:i:sa");

	$query = "INSERT INTO `tb_log_prices` (`session`, `isBetSession`, `openPrice`, `closePrice`,  `createDateTime`, `date_add`) 
	VALUES ('$session' , '$isBetSession', '$openPrice', '$closePrice', '$createDateTime', '$timeServer');";	

	$GLOBALS['db']->exec($query);
}

//0 //start time
//1  openPrice
//2 highPrice
//3 lowPrice
//4 closePrice
//5 baseVolume
//6 end time
//7
//8 isBetSession
//9 session only one