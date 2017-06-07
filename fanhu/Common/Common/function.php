<?php


	// 检测输入的验证码是否正确，$code为用户输入的验证码字符串
	function check_verify($code, $id = ''){
	    $verify = new \Think\Verify();
	    return $verify->check($code, $id);
	}
	//返回上传文件夹的随机目录名
	function get_user_id(){
		return rand();
	}

?>