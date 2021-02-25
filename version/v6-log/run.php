<?php

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
cors()


$file_save = 'data.db';
if(!file_exists($file_save)){
	copy("test.db",$file_save);
}

$GLOBALS['db'] = new SQLite3($file_save);


$idDevice = getSetDevice();
logevent($idDevice);

function getSetDevice(){
	$ip = getUserIP();
	$device = $_SERVER['HTTP_USER_AGENT'];
	$query = "SELECT * FROM `tb_device` WHERE `ip` = '$ip' AND `info_device` = '$device' LIMIT 1";
	//var_dump($query);die;
	$res = $GLOBALS['db']->query($query);
	$idDevice = '';
	while ($row = $res->fetchArray()) {
		//var_dump($row);die;
		//echo "{$row['id']} {$row['name']} {$row['price']} \n";
		$idDevice = $row['id'];
	}
	if($idDevice ==''){
		//save device
		$GLOBALS['db']->exec("INSERT INTO `tb_device` (`ip`, `info_device`) VALUES ('$ip', '$device');");
		$idDevice = $GLOBALS['db']->lastInsertRowID();
	}
	return $idDevice;
	//var_dump($device);die;
}

function logevent($idDevice=''){
	$data = $_POST;
	if(!isset($data['v'])){
		die;
	}
	//var_dump($data['v']);
	$str = base64_decode($data['v']);
	//var_dump($str);
	$arr =json_decode($str, true);
	//var_dump($arr);die;
	//var_dump(base64_decode($value));
	//die;
	$id_device = $idDevice;
	$version = isset($arr['version'])?$arr['version']:'';
	$way = isset($arr['way'])?$arr['way']:'';
	$is_win = isset($arr['is_win'])?$arr['is_win']:'';
	date_default_timezone_set("Asia/Ho_Chi_Minh");
	$time = date("Y/m/d h:i:sa");
	$log = $str;
	$query = "INSERT INTO `tb_logs` (`id_device`, `version`, `way`, `is_win`, 'time', `log`) VALUES ('$id_device', '$version', '$way', '$is_win', '$time', '$log');";
	//var_dump($query);die;
	$GLOBALS['db']->exec($query);
	//$idDevice = $GLOBALS['db']->lastInsertRowID();
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
