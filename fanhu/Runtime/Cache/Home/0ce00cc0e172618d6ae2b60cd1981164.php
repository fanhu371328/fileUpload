<?php if (!defined('THINK_PATH')) exit();?><html>

	<head>
		<title><?php echo ($name); ?></title>
	</head>

	<body>
		<div>
			<?php echo ($name); ?>

		</div>
		<div>
			
			<?php if(is_array($data)): $i = 0; $__LIST__ = $data;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; echo ($vo["id"]); ?>--<?php echo ($vo["name"]); ?><br/><?php endforeach; endif; else: echo "" ;endif; ?>

		</div>
	</body>

</html>