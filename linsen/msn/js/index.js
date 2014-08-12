$(function(){
	//main1中，幻灯片的播放和点击
	$(".biaoqian").click(function(){
		index = $(this).attr("picIndex");
		showFlashImage();
	});

	setInterval("showFlashImage()",2000 );
	
	//main2中，特殊选项卡的的显示和隐藏   
	$(".main2Leftli").mouseover(function(){
		$(".main2Leftli").find(".main2LeftLiContent").css("display","none");
		$(".main2Leftli").find(".main2LeftH3").css("display","block");
		$(this).children(".main2LeftLiContent").css("display","block");
		$(this).children(".main2LeftH3").css("display","none");
	});
		//main5中，随着鼠标的移入和移出，图片上的边框和介绍的显示和消失
	$(".main5Pic").hover(function(){
		$(this).find(".main5picA span,.main5PicP").css("display","block");
	},function(){
		$(this).find(".main5picA span,.main5PicP").css("display","none");
	});

	//main6中，随着鼠标的移入和移出，介绍的显示和隐藏
	$(".main6Li").hover(function(){
		$(this).find("div").css("display","block");
	},function(){
		$(this).find("div").css("display","none");
	});
});

var index=2;
function showFlashImage(){
	$("#flash1").css("background-image",'url("images/' + index + '.jpg")');
	$(".biaoqian").removeClass("morenbiaoqian");
	$("#conbiaoqian"+index).addClass("morenbiaoqian");
	index++;
	if (index==5){
		index=1;
	};
}