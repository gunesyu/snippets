$(function(){

	$("a.videoLink").hover(
		function(){
			var captionPos = 85 - $(this).children(".caption").height();
			var iconPos = captionPos - 32;

			$(this).children(".caption").animate({ top : captionPos+"px" }, 250);
			$(this).children("img.play").animate({ top : iconPos+"px", opacity : 1 }, 250);
		},
		function(){
			$(this).children(".caption").animate({ top : "116px" }, 250);
			$(this).children("img.play").animate({ top : "25px", opacity : .5 }, 250);
		}
	);
	
	$("a.videoLink").each(function(){
		
		var tb = "video/"+$(this).attr("videoFile")+".jpg";
		var caption = $(this).attr("videoCaption");
		$(this).css("background-image", "url("+tb+")");
		$(this).html('<div class="caption">'+caption+'</div><img src="images/play_icon.png" class="play"/>')
	});

	$(".videoLink").click(function(){
		
		var videoFile = $(this).attr("videofile");
		var videoPoster = $(this).attr("videofile");
		var videoWidth = Number($(this).attr("videowidth"));
		var videoHeight = Number($(this).attr("videoheight"));

		var videoCode = '<video width="'+videoWidth+'" height="'+videoHeight+'" controls autoplay autobuffer>';
		videoCode += '<source src="video/'+videoFile+'.mp4" type="video/mp4"></source>';
		videoCode += '</video>';
		console.dir(videoCode);
		$("#videoPlayer").html(videoCode);

		var checkBrowser = navigator.userAgent.toLowerCase();
		var isAndroid = checkBrowser.indexOf("android") > -1;
		var isiPhone = checkBrowser.indexOf("iphone") > -1;
		var isiPod = checkBrowser.indexOf("ipod") > -1;

		if (isAndroid || isiPhone || isiPod) {
			window.location = "video/"+videoFile+".mp4";
		}else{
			$("#videoPlayer").attr("style","display:block;");
			console.log($("#videoPlayer").attr("style"))
		};

	});
});