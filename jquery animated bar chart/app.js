var barSpacing=0,
	barWidth=0,
	chartHeight=0,
	chartHeightArea=0,
	chartScale=0,
	maxValue=0,
	highestYLabel=0,
	valueMultiplier=0;

$(document).ready(function(){

	window.chartHeight = Number($(".chart-area").height());
	window.barWidth = $(".chart-area .chart-bar").width();
	window.highestYLabel = Number($(".chart-y-axis p").first().html());
	window.chartHeightArea = window.chartHeight - Number($("p.axis-value").first().height());
	window.chartScale = chartHeightArea / window.highestYLabel;
	window.barSpacing = Number($(".chart-area").attr("bar-spacing"));
	positionBars();
});

function positionBars(){
	$(".chart-area .chart-bar").each(function(index){
		var barPosition = window.barWidth*index + index*window.barSpacing + window.barSpacing;
		$(this).css("left", barPosition+"px");
		$(this).html("<p>"+$(this).attr("bar-value")+"</p>");
		$(".chart-x-axis").append("<p style='left:"+(barPosition-(window.barWidth/2))+"px;'>"+$(this).attr("label")+"</p>");
		var barValue = Number($(this).attr("bar-value"));
		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYLabel;
		}
	});
	animateChart();
}

function animateChart(){
	$(".chart-area .chart-bar").each(function(index){
		var revisedValue = Number($(this).attr("bar-value"))*window.chartScale;
		var newDelay = 125*index;
		$(this).delay(newDelay).animate(
			{
				height : revisedValue
			},
			1000,
			function(){
				$(this).children("p").delay(500).fadeIn(250);
			}
		);
	});
}