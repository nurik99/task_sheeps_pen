<?php
include('db.php');
// start create sheeps
if($_SERVER['QUERY_STRING'] == 'start=1'){
	$sheeps_id = 1;
	$sheeps_gen_count = 10;
	$succes = $db->query("TRUNCATE TABLE `sheeps_list`");
	if(count($succes) == 0){
		// echo "wrong";
	}
	else{
		// echo "succes";
		for($i = 1; $i <= $sheeps_gen_count; $i++){
			$succes = $db->query("INSERT INTO `sheeps_list` (`name`) VALUES ('$sheeps_id')");
			$sheeps_id++;
		}
	}

}

// get data sheeps
if($_SERVER['QUERY_STRING'] == 'start_get=1'){

	$succes = $db->query("SELECT * FROM `sheeps_list`");
	$result = mysqli_fetch_all($succes);
	echo json_encode($result);
}

// post sheep
if(isset($_REQUEST['post'])){
	$count_result = $_REQUEST['post'];
	echo $_POST['post'];
	$succes = $db->query("INSERT INTO `sheeps_list` (`name`) VALUES ('$count_result')");
}

// post day
if(isset($_REQUEST['day'])){
	$day = $_REQUEST['day'];
	echo $_POST['day'];
	$succes = $db->query("UPDATE `day` SET day = '$day' WHERE id = 1");
}

// get day
if($_SERVER['QUERY_STRING'] == 'get_day=1'){
	$succes = $db->query("SELECT * FROM `day` WHERE id = 1");
	$result = mysqli_fetch_assoc($succes);
	echo json_encode($result);
}

// post log
if(isset($_REQUEST['log'])){
	$log = $_REQUEST['log'];
	echo $_POST['log'];
	$succes = $db->query("INSERT INTO `log` (`history`) VALUES ('$log')");
}

// post sheepPen list
if(isset($_REQUEST['post_sheepsPen'])){
	$mas1 = $_REQUEST['mas1'];
	$mas2 = $_REQUEST['mas2'];
	$mas3 = $_REQUEST['mas3'];
	$mas4 = $_REQUEST['mas4'];

	if(!empty($_REQUEST['mas1'])){
		$succes = $db->query("UPDATE `sheeps_pen_list` SET mas = '$mas1' WHERE id = 1");
	}
	if(!empty($_REQUEST['mas2'])){
		$succes = $db->query("UPDATE `sheeps_pen_list` SET mas = '$mas2' WHERE id = 2");
	}
	if(!empty($_REQUEST['mas3'])){
		$succes = $db->query("UPDATE `sheeps_pen_list` SET mas = '$mas3' WHERE id = 3");
	}
	if(!empty($_REQUEST['mas4'])){
		$succes = $db->query("UPDATE `sheeps_pen_list` SET mas = '$mas4' WHERE id = 4");
	}
}
//post dead sheeps list --dead_sheeps_list--
if(isset($_REQUEST['dead_sheeps_list_post'])){
	$dead_sheeps_list_post = $_REQUEST['dead_sheeps_list_post'];
	echo $_POST['dead_sheeps_list_post'];
	$succes = $db->query("INSERT INTO `dead_sheeps_list` (`name`) VALUES ('$dead_sheeps_list_post')");
}

// get all sheepPen list
if(isset($_REQUEST['get_all_sheepsPen'])){
	$succes = $db->query("SELECT * FROM `sheeps_pen_list`");
	// $result = mysqli_fetch_assoc($succes);
	$stack = array();
	while ($row = mysqli_fetch_assoc($succes)) {
		array_push($stack, $row);
        // echo json_encode($row);
    }
	echo json_encode($stack);
}

// get sheepPen list
if(isset($_REQUEST['get_sheepsPen'])){
	$succes = $db->query("SELECT * FROM `sheeps_pen_list` WHERE id = 1");
	$result = mysqli_fetch_assoc($succes);
	echo json_encode($result);
}
// all murder sheeps
if(isset($_REQUEST['muder_sheeps'])){
	$succes1 = $db->query("TRUNCATE TABLE `sheeps_list`");
	$succes2 = $db->query("UPDATE `sheeps_pen_list` SET mas = ''");
	echo $succes1;
	echo $succes2;
}
// admin panel

// get log
if(isset($_REQUEST['log_get'])){
	$succes = $db->query("SELECT * FROM `log`");
	$stack = array();
	while ($row = mysqli_fetch_assoc($succes)) {
		array_push($stack, $row);
    }
	echo json_encode($stack);
}
//clean log
if(isset($_REQUEST['log_clean'])){
	$succes1 = $db->query("TRUNCATE TABLE `log`");
	$succes2 = $db->query("TRUNCATE TABLE `dead_sheeps_list`");
}
// get sheeps list
if(isset($_REQUEST['sheeps_list_get'])){
	$succes = $db->query("SELECT * FROM `sheeps_list`");
	$stack = array();
	while ($row = mysqli_fetch_assoc($succes)) {
		array_push($stack, $row);
    }
	echo json_encode($stack);
}
//post dead sheeps list
if(isset($_REQUEST['dead_sheeps_list'])){
	$succes = $db->query("SELECT * FROM `dead_sheeps_list`");
	$stack = array();
	while ($row = mysqli_fetch_assoc($succes)) {
		array_push($stack, $row);
    }
	echo json_encode($stack);
}
// post max sheeps pen
if(isset($_REQUEST['max_sheeps_pen'])){
	$data = $_REQUEST['max_sheeps_pen'];
	$succes = $db->query("UPDATE `max_min_list` SET num = '$data' WHERE id=1");
	echo $succes;
}
// post min sheeps pen
if(isset($_REQUEST['min_sheeps_pen'])){
	$data = $_REQUEST['min_sheeps_pen'];
	$succes = $db->query("UPDATE `max_min_list` SET num = '$data' WHERE id=2");
	echo $succes;
}
// get max sheeps pen
if(isset($_REQUEST['get_max_sheeps_pen'])){
	$succes = $db->query("SELECT * FROM `max_min_list` WHERE id=1");
	$result = mysqli_fetch_assoc($succes);
	echo json_encode($result);
}
// get min sheeps pen
if(isset($_REQUEST['get_min_sheeps_pen'])){
	$succes = $db->query("SELECT * FROM `max_min_list` WHERE id=2");
	$result = mysqli_fetch_assoc($succes);
	echo json_encode($result);
}
?>