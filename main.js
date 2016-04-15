$(document).ready(function(){

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
	
	 
});

$(document).ready(function(){
						   
	$(".pane .delete").click(function(){
		$(this).parents(".pane").animate({ opacity: 'hide' }, "slow");
	});

});

$(document).ready(function(){


	$(".run").click(function(){
	
		$("#box").animate({opacity: "0.1", left: "+=400"}, 1200)
		.animate({opacity: "0.4", top: "+=160", height: "20", width: "20"}, "slow")
		.animate({opacity: "1", left: "0", height: "100", width: "100"}, "slow")
		.animate({top: "0"}, "fast")
		.slideUp()
		.slideDown("slow")
		return false;
	
	});

});



$(document).ready(function(){
	
	$(".accordion h3:first").addClass("active");
	$(".accordion p:not(:first)").hide();

	$(".accordion h3").click(function(){
		$(this).next("p").slideToggle("slow")
		.siblings("p:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});

});




$(document).ready(function(){

	$("h2").append('<em></em>');

	$(".thumbs a").click(function(){
	
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		
		$("#largeImg").attr({ src: largePath, alt: largeAlt });
		
		$("h2 em").html(" (" + largeAlt + ")"); return false;
	});
	
});