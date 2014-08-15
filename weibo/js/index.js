$(function(){

	initEvents();

});


function  initEvents(){
	showTopContent();
	showtopsearchsContent();
	showtopRight();
	openMainLeft2();
	openMainLeft3();
	changeBorder_mainCenter1();
	showChangeMainCenter4();
	howCloseMainCenter4();
	tabsMainRight5();
	gobackTop();
}


//top 中，鼠标移入移出时，显示和隐藏具体内容
function showTopContent(){
	$(".topMainLeft1A").hover(function(){
		$(this).find(".topMainLeft1T").addClass("topMainLeft1T2");
		$(this).find(".topMainLeft1TContent").show();
	},function(){
		$(this).find(".topMainLeft1T").removeClass("topMainLeft1T2");
		$(this).find(".topMainLeft1TContent").hide();
	});
}
//topsearch中，鼠标点中点出时，搜索栏默认值变化及下拉提示栏隐藏和显示
function showtopsearchsContent(){
	$(".topsearchs input").focus(function(){
		$(this).parent().css("background-position","-474px -5px");
		$(this).siblings().slideDown();
		var val2 = $(this).val();
		var	moren = $(this).attr("moren");
		if(val2==moren){
			$(this).val("");
		}
	}).blur(function(){
		$(this).parent().css("background-position","0px -5px");
		$(this).siblings().slideUp();
		var val2 = $(this).val();
		var	moren = $(this).attr("moren");
		if(val2==""){
			$(this).val(moren);
		}
	}).hover(function(){
		$(this).parent().css("background-position","-237px -5px");
	},function(){
		$(this).parent().css("background-position","0px -5px");
	});
}


//topRight中，鼠标移入移出时，显示和隐藏具体内容
function showtopRight(){
	$(".topMainRightA2").hover(function(){
		$(this).find(".topMainRightT2").addClass(".topMainLeft1T2");
		$(this).find(".topMainRightContent").show();
	},function(){
		$(this).find(".topMainRightT2").removeClass("topMainLeft1T2");
		$(this).find(".topMainRightContent").hide();
	});
}

//mainLeft2 中，展开或者收缩隐藏的信息
var indexOpenMain2=1;
function openMainLeft2(){
	$(".opens").click(function(){
		showHide(".mainLeft2",2,".opens");
	});
}
//mainLeft3 中，展开或者收缩隐藏的信息
var indexOpenMain3=1;
function openMainLeft3(){
	$(".openss").click(function(){
		showHide(".mainLeft3",3,".openss");
	});
}
function showHide(showName,index,selfName){
	if (index==2) {
		if (indexOpenMain2==1) {
			$(showName).find(".hide").show();
			$(selfName).find("a").text("收起");
			indexOpenMain2=2;
		}else{
			$(showName).find(".hide").hide();
			$(selfName).find("a").text("展开");
			indexOpenMain2=1;
		}
	}else{
		if (indexOpenMain3==1) {
			$(showName).find(".hide").show();
			$(selfName).find("a").text("收起");
			indexOpenMain3=2;
		}else{
			$(showName).find(".hide").hide();
			$(selfName).find("a").text("展开");
			indexOpenMain3=1;
		}
	}
	
}

//maincenter1中，鼠标移入移出时，边框线的变化
function changeBorder_mainCenter1(){
	$(".mainCenter1Text textarea").focus(function(){
		$(this).parent().css("border-color","rgb(255,185,65)");
		var val=$(this).text();
		if (val=="暑假来了你想去哪玩呢？晒出你的旅行照片吧！") {
			$(this).text("#带着微博去旅行#");
		};
		$(this).css("color","#000");
	}).blur(function(){
		$(this).parent().css("border-color","rgb(204,204,204)");
		var val=$(this).text();
		if (val=="#带着微博去旅行#") {
			$(this).text("暑假来了你想去哪玩呢？晒出你的旅行照片吧！");
			$(this).css("color","rgb(128, 128, 128)");
		};	
	});
}

//maincenter4中，鼠标移入和移出时，相应内容的显示和隐藏
function showChangeMainCenter4(){
	$(".mainCenter4").hover(function(){
		$(this).find(".mainCenter4MainContent1 a").css("color","rgb(235, 100, 120)");
		$(this).find(".hide").show();	
	},function(){
		$(".mainCenter4MainContent1 a").css("color","rgb(51, 51, 51)");
		$(this).find(".hide").hide();
	});
	$(".smallPic").click(function(){
			$(this).next().show();
	});
	$(".bigPic").click(function(){
		$(this).hide();
	});

}

//mainCenter4 中关闭的显示和隐藏及删除图片
function showCloseMainCenter4(){
	$(".mainCenter4MainContent5 li").hover(function(){
		$(this).find(".close").show();
	},function(){
		$(this).find(".close").hide();
	});
	$(".close").click(function(){
		$(this).parent().hide();
	});
}


//mainRight5中，幻灯片
var handle;
function tabsMainRight5(){
	$(".mainRight5Main").hover(function(){
		$(this).find(".hide").show();
	},function(){
		$(this).find(".hide").hide();
	});
	$(".mainRight5Main").hover(function(){
		clearInterval(handle);
	},function(){
		handle=setInterval("tabsFun()",2000);
	});
	$(".mainRight5dirLR").click(function(){
		var val=$(this).attr("value");
		if (val==1) {
			if (IndexTabs==1) {
				IndexTabs=9;
			}else{
				IndexTabs--;
			}
		}else{
			if (IndexTabs==9) {
				IndexTabs=1;
			}else{
				IndexTabs++;
			}
		}
		$(".mainRight5MainUl li").hide();
		$(".mainRight5MainUl li:nth-child("+IndexTabs+")").show();
		$(".mainRight5No span").text(IndexTabs);
	});
	handle=setInterval("tabsFun()",1000);

}
var IndexTabs=1;
function tabsFun(){
	$(".mainRight5MainUl li").hide();
	$(".mainRight5MainUl li:nth-child("+IndexTabs+")").css("display","block");
	$(".mainRight5MainUl li:nth-child("+IndexTabs+")").animate({left:"184px"},"slow");
	$(".mainRight5No span").text(IndexTabs);
	IndexTabs++;
	if (IndexTabs==10) {
		IndexTabs=1;
	};
}
//body,返回顶部
function gobackTop(){
	$(window).scroll(function(){
		if ($(window).scrollTop()>=500) {
			$(".goBack").css({"display":"block","top":"400px"});
		}else{
			$(".goBack").css({"display":"none"});
		}
	});
}