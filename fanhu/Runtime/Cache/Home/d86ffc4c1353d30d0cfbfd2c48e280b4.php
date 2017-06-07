<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>读取数据</title>
		<style type="text/css">
			*{margin: 0;padding: 0;}
			li{list-style: none;line-height: 40px;}
			h3{margin: 10px 0;}
		</style>
	</head>
	<body>
		
		<h3>这里是获取的具体id的一条数据</h3>
		<ul>
			<li>id: <?php echo ($data["id"]); ?></li>
			<li>title: <?php echo ($data["title"]); ?></li>
			<li>content: <?php echo ($data["content"]); ?></li>
		</ul>
		<h3>这里是单独获取的title字段的值</h3>
		<p>title：<?php echo ($title); ?></p>
	</body>
</html>