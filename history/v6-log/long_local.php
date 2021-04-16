<?php

date_default_timezone_set("Asia/Ho_Chi_Minh");

/*
$db = new SQLite3('test.db');

$db->exec("CREATE TABLE cars(id INTEGER PRIMARY KEY, name TEXT, price INT)");
$db->exec("INSERT INTO cars(name, price) VALUES('Audi', 52642)");
$db->exec("INSERT INTO cars(name, price) VALUES('Mercedes', 57127)");
$db->exec("INSERT INTO cars(name, price) VALUES('Skoda', 9000)");
$db->exec("INSERT INTO cars(name, price) VALUES('Volvo', 29000)");
$db->exec("INSERT INTO cars(name, price) VALUES('Bentley', 350000)");
$db->exec("INSERT INTO cars(name, price) VALUES('Citroen', 21000)");
$db->exec("INSERT INTO cars(name, price) VALUES('Hummer', 41400)");
$db->exec("INSERT INTO cars(name, price) VALUES('Volkswagen', 21600)");
*/



function cors() {
    
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header('HTTP/1.1 200');
    
    //echo "You have CORS!";
}
cors();


$servername = "194.59.164.2";
$username = "u327570649_remote";
$password = "@R9W~VEWnTp";
$dbname = "u327570649_remote";

// $servername = "localhost";
// $username = "chau";
// $password = "123456";
// $dbname = "trade_2021";

$dsn = "mysql:host=$servername;dbname=$dbname";


$GLOBALS['db'] = new PDO($dsn, $username, $password);

//$GLOBALS['db'] = new SQLite3($file_save);



// $idDevice = getSetDevice();
// $idLog = logevent($idDevice);
// logRequest($idLog);

saveLogData();

function saveLogData(){
	$data = $_POST;
	if(!isset($data['v'])){
		die;
	}
	$encodedData = str_replace(' ','+',$data['v']);
	$str = base64_decode($encodedData);
	//var_dump($str);
	$arra =json_decode($str, true);

	$timeServer = date("Y/m/d h:i:sa");

	foreach($arra as $value){
		//var_dump($value);

		// var_dump($value);
		$session = $value['session'];//session/9
		$openPrice = $value['openPrice'];//openPrice/1
		$closePrice = $value['closePrice'];//closePrice/4
		$isBetSession = ($value['isBetSession']==true)?1:0;//isBetSession/8
		$createDateTime = date("Y-m-d H:i:s", $value['createDateTime']/1000);//createDateTime/6
		

		$query = "INSERT INTO `tb_log_prices` (`session`, `isBetSession`, `openPrice`, `closePrice`,  `createDateTime`, `date_add`) 
		VALUES ('$session' , '$isBetSession', '$openPrice', '$closePrice', '$createDateTime', '$timeServer');";	

		$GLOBALS['db']->exec($query);


		// $session = $value['session'];
		// $openPrice = $value['openPrice'];
		// $closePrice = $value['closePrice'];
		// $isBetSession = ($value['isBetSession']==true)?1:0;
		// $createDateTime = date("Y-m-d H:i:s", $value['createDateTime']/1000);

		// $timeServer = date("Y/m/d h:i:sa");
		// $GLOBALS['db']->exec("INSERT INTO `tb_log_prices` (`session`, `isBetSession`, `openPrice`, `closePrice`,  `createDateTime`, `date_add`) 
		// VALUES ('$session' , '$isBetSession', '$openPrice', '$closePrice', '$createDateTime', '$timeServer');");
		// echo 'run';
		// $GLOBALS['db']->commit();
	}
	
	//echo 'run';
	//$timeServer = time();
	// $timeServer = date("Y/m/d h:i:sa");
	$GLOBALS['db']->exec("INSERT INTO `tb_log_prices_json` (`date_add`, `json`) VALUES ('$timeServer', '$str');");
	// $GLOBALS['db']->commit();
	// $idData = $GLOBALS['db']->lastInsertId();



	//var_dump($arr);die;
}

function getSetDevice(){
	$ip = getUserIP();
	$device = $_SERVER['HTTP_USER_AGENT'];
	$query = "SELECT * FROM `tb_device` WHERE `ip` = '$ip' AND `info_device` = '$device' LIMIT 1";
	//var_dump($query);die;
	$res = $GLOBALS['db']->query($query);
	$idDevice = '';
	//$rows = $stm->fetchAll(PDO::FETCH_NUM);

	foreach($res->fetchAll(PDO::FETCH_ASSOC) as $row) {
		$idDevice = $row['id'];
	}
	if($idDevice ==''){
		//save device
		$GLOBALS['db']->exec("INSERT INTO `tb_device` (`ip`, `info_device`) VALUES ('$ip', '$device');");
		$idDevice = $GLOBALS['db']->lastInsertId();
	}
	return $idDevice;
	//var_dump($idDevice);
	//var_dump($device);
	//die;
}

function logevent($idDevice=''){
	$data = $_POST;
	if(!isset($data['v'])){
		die;
	}
	//var_dump($data['v']);
	//$str = base64_decode($data['v']);
	$encodedData = str_replace(' ','+',$data['v']);
	$str = base64_decode($encodedData);
	//var_dump($str);
	$arr =json_decode($str, true);
	//var_dump($arr);die;

	$id_device = $idDevice;
	//$version = isset($arr['version'])?$arr['version']:'';
	$way = isset($arr['way'])?$arr['way']:'0';
	$user = isset($arr['user'])?$arr['user']:'';
	$is_win = isset($arr['is_win'])?$arr['is_win']:0;
	$is_win = ($is_win)?1:0;
	
	$logdata = $arr['log'];
	$numberFalse = isset($logdata['numberFalse'])?$logdata['numberFalse']:'';
	$lastPrices = isset($logdata['lastPrices'])?$logdata['lastPrices']:'';
	
	$money = isset($logdata['account'])?$logdata['account']:'0';
	
	$time = date("Y/m/d h:i:sa");
	$log = $str;
	//$request = json_encode($data);
	$query = "INSERT INTO `tb_logs` (`id_device`, `numberFalse`, `lastPrices`, `money`, `way`, `is_win`, `time`, `log`, `user`) VALUES ('$id_device', '$numberFalse', '$lastPrices', '$money', '$way', '$is_win', '$time', '$log', '$user');";
	//var_dump($query);die;
	$GLOBALS['db']->exec($query);
	return $GLOBALS['db']->lastInsertId();
	//$idDevice = $GLOBALS['db']->lastInsertRowID();
}

function logRequest($idLog=''){
	$data = $_POST;
	$request = json_encode($data);
	$query = "INSERT INTO `tb_request` (`id_log`, `request`) VALUES ('$idLog', '$request');";
	//var_dump($query);die;
	$GLOBALS['db']->exec($query);
}

// Function to get the user IP address
function getUserIP() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
