var videoApp = angular.module('videoApp', ['ngAnimate']);

videoApp.controller('VideoController', ['$scope', '$window', '$interval', '$http', function($scope, $window, $interval, $http) {
	

	$http.get('data/playlist.json').success(function(data) {
	    $scope.playlist = data;
	});

	$scope.videoDisplay = document.getElementById("VideoElement");
	$scope.titleDisplay = "Quagmire's Carrot Advices";
	$scope.videoDescription = "Quagmire gives the secret of his young appearance to folks.";
	$scope.videoSource = "video/Carrot.mp4";
	$scope.videoPoster = "images/Carrot.jpg";
	$scope.videoDisplay.load($scope.videoSource);
	$scope.videoPlaying = false;
	$scope.currentTime;
    $scope.totalTime;
    $scope.scrubTop = -1000;
	$scope.scrubLeft = -1000;
	$scope.vidHeightCenter = -1000;
	$scope.vidWidthCenter = -1000;
	$scope.isDragging = false;
	$scope.showOptions = false;
	$scope.playlist;



    $interval(function(){
    	if (!$scope.isDragging) {
		    var t = $scope.videoDisplay.currentTime;
		    var d = $scope.videoDisplay.duration;
		    var w = t / d * 100;
		    var p = document.getElementById('progressMeterFull').offsetLeft + document.getElementById('progressMeterFull').offsetWidth;
		    $scope.scrubLeft = (t / d * p) - 7;
	    }else{
	    	$scope.scrubLeft = document.getElementById("thumbScrubber").offsetLeft;
	    }
    	$scope.updateLayout();
	},100);
    
    $scope.initPlayer = function() {
        $scope.currentTime = 0;
        $scope.totalTime = 0;
        $scope.videoDisplay.addEventListener("timeupdate", $scope.updateTime, true);
        $scope.videoDisplay.addEventListener("loadedmetadata", $scope.updateData, true);
    }
    
    $scope.updateData = function(e) {
        $scope.totalTime = e.target.duration;
    }
    
    $scope.updateTime = function(e) {
	    if(!$scope.videoDisplay.seeking){
	        $scope.currentTime = e.target.currentTime;
	        if($scope.currentTime == $scope.totalTime){
	            $scope.videoDisplay.pause();
	            $scope.videoPlaying = false;
	            $scope.currentTime = 0;
	            $('#playBtn').children("span").toggleClass("glyphicon-play", true);
	            $('#playBtn').children("span").toggleClass("glyphicon-pause", false);
	        }
	    }
	}

    $scope.updateLayout = function() {
    	$scope.scrubTop = document.getElementById('progressMeterFull').offsetTop-2;
	    $scope.vidHeightCenter =  $scope.videoDisplay.offsetHeight/2 - 50;
	    $scope.vidWidthCenter = $scope.videoDisplay.offsetWidth/2 - 50;
	    if(!$scope.$$phase) {
	        $scope.$apply();
	    }
    }
	$scope.mouseMoving = function($event) {
	    if($scope.isDragging){
	        $("#thumbScrubber").offset({left:$event.pageX});
	    }
	}
	    
	$scope.dragStart = function($event) {
	    $scope.isDragging = true;
	}

	$scope.dragStop = function($event) {
	    if($scope.isDragging){
	        $scope.videoSeek($event);
	        $scope.isDragging = false;
	    }
	}

    $scope.videoSeek = function($event) {
	    var w = document.getElementById('progressMeterFull').offsetWidth;
	    var d = $scope.videoDisplay.duration;  //duration
	    var s = Math.round($event.pageX / w * d);  //seconds
	    $scope.videoDisplay.currentTime = s;
	}

	$scope.toggleDetails = function() {
	    if($scope.showOptions){
	        $scope.showOptions = false;
	    }else{
	        $scope.showOptions = true;
	    }
	}

	$scope.videoSelected = function(i) {
	    $scope.titleDisplay = $scope.playlist[i].title;
	    $scope.videoDescription = $scope.playlist[i].description;
	    $scope.videoSource = $scope.playlist[i].path;
	    $scope.videoDisplay.load($scope.videoSource);
	    $scope.videoPoster = $scope.playlist[i].poster;
	    $scope.videoPlaying = false;
	    $('#playBtn').children("span").toggleClass("glyphicon-play", true);
	    $('#playBtn').children("span").toggleClass("glyphicon-pause", false);
	    $scope.showOptions = false;
	}

	$scope.togglePlay = function(){
		if($scope.videoDisplay.paused){
			$scope.videoDisplay.play();
			$scope.videoPlaying = true;
			$("#playBtn").children("span").toggleClass("glyphicon-play", false);
			$("#playBtn").children("span").toggleClass("glyphicon-pause", true);
		}else{
			$scope.videoDisplay.pause();
			$scope.videoPlaying = false;
			$("#playBtn").children("span").toggleClass("glyphicon-play", true);
			$("#playBtn").children("span").toggleClass("glyphicon-pause", false);
		}
	}

	$scope.toggleMute = function (){
		if($scope.videoDisplay.volume == 0.0){
			$scope.videoDisplay.volume = 1.0;
			$("#muteBtn").children("span").toggleClass("glyphicon-volume-up", true);
			$("#muteBtn").children("span").toggleClass("glyphicon-volume-off", false);
		}else{
			$scope.videoDisplay.volume = 0.0;
			$("#muteBtn").children("span").toggleClass("glyphicon-volume-up", false);
			$("#muteBtn").children("span").toggleClass("glyphicon-volume-off", true);
		}
	}
	$scope.toggleFullscreen = function() {
	    var v = $scope.videoDisplay;
	    if(v.requestFullscreen) {
	        v.requestFullscreen();
	    }else if(v.mozRequestFullScreen) {
	        v.mozRequestFullScreen();
	    }else if(v.webkitRequestFullscreen) {
	        v.webkitRequestFullscreen();
	    }else if(v.msRequestFullscreen) {
	        v.msRequestFullscreen();
	    }
	}

	$scope.initPlayer();

}]);

videoApp.filter('time', function() {
    return function(seconds) {
        var hh = Math.floor(seconds / 3600), mm = Math.floor(seconds / 60) % 60, ss = Math.floor(seconds) % 60;
        return hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss;
    };
});