<?php
$requestMethod = $_SERVER["REQUEST_METHOD"];
include('rest.php');
$api = new Rest();
switch($requestMethod) {
	case 'GET':
		$api->getAll();
		break;
	default:
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
?>