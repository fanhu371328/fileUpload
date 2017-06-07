<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>添加数据</title>
	</head>

	<body>

		<form method="post" action="/thinkphp/index.php/Home/Form/insert">
			姓名：<input type="text" name="name"><br/> 
			年龄：<textarea name="age" rows="5" cols="45"></textarea><br/>
			邮箱：<input type="text" name="email"><br/>
			价格：<input type="text" name="currency"><br/>
			<input type="submit" value="提交">
		</form>

	</body>

</html>