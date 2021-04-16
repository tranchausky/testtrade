<?php


function get_data($data){
	$str = implode(' ',$data);
	$str = urlencode($str);
	//$url="https://www.google.com/search?q=1964%2CMercedes%20Benz%2C300SE&tbm=isch&tbs=isz%3Al&hl=en&ved=0CAEQpwVqFwoTCODIyefisOoCFQAAAAAdAAAAABAC&biw=1902&bih=582"; 
	$url="https://wefinex.net/api/auth/auth/token"; 

//$cookie="cookie.txt"; 

$headers = array(
    'Sec-Fetch-Dest:empty',
    //'User-Agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
    'Sec-Fetch-Site:none',
    'Sec-Fetch-Mode:cors',
    'x-client-data:CIm2yQEIorbJAQjBtskBCImSygEIqZ3KAQibx8oBCOfIygEYm77KAQ==',
    'Cookie:CGIC=Inx0ZXh0L2h0bWwsYXBwbGljYXRpb24veGh0bWwreG1sLGFwcGxpY2F0aW9uL3htbDtxPTAuOSxpbWFnZS93ZWJwLGltYWdlL2FwbmcsKi8qO3E9MC44LGFwcGxpY2F0aW9uL3NpZ25lZC1leGNoYW5nZTt2PWIzO3E9MC45; OTZ=5504339_28_28__28_; COMPASS=calendar=CpoBAAlriVc4ILpRhwgYG8EfbB2QzwmKCsWSVpVtSVAJr5p55Yi2USsfGtjGcrDSEcbcsLAWCxo5IkzWJexAPZd4JxbKxdhlHlgSO9RwkVdQQiC0ObhjHEFKB8C1v30YedDZSCO-1aSc9KN9C5Xk092Ku3dKh1SFwckV61GsYGo8-N0cfsASLY9l2q0DkEPiXM5xjkptUi9DumdwlRCqh9D3BRqmAQAJa4lX6kWDh00c-y08AN5R65_JLJL4oAwH85JI6WRfitYvS1Itu7Ks9MVQJMx4kQW4ciAFE1gMrMpX3ySwazvKm5g7j8qj5T0eWeGeyStdXyS90US_d774RnHHcLW7RA_cijSBsLqggAGro6-6pC7uH_PotKfTjv9HnJfIOUtDvK2a27OID7T1qS4fLvJhJ5u8iU3aO8wYE8X8PXCQW-URNR1GnB4; SID=ywfQRvVlRXWrBOBZNw5C_THh5zDpv1G97jZysNfg7Rp2y_YJV0bxMOLl8s5mpQEcHdHEnQ.; __Secure-3PSID=ywfQRvVlRXWrBOBZNw5C_THh5zDpv1G97jZysNfg7Rp2y_YJs2CbLJBkBGxPu5AyAYTiNg.; HSID=A3tk8_ieWoZ5UKIbl; SSID=AIeF7eceW1L6Z1xlN; APISID=E55v6BQyCxO6ki1M/A2NU_c7vbJRebYODK; SAPISID=9931U2qA4LUKZWib/AY-GcaKy77t4HIYzJ; __Secure-HSID=A3tk8_ieWoZ5UKIbl; __Secure-SSID=AIeF7eceW1L6Z1xlN; __Secure-APISID=E55v6BQyCxO6ki1M/A2NU_c7vbJRebYODK; __Secure-3PAPISID=9931U2qA4LUKZWib/AY-GcaKy77t4HIYzJ; NID=204=Y_zLicMmzGdbLdqTWy-dX2wf-CZIcSP2hnHy7vZt1ixliLlo9AJmbpDQmeuKx-qOvDYkU46rlkRzA9bES8A5j-BLQH6i5KqOfH1dnamLvDrbUolPcMX4ABZaSnBhPxbZWBWPVm_jE0KbhWMqfQdugVeNPGcs63q-DbMnuLj_QF_29k89Ku8s-XUPcVTt_lvXnskjC-vSy1x8GOrXJ3lxQJgMFxZ1zcdR67HfiJV-n2H5DoHZzswanffMBreTPbv_YaXkCw; DV=M5Isz_t8COQfYPXf0FOdhZC3ujRAMRc; 1P_JAR=2020-7-3-9; SIDCC=AJi4QfEV7RcnwKUh3hVkhzwxax1a0mGdmN6agz2fTRa5suMrjWtENqmOKWGeX_F10nkYTqFhMw',
    //'Accept-Encoding:gzip, deflate, br',
);


$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"); 
//curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie);
curl_setopt ($ch, CURLOPT_COOKIESESSION, TRUE);
//curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie);
curl_setopt($ch, CURLINFO_HEADER_OUT, true);
//$headers_out = curl_getinfo($ch, CURLINFO_HEADER_OUT);

//curl_setopt ($ch, CURLOPT_HEADER, 1);

$output = curl_exec($ch);
$info = curl_getinfo($ch);
curl_close($ch);

//var_dump($info);
//var_dump($output);

//file_put_contents('file.txt',$output);

return $output;

}


