<?php


	//php 所有的能力都是函数，内置1000多函数；
	//获取字符串的长度

	$str = 'hello';

	echo strlen($str);

	echo "<br>";

	//中文字符串吧属于宽字符
	echo strlen('你好');

	echo "<br>";

	//PHP 中专门为 宽字符集 添加的一套API
	//这一套 API 不在 内置的API中
	//模块成员必须通过配置文件载入模块后再使用
	//所有的API都是 mb_XXXX

	echo mb_strlen('你好');
	echo "<br>";

	$dict = array('hello'=>'你好','hello1'=>'你好','hello2'=>'你好');


	//输出键值
	var_dump(array_keys($dict));
	echo "<br>";
	var_dump(array_values($dict));
	echo "<br>";


	if (isset($dict['hello'])) {
		echo $dict['hello'];
		echo "<br>";
	}
	if (isset($dict['he'])){
		echo $dict['he'];
		echo "<br>";
	}
	else{
		echo "没有";
		echo "<br>";
	}

	if (empty($dict['hello'])) {
		echo "没有";
		echo "<br>";
	}else{
		echo $dict['hello'];
		echo "<br>";
	}


	//配置 PHP 扩展
	//
	//解开扩展
	//
	// phpinfo();
 ?>