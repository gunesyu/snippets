$(function(){
	$.getJSON("../news.json", function(data){
		$.each(data.news, function(key,value){
			$("#newsContent .news h3").html(value.title).after(value.content);
		});
	});
});