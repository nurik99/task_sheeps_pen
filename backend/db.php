<?php
session_start();
$db = mysqli_connect('localhost', 'root', 'root', 'sheeps');

if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// else{
// 	print('success!');
// }

?>