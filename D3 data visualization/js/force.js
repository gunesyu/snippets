var w = 900,
	h = 700;

var circleWidth = 5;

var palette = {
	"lightgray": "#819090",
	"gray": "#708284",
	"mediumgray": "#536870",
	"darkgray": "#475B62",
	"darkblue": "#0A2933",
	"darkerblue": "#042029",
	"paleryellow": "#FCF4DC",
	"paleyellow": "#EAE3CB",
	"yellow": "#A57706",
	"orange": "#BD3613",
	"red": "#D11C24",
	"pink": "#C61C6F",
	"purple": "#595AB7",
	"blue": "#2176C7",
	"green": "#259286",
	"yellowgreen": "#738A05"
}

var nodes = [
	{	name : "Parent" },
	{	name : "child1", target : [0] },
	{	name : "child2", target : [0,1] },
	{	name : "child3", target : [1] },
	{	name : "child4", target : [0,1,2,3] },
	{	name : "child5"},
	{	name : "child6", target : [1,3,4] },
	{	name : "child7", target : [0,3,5] }
];

var links = [];

for (var i =0; i < nodes.length; i++) {
	if(nodes[i].target !== undefined){
		for (var j = 0; j < nodes[i].target.length; j++) {
			links.push({
				source : nodes[i],
				target : nodes[nodes[i].target[j]]
			});
		}
	}
}

var myChart = d3.select("#chart")
				.append("svg")
					.attr({
						"width":w,
						"height":h
					});

var force = d3.layout.force()
				.nodes(nodes)
				.links([])
				.gravity(0.1)
				.charge(-1000)
				.size([w , h]);

var link = myChart.selectAll("line")
				.data(links)
				.enter()
				.append("line")
					.attr("stroke", palette.gray);

var node = myChart.selectAll("circle")
				.data(nodes)
				.enter()
				.append("g")
					.call(force.drag);

node.append("circle")
		.attr({
			"cx":function(d){
				return d.x;
			},
			"cy":function(d){
				return d.y;
			},
			"r":circleWidth,
			"fill":function(d,i){
				if(i>0) return palette.pink;
				else return palette.blue;
			}
		});

node.append("text")
		.text(function(d){
			return d.name;
		})
		.attr({
			"fill":function(d,i){
				if(i>0) return palette.mediumgray;
				else return palette.yellowgreen;
			},
			"text-anchor":function(d,i){
				if(i>0) return "beginning";
				else return "end";
			},
			"font-size":function(d,i){
				if(i>0) return "1.1em";
				else return "1.4em";
			},
			"x":function(d,i){
				if(i>0) return circleWidth + 4;
				else return circleWidth - 15;
			},
			"y":function(d,i){
				if(i>0) return circleWidth;
				else return 8;
			}
		})

force.on("tick", function(e){
	node.attr("transform", function(d,i){
		return "translate("+d.x+","+d.y+")";
	});
	link.attr({
		"x1":function(d){
			return d.source.x;
		},
		"y1":function(d){
			return d.source.y;
		},
		"x2":function(d){
			return d.target.x
		},
		"y2":function(d){
			return d.target.y
		},
	});
});

force.start();