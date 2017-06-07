<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>添加数据</title>
	</head>

	<body>

		<form method="post" action="/thinkphp/index.php/Home/Form/insert">
			标题：<input type="text" name="title"><br/> 
			内容：<textarea name="content" rows="5" cols="45"></textarea><br/>
			<input type="submit" value="提交">
		</form>

	</body>

</html>