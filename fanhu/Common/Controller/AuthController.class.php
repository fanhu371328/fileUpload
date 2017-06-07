<?php
namespace Common\Controller;
use Think\Controller;

class FormController extends Controller {
	//添加权限控制_initialize方法会自动执行
	protected function _initialize(){
		$auth = new Auth();
		
	}
   
     
}