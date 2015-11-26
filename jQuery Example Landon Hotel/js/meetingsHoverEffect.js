$(function(){
	$("div.event").hover(hoverView);
	function hoverView(){
		$(this).toggleClass("hoverEvent");
	}
});