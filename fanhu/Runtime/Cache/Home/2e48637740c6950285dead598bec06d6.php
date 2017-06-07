<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>上传资料</title>
		<link rel="stylesheet" href="/fileUpload/Public/css/public.css">
		<link rel="stylesheet" href="/fileUpload/Public/css/file_upload.css">
	</head>
	<body>
		<div class="section">
			<form id="uploadForm" class="section-top" method="post" enctype="multipart/form-data">
				<p class="file-header">上传资料</p>
				<div class="upload-file">
					<input type="file" name="upload[]" id="upload" />
					<p>
						<img src="/fileUpload/Public/img/wodeshangchuan.png" /> 上传我的资料
					</p>
					<p>
						每成功上传一份资料，可获得 <span>5</span> 积分奖励
					</p>
				</div>
				
				<div class="file-content hidden">
					<p>您选择的文件</p>
					<ul class="file-list">
						<!--文件预览-->
					</ul>
					<div class="clearfix">
						<p>
							选择<span class="file-num">0</span>个文件，共<span class="file-size">0kb</span>
						</p>
						
						<p class="addMore">
							<img src="/fileUpload/Public/img/PDF.png" />继续添加
						</p>
						<input type="file" name="upload[]" class="add-more" />
					</div>
					
					
					
					
					
					<input type="button" name="submit" id="submit" value="开始上传" />
				</div>
			</form>
			<!--上传资料提示信息-->
			<div class="section-bottom">
				<div>
					<p class="tips-file"><img src="/fileUpload/Public/img/zhuyi.png" />上传资料说明</p>
					<ul>
						<li>1、上传的资料需通过审核后才会发布</li>
						<li>2、支持5M以内的资料文件上传</li>
						<li>3、请勿在未经授权的情况下上传任何版权侵权的文档，除非文档完全由您个人创作或您得到了版权所有者的授权</li>
						<li>4、为了文档能正常显示，我们支持以下格式的文档上传</li>
					</ul>
				</div>
				<div>
					<p class="tips-file"><img src="/fileUpload/Public/img/zhuyi.png" />支持文件格式</p>
					<ul>
						<li>
							<span>Microsoft office</span>
							<span><img src="/fileUpload/Public/img/word.png"/>doc,docx</span>
							<span><img src="/fileUpload/Public/img/ppt.png"/>ppt,pptx</span>
							<span><img src="/fileUpload/Public/img/Excel.png"/>xls,xlsx</span>
						</li>
						<li>
							<span>文本</span>
							<span><img src="/fileUpload/Public/img/TXT.png"/>txt</span>
						</li>
						<li>
							<span>Adobe PDF</span>
							<span><img src="/fileUpload/Public/img/PDF.png"/>pdf</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</body>
	<script src="/fileUpload/Public/js/jquery-2.1.4.min.js"></script>
	<script src="/fileUpload/Public/js/file_upload.js"></script>
</html>