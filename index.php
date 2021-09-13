<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>app</title>
	<link rel="stylesheet" href="assets/css/all.css">
	<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
	<div class="container" style="margin-top: 20px;">
		<div class="row">
			<textarea name="f_sheepPen" id="f_sheepPen" class="textarea col-6" rows="8"></textarea>
			<textarea name="s_sheepPen" id="s_sheepPen" class="textarea col-6" rows="8"></textarea>
		</div>
		<div class="row">
			<textarea name="t_sheepPen" id="t_sheepPen" class="textarea col-6" rows="8"></textarea>
			<textarea name="fo_sheepPen" id="fo_sheepPen" class="textarea col-6" rows="8"></textarea>
		</div>
		<br>
		<br>
		<select name="cmpt" id="cmpt">
			<option value="add">Add sheep</option>
			<option value="change">Change sheep</option>
			<option value="delete">Delete sheep</option>
		</select>
		<input type="text" placeholder="/13 to 1">
		<br>
		<br>
		<button class="button" onclick="update()">Обновить</button>
		<button class="button" onclick="murder_sheeps()">Зарубить овечек</button>
		<br>
		<br>
		<label for="timer">Timer</label>
		<input type="text" name="timer" id="timer" value="0" disabled="">
		<br>
		<br>
		<label for="dayCount">Day count</label>
		<input type="text" name="dayCount" id="dayCount" value="1" >
	</div>
	<script src="assets/js/app.js"></script>
</body>
</html>