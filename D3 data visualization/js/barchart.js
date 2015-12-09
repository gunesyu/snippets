var margin = { top:30, right:30, bottom:40, left:50}

var height = 400 - margin.top - margin.bottom;
var width = Math.round(d3.select(".container").style("width").slice(0, -2)) - margin.left - margin.right;
var barWidth = 50;
var barOffset = 5;


var barData = [];
for(var i=0;i<width/10;i++){
	barData.push(Math.round(Math.random()*50) +5);
}

/* bardata.sort(function compareNumbers(a,b) {
    return a -b;
}); */


var yScale = d3.scale.linear()
		.domain([0, d3.max(barData)])
		.range([0, height]);

var xScale = d3.scale.ordinal()
		.domain(d3.range(0,barData.length))
		.rangeBands([0, width], .1);    // .1 aralardaki bosluga denk geliyor, bi tane daha eklersen tamamını bastan ve sondan ayırıyor


var vGuideScale = d3.scale.linear()
				.domain([0 , d3.max(barData)])
				.range([height,0]);

var tempColor;

// yukseklige gore renklendirmek
var colors = d3.scale.linear()
		.domain([0, d3.max(barData)])
		.range(["#FFB832","#C61C6F"]);

// yatay sıralamaya gore renklendirmek
var colorsH = d3.scale.linear()
		/*.domain([0, barData.length])
		.range(["#FFB832","#C61C6F"]);*/
	// daha fazla renk olsun istiyorsan
		.domain([0, barData.length*.33, barData.length*.66, barData.length])
		.range(["#B58929","#C61C6F","#268BD2","#85992C"]);



var tooltip = d3.select("body").append("div")
				.style({
					"position": "absolute",
					"background": "white",
					"padding": "0px 10px",
					"opacity": 0
				});



var myChart = d3.select("#chart").append("svg")
	.attr({
		"width": width + margin.left + margin.right,
		"height": height + margin.top + margin.bottom
	})
	.append('g')
	.attr("transform", "translate("+margin.left+","+margin.top+")")
	.selectAll("rect").data(barData)
	.enter().append("rect")
	.style/*("fill",colors)*/("fill", function(d,i){ return colorsH(i); })
	.attr({
		"width":xScale.rangeBand(),
		"height":0,
		"x":function(d,i){
			return xScale(i);
		},
		"y":height
	})
	.on("mouseover", function(d){
		tooltip.transition()
				.style("opacity", .9);
		tooltip.html(d)
				.style({
					"left":(d3.event.pageX-35)+"px",
					"top":(d3.event.pageY+20)+"px"
				});
		tempColor = this.style.fill;
		d3.select(this).style("opacity", .75)
						.style("fill", "#000");
	})
	.on("mouseout", function(d){
		tooltip.html("")
		d3.select(this).style("opacity", 1)
						.style("fill", tempColor);
	});


myChart.transition()
		.attr({
			"height":function(d){
				return yScale(d);
			},
			"y":function(d,i){
				return height - yScale(d);
			}
		})
		.delay(function(d,i){
			return i* 10;
		})
		.duration(1000)
		.ease("elastic");


var vAxis = d3.svg.axis()
				.scale(vGuideScale)
				.orient("left")
				.ticks(10);

var hAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.tickValues(xScale.domain().filter(function(d,i){
					return !(i%(barData.length/9));
				}));

var vGuide = d3.select("svg").append("g");

var hGuide = d3.select("svg").append("g");

vAxis(vGuide);
vGuide.attr("transform", "translate("+margin.left+","+margin.top+")");
vGuide.selectAll('path').style({ fill: 'none', stroke: "#000"});
vGuide.selectAll('line').style({ stroke: "#000"});

hAxis(hGuide);
hGuide.attr("transform","translate("+margin.left+","+(height+margin.top)+")");
hGuide.selectAll('path').style({ fill: 'none', stroke: "#000"});
hGuide.selectAll('line').style({ stroke: "#000"});