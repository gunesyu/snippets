$(function(){
	
	$("a.videoLink").each(function(){
		
		var tb = "video/"+$(this).attr("videoFile")+".jpg";
		var caption = $(this).attr("videoCaption");
		$(this).css("background-image", "url("+tb+")");
		$(this).html('<div class="caption">'+caption+'</div><img src="images/play_icon.png" class="play"/>')
	});

	$(".videoLink").click(function(){
		
		var videoFile = $(this).attr("videoFile");
		var videoPoster = $(this).attr("videoFile");
		var videoWidth = Number($(this).attr("videoWidth"));
		var videoHeight = Number($(this).attr("videoHeight"));

		var videoCode = '<video width="'+videoWidth+'" height="'+videoHeight+'" controls autoplay autobuffer>';
		videoCode += '<source src="video/'+videoFile+'.mp4" type="video/mp4"></source>';
		videoCode += '<source src="video/'+videoFile+'.ogv" type="video/ogg"></source></video>';
		$("#videoPlayer").html(videoCode);

		var checkBrowser = navigator.userAgent.toLowerCase();
		var isAndroid = checkBrowser.indexOf("android") > -1;
		var isiPhone = checkBrowser.indexOf("iphone") > -1;
		var isiPod = checkBrowser.indexOf("ipod") > -1;

		if (isAndroid || isiPhone || isiPod) {
			window.location = "video/"+videoFile+".mp4";
		}else{
			$.fancybox({
				"transitionIn" : "fade",
				"transitionOut" : "fade",
				"overlayColor" : "#000",
				"overlayOpacity" : ".6",
				"href" : "#videoPlayer"
			});
		};

	});
});