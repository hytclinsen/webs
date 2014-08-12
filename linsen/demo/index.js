$(function(){

	$(".menu").hover(function(){
		$(this).find(".menuTitle").css({"background-color":"#333333",
			"color":"#ffffff","border-top-left-radius":"5px",
			"border-top-right-radius":"5px",
			"boder":"1px solid #333"});
		$(this).find(".subMenu").slideDown();
	},function(){
		$(this).find(".menuTitle").css({"background-color":"",
			"color":"","border-top-left-radius":"5px",
			"border-top-right-radius":"5px",
			"boder":"1px solid #333"});
		$(this).find(".subMenu").hide();
	});

  	$(".subMenuLi").hover(function(){
	
		$(this).css({
			"background-color":"#dddddd"
		});
	},function(){
		$(this).css({
			"background-color":""
		});
	});


  	$(".c").click(function(){
  		$(".c").removeClass("ac");
  		$(this).addClass("ac");
  	});

});