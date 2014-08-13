$(function(){

	initEvents();

});


function  initEvents(){
	//TopLeft中，鼠标移入移出时，显示和隐藏具体内容
	showTopContent();
	showtopsearchsContent();
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