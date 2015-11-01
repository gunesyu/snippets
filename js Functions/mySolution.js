(function(){

	// MY SOLUTION

	var myNode = document.querySelectorAll(".socialmediaicons");
	
	var srcPaths = ["facebook.png","twitter.png","linkedin.png","youtube.png"];
	var socialMediaLinks = ['http://facebook.com/viewsource','http://twitter.com/planetoftheweb','http://linkedin.com/','http://youtube.com/planetoftheweb'];
	var myList = document.createElement("ul");

	for (var i = srcPaths.length - 1; i >= 0; i--) {
		var myCell = document.createElement("li");
		var myElement = document.createElement("img");
		myElement.src = "images/"+srcPaths[i];
		myElement.alt = "go to "+srcPaths[i].substr(0,srcPaths[i].length-4)+" page!";
		var myLink = document.createElement("a");
		myLink.href = socialMediaLinks[i];
		myLink.target = "blank";
		myLink.appendChild(myElement);
		myCell.appendChild(myLink);
		myList.appendChild(myCell);
	};

	for (var i = 0; i < myNode.length; i++) {
		myNode[i].appendChild(myList.cloneNode(true));
	};

})();