$(function(){
	setInterval("fadingImages()", 3000);
});

function fadingImages(){
	var currentPhoto = $("#hero div.current");
	var nextPhoto;
	currentPhoto.next().length==0 ? nextPhoto = $("#hero div:first") : nextPhoto = currentPhoto.next();
	currentPhoto.removeClass("current").addClass("previous");
	nextPhoto.css({opacity:0.0}).addClass("current").animate({opacity:1.0}, 1000, function(){
		currentPhoto.removeClass("previous");
	});
}