<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>app</title>
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
	<link rel="stylesheet" href="assets/css/all.css">
</head>
<body>
	<div class="container" style="margin-top: 20px;">
		<label for="log">LOG </label>
		<br>
		<textarea name="log" id="log" cols="40" rows="10"></textarea>
		<br>
		<br>
		<button onclick="clean_log()">Clean Log</button>
		<br>
		<br>
		<label for="">общее количество овечек: </label>
		<div id="all_sheeps"></div>
		<br>
		<label for="">количество убитых овечек: </label>
		<div id="all_dead_sheeps"></div>
		<br>
		<label for="">количество живых овечек: </label>
		<div id="alive_sheeps"></div>
		<br>
		<label for="">номер самого населённого загона: </label>
		<div id="max"></div>
		<br>
		<label for="">номер самого менее населённого загона </label>
		<div id="min"></div>
	</div>
	
	<script src="assets/js/admin.js"></script>
</body>
</html>