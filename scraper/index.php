<?php

$api_url = 'https://tools.uplift.art:3033/v1/world/info/drip-leaderboard';
$json_data = file_get_contents($api_url);
$response_data = json_decode($json_data);
$json = json_encode(array('data' => $response_data));

//write json to file
if (file_put_contents("burnleaders.json", $json, JSON_PRETTY_PRINT))
echo "Burn Lederboard JSON file created successfully...<br>";
else
echo "Oops! Error creating json file...";

$api_url2 = 'https://tools.uplift.art:3033/v1/world/info/upliftium';
$json_data2 = file_get_contents($api_url2);
$response_data2 = json_decode($json_data2);
$json2 = json_encode(array('data' => $response_data2));

//write json to file
if (file_put_contents("upliftium.json", $json2, JSON_PRETTY_PRINT))
echo "Upliftium Stats JSON file created successfully...<br>";
else
echo "Oops! Error creating json file...";

$api_url3 = 'https://tools.uplift.art:3033/v1/world/info/orders';
$json_data3 = file_get_contents($api_url3);
$response_data3 = json_decode($json_data3);
$json3 = json_encode(array('data' => $response_data3));

//write json to file
if (file_put_contents("orders.json", $json3, JSON_PRETTY_PRINT))
echo "Crystaize Upliftium Orders file created successfully...<br>";
else
echo "Oops! Error creating json file...";
?>
