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
			"background-color":"rgb(236,244,238)",
			"font-weight":"bold"
		});
	},function(){
		$(this).css({
			"background-color":"",
			"font-weight":"normal"
		});
	});


  	$(".c").click(function(){
  		$(".c").removeClass("ac");
  		$(this).addClass("ac");
  	});


  	$(".me").hover(function(){
		$(this).find(".menul").show();
		$(this).find(".menu2").show();
	},function(){
		$(this).find(".menul").hide();
		$(this).find(".menu2").hide();



  	});
});