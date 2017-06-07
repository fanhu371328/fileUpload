;
(function($) {
	var files_content = []; //所有文件信息存储在这里，做文件预览用
	var files_list = []; //所有file类型的input存储在这里，最后上传
	var files_num = 1; //点击上传时的input个数
	var size_all = "0Kb"; //文件总大小
	var upload = document.querySelector('#upload');
	var index = $('.file-content>div input').length;
	var progressNum = 0; //进度条对应的上传第几个，开始为0
	var sizeLoaded = 0;  //已经上传的总大小
	var addMore = document.querySelectorAll('.add-more')[index - 1];
	var typeArr = ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'pdf', 'txt', 'text']; //所有支持的文件格式

	var __PUBLIC__ = "/fileUpload/Public/";
	//添加文件

	upload.onchange = function() {
		if(upload.files.length > 0) {
			var fileList = upload.files;
			var num = 0;
			//添加文件和继续添加的共用方法
			addFile(fileList, num);
		}

		$('.upload-file').addClass('hidden');
		$('.file-content').removeClass('hidden');

		//创建预览
		createPreview();
		allSize();
	}

	//创建预览
	function createPreview() {
		if(files_content.length == 0) {
			$('.upload-file').removeClass('hidden');
			$('.file-content').addClass('hidden');
		} else {
			var html = [];
			for(var i = 0; i < files_content.length; i++) {
				var item = files_content[i];
				html.push(renderItem(item,i));
			}
			$(".file-list").html(html.join(''));

			//文件总大小
			var num = 0;
			for(var i = 0; i < files_content.length; i++) {
				num = num + (files_content[i].size) / 1024; //现在是kb
			}

			if(num >= 1024) {
				size_all = (num / 1024).toFixed(2) + "M";
			} else {
				size_all = num.toFixed(2) + "Kb";
			}
		}
		delate();
	}

	function renderItem(data,index) {
		//文件名
		var name = data.name;
		var size = data.size;
		//文件类型
		var type = name.split('.');
		var length = type.length;
		var type = type[length-1].toLowerCase();
		
		var src = __PUBLIC__ + "img/PDF.png";
		switch(type) {
			case "doc":
				src = __PUBLIC__ + "img/word.png";
				break;
			case "docx":
				src = __PUBLIC__ + "img/word.png";
				break;
			case "ppt":
				src = __PUBLIC__ + "img/ppt.png";
				break;
			case "pptx":
				src = __PUBLIC__ + "img/ppt.png";
				break;
			case "xls":
				src = __PUBLIC__ + "img/Excel.png";
				break;
			case "xlsx":
				src = __PUBLIC__ + "img/Excel.png";
				break;
			case "txt":
				src = __PUBLIC__ + "img/TXT.png";
				break;
			case "pdf":
				src = __PUBLIC__ + "img/PDF.png";
				break;
		}

		//文件大小
		size = (size / 1024).toFixed(2) + "Kb";

		//最终要展示的单个文件大小
		if(parseFloat(size) >= 1024) {
			size = (parseInt(size) / 1024).toFixed(2) + "M";
		}

		var str = '<li class="clearfix">\
						<p>\
							<img class="type-icon" src="' + src + '" />\
							<span>' + data.name + '</span>\
						</p>\
						<div class="progress-content hidden">\
							<progress></progress>\
							<span class="progress'+ index +'">0%</span>\
							<span class="success hidden" style="margin-left:20px">上传成功,积分+2</span>\
						</div>\
						<span class="size">' + size + '</span>\
						<img class="close-icon" name="close" src="' + __PUBLIC__ + 'img/guanguanbi.png" />\
					</li>';
		return str;
	}

	//计算文件总数和总大小
	function allSize() {
		//文件数
		var length = files_content.length;
		$('.file-num').html(length);
		//文件总大小
		$('.file-size').html(size_all);
	}

	//删除文件
	function delate() {
		$('.file-list li').on('click', function(e) {
			if(e.target.name == 'close') {
				var index = $(this).index();
				//删除对应的input节点，并将input数量减1
				$('.section-top input[type="file"]').eq(index).remove();
				files_num--;
				//重新赋值全部文件数组
				var arr = [];
				for(var i = 0; i < files_content.length; i++) {
					if(i != index) {
						arr.push(files_content[i])
					}
				}

				files_content = arr;

				//文件总大小
				var num = 0;
				for(var i = 0; i < files_content.length; i++) {
					num = num + (files_content[i].size) / 1024; //现在是kb
				}

				if(num >= 1024) {
					size_all = (num / 1024).toFixed(2) + "M";
				} else {
					size_all = num.toFixed(2) + "Kb";
				}

				allSize();
				//重新加载预览视图
				createPreview();
			}
		})
		$('.close-icon').on('mouseover', function() {
			$(this).addClass('close-icon1');
		})
		$('.close-icon').on('mouseout', function() {
			$(this).removeClass('close-icon1');
		})
	}

	//继续添加文件

	addMore.onchange = function() {
		if(addMore.files.length > 0) {
			var fileList = addMore.files;
			var num = 0;
			addFile(fileList, num);
			//添加文件完成后再创建一个input，置于现有的input之上
			$('.file-content>div input').addClass('hidden');

			cereateInput();
		}
		//创建预览
		createPreview();
		allSize();
	}

	function addFile(fileList, num) {
		for(var item in fileList) {
			//数组后面会自动添加两项不是我们需要的，排除出去
			if(num < fileList.length) {
				//对格式和大小进行判断
				var type = fileList[item].name;
				var flag = false;
				for(var i = 0; i < typeArr.length; i++) {
					if(type.indexOf(typeArr[i]) >= 0) {
						flag = true; //能够匹配到一种格式就置为true
					}
				}
				if(flag == true) {
					//格式符合的再判断大小,文件总大小小于5M，都符合条件再添加到文件集合中

					if(size_all.indexOf('M') > 0) {
						size_all = parseFloat(size_all) * 1024;
					}

					var allSize = parseFloat(size_all) * 1024 + parseFloat(fileList[item].size);

					if((allSize / 1024) > 5120) {
						alert("上传的文件" + fileList[item].name + "大小超过了5M，请重新选择！")
					} else {
						files_content.push(fileList[item]);
					}

				} else {
					alert("上传的文件" + fileList[item].name + "格式不支持！")
				}
			}
			num++;
		}
	}
	//添加一个文件就创建一个file类型的input，只是不显示，用来存储文件
	function cereateInput() {
		$('.file-content>div').append('<input type="file" name="upload[]" style="z-index:' + files_num + '" class="add-more"/>');
		var addMore = document.querySelectorAll('.add-more')[files_num];

		//继续添加文件

		addMore.onchange = function() {
			if(addMore.files.length > 0) {
				var fileList = addMore.files;
				var num = 0;
				addFile(fileList, num);
				//添加文件完成后再创建一个input，置于现有的input之上
				$('.file-content>div input').addClass('hidden');
				files_num++;
				cereateInput();
			}
			//创建预览
			createPreview();
			allSize();
		}
	}
	//上传
	$('#submit').on('click', function() {

		//点上传时显示进度条隐藏文件大小
		$('.progress-content').removeClass('hidden');
		$('.size').addClass('hidden');
		$(".close-icon").hide();
		$(".add-more").hide();
		$(".addMore").hide();
		
		$('#submit').on('click',function(){
			alert("正在上传中请耐心等待！")
			return false;
		})

		
		var flag = true;
		var progressNum = 0;
		
		uploadFile(progressNum,flag);

	})
	

	function uploadFile(progressNum,flag) {
		if(flag){
			flag = false;
			var formData = new FormData();
			formData.append('userFile', files_content[progressNum]); //key值相同，所以会覆盖调之前的文件，每次只会上传一个文件
			
			
			$.ajax({
				url: "./upload",
				type: "POST",
				data: formData,
				xhr: function() { //获取ajaxSettings中的xhr对象，为它的upload属性绑定progress事件的处理函数  
	
					myXhr = $.ajaxSettings.xhr();
					if(myXhr.upload) { //检查upload属性是否存在  
						//绑定progress事件的回调函数  
						myXhr.upload.addEventListener('progress', progressHandlingFunction, true);
					}
					return myXhr; //xhr对象返回给jQuery使用  
				},
				success: function(result) {
				},
				contentType: false, //必须false才会自动加上正确的Content-Type  
				processData: false, //必须false才会避开jQuery对 formdata 的默认处理  
			});
		
		} else {
			return;
		}
	}

	//上传进度回调函数：  
	function progressHandlingFunction(e) {
		if(e.lengthComputable) {
//			console.log(e.total);
			
			var percent =Math.round(e.loaded/e.total *100);
			console.log(percent);
			
			if(percent == 100){
				$(".progress"+progressNum).html(percent +"%");
				$(".progress"+progressNum).siblings('.success').show();
				
				flag = true;
				progressNum ++;
				if(progressNum < files_num+1){
//					console.log(progressNum)
					uploadFile(progressNum,flag);
				} else {
					setTimeout(function(){
						window.location.reload();
					},1000)
				}
			} else {
				$(".progress"+progressNum).html(percent +"%");
			}
		}
	}

})(jQuery)