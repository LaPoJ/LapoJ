<?php
	//用于接受 URL 地址中的提交数据（一般是 GET 提交的数据）
	var_dump($_POST['username']);
	echo "<br>";

	//$_POST 用于接受 请求体 中提交的数据（一般是 POST 提交的数据）
	//var_dump($_POST);
	echo "<br>";

	// $_REQUEST = $_GET + $_POST
	var_dump($_REQUEST);

 ?>