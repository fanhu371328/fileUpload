<?php
namespace Home\Controller;
use Think\Controller;
use Think\Upload;

class IndexController extends Controller {
    //文件上传
    public function upload(){
    	
    		//实例化上传类
    		$upload = new Upload();
    		//设置上传文件大小
    		$upload->maxSize = 5242880;
    		$upload->exts = array('pdf','doc','txt','xlsx','docx');
    		$upload->savePath = './';  //上传路径
    		
    		//上传成功后返回的信息
    		$info = $upload->upload();
    		if( !$info ){
    			$this->error($upload->getError());
    		} else {
    			$this->success("上传成功");
    		}
    }
    
}
