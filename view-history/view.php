<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 700px;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<script>

function openpop(link) {
windowWidth = 800;
windowHeight = 720;
 var left = (screen.width - windowWidth) / 2;
	var top = (screen.height - windowHeight) / 4;
	var myWindow = window.open(link,'popup','width=' + windowWidth + ', height=' + windowHeight + ', top=' + top + ', left=' + left);
}

</script>

<h3>History list version</h3>

<?php

$path = '../version/';
$listVewsion = array_diff(scandir($path), array('.', '..'));
sort($listVewsion, SORT_NATURAL);

?>

<table>
  <tr>
    <th>Version</th>
    <th>WayRule.txt</th>
    <th>fileJs</th>
    <th>LastVersion</th>
  </tr>
  <?php foreach($listVewsion as $key=>$value){
	echo '<tr>';
    echo '<td>'.$value.'</td>';
	$link = $path.$value.'/wayrule.txt';
	//var_dump($link);die;
	$alink = '<a href="'.$link.'" target="popup"  onclick="openpop(&#39;'.$link.'&#39;)">ListRule</a>';
    echo '<td>'.$alink.'</td>';
	
	$linkJs = $path.$value.'/release.js';
	$alink = '<a href="'.$linkJs.'" target="popup"  onclick="openpop(&#39;'.$linkJs.'&#39;)">fileJs</a>';
    echo '<td>'.$alink.'</td>';
	echo '<td>'.getLastFile($linkJs).'</td>';
	echo '</tr>';
	
	
  }?>
  
</table>

<?php
function getLastFile($file){
	$code = file_get_contents($file);
	//print_r($code);
	//$lastfive = explode(" ", trim(preg_replace("/^([\s\S]+)(( ([^ ]+)){5})$/m", "$3", $code)));
	
	$file = file($file);
	for ($i = max(0, count($file)-1); $i < count($file); $i++) {
		return $file[$i];
	}
	return '';
}

?>