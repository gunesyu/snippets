(function(){
	$(".content h1").after("<ul></ul>");
	$(".content h2").each(function(index,element){
		var ref = "hotel"+index;
		$(element).attr("id", ref);
		$(".content ul").append("<li><a href=#"+ref+">"+$(element).text()+"</a></li>");
	});
})();