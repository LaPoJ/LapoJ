<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>用户登录</title>
</head>
<body>
	<!--
		1.必须有form标签
		2.form必须指定 action 和 method
			不设置 action 默认当前页面（必须设置，因为兼容）
			不设置 mehtod 默认使用 get 方法
		3.表单元素（表单域--input）必须有 name (如果希望被提交的情况下)
		4.表单中必须有一个提交按钮
	 -->
	<form action="formP.php" method="get">
		<table border="1";>
			<tr>
<td>用户名</td>
				<td><input type="text" name="username"></td>
			</tr>
			<tr>
				<td>密码</td>
				<td><input type="text" name="password"></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="登录"></td>
			</tr>
		</table>	
	</form>
</body>
</html>