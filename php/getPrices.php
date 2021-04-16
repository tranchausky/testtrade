<meta http-equiv="refresh" content="3">
<?php

$prices = getPrices();
$compressed = gzdecode($prices);
//echo $compressed;

print_r($compressed);

function getPrices(){
	
	$url="https://wefinex.net/api/wallet/binaryoption/prices"; 



// Open the file
$filename = 'cook_prices.txt';
$fp = @fopen($filename, 'r'); 

// Add each line to an array
if ($fp) {
   $headers = explode("\n", fread($fp, filesize($filename)));
}
//var_dump($array);die;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	//curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

	//curl_setopt($ch, CURLOPT_COOKIEJAR, 'cook_prices.txt');
	//curl_setopt($ch, CURLOPT_COOKIEFILE, 'cook_prices.txt');

curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt ($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"); 

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);


	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
	//curl_setopt($ch, CURLOPT_POST,1 );
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt ($ch, CURLOPT_COOKIESESSION, TRUE);
	curl_setopt($ch, CURLINFO_HEADER_OUT, true);

	//curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

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