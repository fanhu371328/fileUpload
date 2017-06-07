<?php if (!defined('THINK_PATH')) exit();?><html>

	<head>
		<title>验证码</title>
	</head>

	<body>

		<form action="/thinkphp/index.php/Home/Index/verify" method="post">
			<!--文本框-->
			<input type="text" name="yzm" />
			<!--验证码图片-->
			<img src="<?php echo U('Home/Index/hellow');?>" id="img" />
			<div><input type="submit" value="验证" /></div>

		</form>
		
	</body>

</html>