$output = testWithCookie();
$arrOut = json_decode($output,true);
var_dump($arrOut);
$tocken =$arrOut['d']['access_token'];
print_r($tocken);

//$prices = getPrices();
//print_r($prices);


function testWithCookie(){
	
	$url="https://wefinex.net/api/auth/auth/token"; 
	
	$str = '{"client_id":"Botrade","grant_type":"refresh_token","refresh_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6IndlZmluZXgubmV0IiwidHlwIjoiSldUIn0.eyJ1aWQiOiIxNjEyMTkyOTA5MjEwIiwiZF9pZCI6IkJyb3dzZXIgb24gV2luZG93cyAxMC85OGEzMzc2Yi0wNmRhLTRmOTYtYmY4Yy1lNmZjMmM3MjViYWQiLCJlbWFpbCI6InRyYW5jaGF1MTk5MUBnbWFpbC5jb20iLCJzaWQiOiI5OGEzMzc2Yi0wNmRhLTRmOTYtYmY4Yy1lNmZjMmM3MjViYWQiLCJzeXN0ZW0iOiJCb3RyYWRlIiwiZXhwIjoxNjE0MjcyMTM1LCJpc3MiOiJ3ZWZpbmV4Lm5ldCIsImF1ZCI6IkJvdHJhZGUifQ.L3C-bOTD1Q6aDkL_N94HAoTmrXdo1PFZ7Xp8dX18xhI"}';
	//var_dump($str);
	$arr = json_decode($str,true);
	//var_dump($arr);
	//die;
	
	$strSend = json_encode($arr);
	
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "$url");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookies.txt');
	curl_setopt($ch, CURLOPT_COOKIEFILE, 'cookies.txt');
	
	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
	//curl_setopt($ch, CURLOPT_POST,1 );
	//curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	
	curl_setopt($ch, CURLOPT_POSTFIELDS,$strSend); 
	
	curl_setopt($ch, CURLOPT_HTTPHEADER,
		array(
			'Content-Type:application/json',
			'Content-Length: ' . strlen($strSend)
		)
	);

	$output = curl_exec($ch);
	$info = curl_getinfo($ch);
	
	if (curl_errno($ch)) {
		print curl_error($ch);
	}

	curl_close($ch);
	
	//var_dump($output);
	//var_dump($info);
	return $output;
}
function getPrices(){
	
	$url="https://wefinex.net/api/wallet/binaryoption/prices"; 

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "$url");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	curl_setopt($ch, CURLOPT_COOKIEJAR, 'cook_prices.txt');
	curl_setopt($ch, CURLOPT_COOKIEFILE, 'cook_prices.txt');

	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
	//curl_setopt($ch, CURLOPT_POST,1 );
	//curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

   //$authorization = "Authorization: Bearer ".$token; // Prepare the authorisation token
   //curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header

	//curl_setopt($ch, CURLOPT_POSTFIELDS,$strSend); 
	
	

	$output = curl_exec($ch);
	$info = curl_getinfo($ch);
	
	if (curl_errno($ch)) {
		print curl_error($ch);
	}

	curl_close($ch);
	
	//var_dump($output);
	var_dump($info);
	return $output;
}
