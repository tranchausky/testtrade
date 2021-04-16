<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");

$data = '[{"lowPrice":57309.51,"session":991226,"isBetSession":false,"highPrice":57339.02,"openPrice":57329.77,"closePrice":57309.51,"baseVolume":6.290852,"orderClose":29,"createDateTime":1615628970837,"ordinal":29736780,"order":1,"timeStatic":1615628999490},{"lowPrice":57310.49,"session":991227,"isBetSession":true,"highPrice":57365.96,"openPrice":57309.51,"closePrice":57350.81,"baseVolume":10.900253,"orderClose":29,"createDateTime":1615629000840,"ordinal":29736810,"order":1,"timeStatic":1615629029663},{"lowPrice":57328.93,"session":991228,"isBetSession":false,"highPrice":57349.27,"openPrice":57350.81,"closePrice":57333.09,"baseVolume":9.051225,"orderClose":29,"createDateTime":1615629030843,"ordinal":29736840,"order":1,"timeStatic":1615629059692},{"lowPrice":57335.83,"session":991229,"isBetSession":true,"highPrice":57385.27,"openPrice":57333.09,"closePrice":57385.27,"baseVolume":14.236211,"orderClose":29,"createDateTime":1615629060840,"ordinal":29736870,"order":1,"timeStatic":1615629088860}]';

var_dump($data);
$arrr = json_decode($data,true);
// var_dump($arrr);
foreach ($arrr as $key => $value) {
    var_dump($value);
   echo  $timeFormart = date("Y-m-d H:i:s", $value['timeStatic']/1000);
}