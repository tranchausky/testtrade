<?php

$data = '{"v":"eyJ3YXkiOiJkZGR4LT5kIiwiaXNfd2luIjpmYWxzZSwidmVyc2lvbiI6IiIsImxvZyI6eyJ0aW1lRm9yQnV5IjoyLCJ0aW1lU2V0UHJpY2UiOjQsInRpbWVTZXRIaXN0b3J5IjoxMCwia2V5QnV5IjoxLCJrZXlDaGVjayI6MCwib2xkIjo3OTYuNywibmV3Ijo3OTYuNywiZmlyc3QiOjc4NC42NSwiaXNfc2hvd19maXJzdCI6dHJ1ZSwidGltZV9vbGQiOiI4OjQxOjQyIEFNIiwidGltZV93aW4iOiIiLCJtYXhXaW4iOjUwLCJzdGF0dXMiOnsic2V0UHJpY2UiOjAsIkJ1aWxkIjowLCJzZXRIaXN0b3J5IjoxfSwid2F5Y2hvb3NlIjoiZGRkeC0 ZCIsImlzTGFzdFdpbiI6ZmFsc2V9fQ=="}';

$arr = json_decode($data,true);

var_dump($arr);


  $encodedData = str_replace(' ','+',$arr['v']);
  $decocedData = base64_decode($encodedData);


//$str = base64_decode($arr['v'],TRUE);
var_dump($decocedData);