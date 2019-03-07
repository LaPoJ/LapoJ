<?php




	//1.读取文件
	$contents = file_get_contents('names.txt');

	//2 解析文件内容

	$lines = explode("\n", $contents);

	foreach ($lines as $item) {
		if ($item == '')
			continue;

		$cols = explode('|', $item);
		$data[] = $cols;

	}

	//3.通过混编模式输入进表格
 ?>
 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 	<style type="text/css">
		a{
			text-decoration: none;
		}

 		.tab,.thead,.tbody{
 			border:1px solid;
 		}

 		.td{
 			text-align: center;


 		}
 		.id,.name,.age{
 			width: 80px;
 			height: 60px;
 		}
 	</style>
 </head>
 <body>
 	<h1>全部人员信息表</h1>
 	<table class="tab">
 		<thead class="thead">
 			<tr>
 				<td class="id td">编号</td>
 				<td class="name td">姓名</td>
 				<td class="age td">年龄</td>
 				<td class="email td">邮箱</td>
 				<td class="href td">个人链接</td>
 			</tr>
 		</thead>
 		<tbody class="tbody">
 			<?php foreach ($data as $item): ?>
				<tr>
					<?php foreach ($item as $cols):?>
						<?php $cols = trim($cols); ?>
						<?php if (strpos($cols,'http://') === 0): ?>
							<td class="td"><a href= "<?php echo strtolower($cols);  ?> "><?php echo substr($cols, 7);?></a></td>
						<?php else: ?>
							<td class="td"><?php echo $cols; ?></td>
					<?php endif ?><?php endforeach ?>
				</tr>
 			<?php endforeach ?>
 		</tbody>
 	</table>
 </body>
 </html>
