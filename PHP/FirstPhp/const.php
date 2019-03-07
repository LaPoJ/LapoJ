<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<h1>常量</h1>
	<p>
		<?php
		/**
		 * 定义公共配置信息
		 * 1:便于维护
		 * 2:公共使用
		 */

		//PHP 中可以通过define函数定义一个常量
		//常量定义后不能被修改，临时存放数据的容器
		//
		//什么时候用到常量：
		//	1.程序的配置信息一般都是定义成常量
		//	what why how when

		//变量或函数都是采用 snake_case （小写字母+下划线）命名
		//常量是 SNAKE_CASE 命名规则
		//
		//第一个参数是常量名称；
		//第二个参数是常量的值；
		//第三个参数是常量的名称是否忽略大小写，默认为false 不忽略大小写；
		define('SYSTEM_NAME_CONST', '阿里百秀');

		echo SYSTEM_NAME_CONST;

 	?>
	</p>
	<hr>
	<h1>require载入文件</h1>
	<p>
		<?php
			//类似于 css 的 import 导入文件
			require 'newConst.php';

			echo "名称：",SYSTEM_NAME,'<br>';
			echo "版本：",SYSTEM_VERSION,'<br>';

			//只载入一次,如果之前在如果，不再执行(只执行一次)
			//由于类似于 定义常量 定义函数 这种操作不能执行多次
			//所以 require_once 更加适合载入这种文件

			require_once 'newConst.php';
			echo DB_HOST;
		 ?>
	</p>
	<hr>
</body>
</html>



