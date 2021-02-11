<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once 'Medoo.php';

use Medoo\Medoo;


$GLOBALS['database'] =[];
$GLOBALS['database']['mysql'] ='mysql';
$GLOBALS['database']['port'] =3306;
$GLOBALS['database']['database_name'] ='heroku_70bfc511ebb62d1';
$GLOBALS['database']['server'] ='us-cdbr-east-03.cleardb.com';
$GLOBALS['database']['username'] ='b3ed1b424d4edd';
$GLOBALS['database']['password'] ='defef1da';


$database = new Medoo([
	'database_type' => $GLOBALS['database']['mysql'],
	'database_name' => $GLOBALS['database']['database_name'],
	'server' => $GLOBALS['database']['server'],
	'username' => $GLOBALS['database']['username'],
	'password' => $GLOBALS['database']['password'],
	'charset' => 'utf8mb4',
	'collation' => 'utf8mb4_general_ci',
	'port' => $GLOBALS['database']['port'],
]);

function getDataBase($database,$table,$where=null,$select=null){
	$table_default= $table;

	$select_default = [
		'id','link'
	];
	$where_default = [
		'status'=>'url',
		'LIMIT' => [0,100]
	];

	$select_default = $select;

	$where_default= $where;
	$data = $database->debug()->select($table_default, $select_default, $where_default);
	return $data;
}

function insertDataBase($database,$table,$datas){
	$table_default= $table;
	$info = $database->insert($table_default,$datas);
	return $info;
}

function updateDataBase($database,$table,$where,$data_save){
	$table_default= $table;
	$where_default = [
		'id'=>'1'
	];
	$where_default = $where;

	$data = $database->update($table_default, $data_save, $where_default);
	return $data;
}



$datas = getDataBase($database,'tb_logs',[],['id']);

var_dump($datas);
	