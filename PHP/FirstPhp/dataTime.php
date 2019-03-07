<?php

	//1.代码设置时区
	// date_default_timezone_set('PRC');
	//2.通过配置文件设置时区


	echo time();
	echo "<br>";

	//默认时间戳获取的是格林威治时间
	// echo date('Y-m-d H:i:s',time());


	//处理一直格式的时间
	$str = date('Y-m-d H:i:s',time());
	$timestamp = strtotime($str);
	echo date('Y年m月d日 <b\r> H时i分秒',$timestamp);

 ?>