var w = d3.select(".container").style("width").slice(0,-2),
	h = 700;

var palette = {
	"white":"#FFFFFF",
	"lightgray": "#819090",
	"gray": "#708284",
	"mediumgray": "#536870",
	"darkgray": "#475B62",
	"black" : "#000000",
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
};

var colors = ["#000000", "#475B62","#536870","#708284", "#819090"];

var nodes = [
	//	first level
	{	name : "Snippets", target:[1,2,3], level : 1,"x":w/2,"y":40},

	// second level
	{	name : "HTML", target : [4,5], level : 2,"x":w/5,"y":160},
	{	name : "CSS", target : [], level : 2 ,"x":2*w/5,"y":165},
	{	name : "JavaScript", target : [6,7,8,9,10,11] , level : 2,"x":2*w/3,"y":150},

	// third level
	{	name : "video", target : [12,13,14], level : 3 ,"x":w/12,"y":290},
	{	name : "semantics", target : [15,16], level : 3 ,"x":3*w/12,"y":280},

	{	name : "pure", target : [17,18,19,20,21,22] , level : 3 ,"x":15*w/36,"y":295},
	{	name : "three.js", target : [34] , level : 3 ,"x":19*w/36,"y":315},
	{	name : "d3.js", target : [35,36,37,38] , level : 3 ,"x":22*w/36,"y":450},
	{	name : "angularJS", target : [30,31,32], level : 3 ,"x":24*w/36,"y":290},
	{	name : "easelJS", target : [33] , level : 3 ,"x":27*w/36,"y":255},
	{	name : "jQuery", target : [23,24,25,26,27,28,29], level : 3 ,"x":31*w/36,"y":250},

	// fourth level
	{	name : "Basic", target : [], address : "html5 video/BinLaden.html" , level : 4,"x":w/21,"y":375},
	{	name : "YouTube Embedding", target : [], address :  "html5 video/YouTubeEmbedded.html" , level : 4,"x":w/12,"y":500},
	{	name : "Background Video", target : [], address : "html5 background video/index.html"  , level : 4,"x":w/6,"y":375},

	{	name : "Semantic Tags", target : [], address : "web semantics/samoca.html" , level : 4,"x":3*w/12,"y":425},
	{	name : "Microdata", target : [], address : "web semantics/oliveoil.html"  , level : 4,"x":3*w/10,"y":350},

	{	name : "DOM", target : [], address : "js DOM/artists.html"  , level : 4,"x":24*w/72,"y":420},
	{	name : "Functions", target : [], address :  "js Functions/index.html" , level : 4,"x":27*w/72,"y":455},
	{	name : "Events", target : [], address : "js Events/index.html"  , level : 4,"x":29*w/72,"y":500},
	{	name : "Templating", target : [39,40,41], level : 4, "x":31*w/72,"y":540},
	{	name : "JSON", target : [], address : "js JSON/index.html" , level : 4 ,"x":34*w/72,"y":490},
	{	name : "AJAX", target : [], address : "js AJAX/index.html" , level : 4,"x":37*w/72,"y":475},

	{	name : "Video Gallery", target : [], address : "jquery html5 video gallery/index.html" , level : 4,"x":58*w/72,"y":345},
	{	name : "Animated Bar Chart", target : [], address : "jquery animated bar chart/index.html" , level : 4,"x":58*w/72,"y":470},
	{	name : "Interactive Map", target : [], address : "jquery interactive map/index.html", level : 4 ,"x":62*w/72,"y":400},
	{	name : "Sliding Panel", target : [], address : "jquery sliding panel/index.html" , level : 4,"x":65*w/72,"y":480},
	{	name : "Expandable FAQ", target : [] , address : "jquery expandable FAQ/index.html" , level : 4,"x":70*w/72,"y":515},
	{	name : "Tooltip", target : [], address : "jquery tooltip/index.html", level : 4 ,"x":70*w/72,"y":400},
	{	name : "Responsive Timeline", target : [] , address : "jquery timeline/index.html" , level : 4,"x":69*w/72,"y":300},

	{	name : "Basic Stuff", target : [], address : "angularJS/basic.html" , level : 4,"x":24*w/36,"y":355},
	{	name : "Live Search with Partials", target : [] , address : "angularJS/index.html" , level : 4,"x":26*w/36,"y":395},
	{	name : "Video Player", target : [], address : "html5 video with angularJS/index.html"  , level : 4,"x":26*w/36,"y":305},

	{	name : "Basics", target : [], address : "easelJS/index.html"  , level : 4,"x":57*w/72,"y":275},

	{	name : "Face Reconstruction", target : [], address :  "https://gunesyu.github.io/insidetheface" , level : 4,"x":19*w/36,"y":375},

	{	name : "Bar Chart Animation", target : [], address : "D3 data visualization/barchart.html" , level : 4 ,"x":41*w/72,"y":515},
	{	name : "D3 Graphcics", target : [], address :  "D3 data visualization/graphic.html" , level : 4 ,"x":43*w/72,"y":555},
	{	name : "SVG Graphics", target : [], address :  "D3 data visualization/svg.html" , level : 4,"x":48*w/72,"y":595},
	{	name : "Force Layout", target : [], address :  "D3 data visualization/force.html" , level : 4,"x":50*w/72,"y":500},

	// fifth level
	{	name : "Mustache", target : [], address : "js Templating/mustache/mustacheProject.html"  , level : 5,"x":26*w/72,"y":630},
	{	name : "Handlebars", target : [] , address : "js Templating/handlebars/handlebarsProject.html" , level : 5,"x":30*w/72,"y":660},
	{	name : "Dust", target : [], address : "js Templating/dust/dustProject.html"  , level : 5,"x":34*w/72,"y":630}
];

var links = [];

// ilk  yerlesim gruplara göre ve yukaridan asagiya yapilacak
// alt leveller kapali olacak

//node.on("mouseover", function(e){
	//yeni node cikar detayli anlatim versin birkac kelime
//})

var force;// = d3.layout.force().size([w,h]).charge(-400).linkDistance(40).on("tick", tick);

var drag;// = force.drag().on("dragstart", dragstart).on("dragend", dragend);

var svg = d3.select("#chart").append("svg").attr("width", w).attr("height", h);// = d3.select("#chart").append("svg").attr("width", w).attr("height", h);

var link;// = svg.selectAll(".link");
var node;// = svg.selectAll(".node");


function initForce(){

	svg.selectAll('*').remove();

	force = d3.layout.force().size([w,h]).charge(-400).linkDistance(40).on("tick", tick);
	drag = force.drag().on("dragstart", dragstart).on("dragend", dragend);
	
	link = svg.selectAll(".link");
	node = svg.selectAll(".node");
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

	force.nodes(nodes).links(links).start();

	link = link.data(links).enter().append("line").attr("class","link");
	node = node.data(nodes).enter().append("g");

	node.append("circle")
			.attr("class", "node fixed")
			.attr("r",12)
			.attr("classed",function(d){ d.fixed=true; })
			.attr("fill",function(d){ return colors[d.level-1]; })
			.on("mouseover", function(d){ d3.select(this).style("fill","#000"); })
			.on("mouseout", function(d){ d3.select(this).style("fill",colors[d.level-1]); })//if(!d.fixed) d3.select(this).style("fill",colors[d.level-1]); else d3.select(this).style("fill", "#f00"); })
			.on("click", function(d){ if(d.address !== undefined) window.location.assign(d.address); })
			.on("dblclick", function(d){ d3.select(this).classed("fixed", d.fixed=false); })
			.call(drag);

	node.append("text")
				.text(function(d){ if((!/\s/.test(d.name))) return d.name; else return d.name; }).attr({ 
															"fill":function(d,i){ return colors[d.level-1]; },
															"text-anchor":function(d,i){ return "middle"; },//if(d.level%2==0) return "beginning"; else return "end"; },
															"font-size":function(d,i){ return "1."+(9-2*d.level)+"em"; } });

}

initForce();

function tick(){
	link
		.attr("x1", function(d){ return d.source.x; })
		.attr("y1", function(d){ return d.source.y; })
		.attr("x2", function(d){ return d.target.x; })
		.attr("y2", function(d){ return d.target.y; });
	
	node.select(".node")
		.attr("cx",function(d){ return d.x; })
		.attr("cy",function(d){ return d.y; });

	node.select("text")
		.attr("x",function(d){ return d.x; })
		.attr("y",function(d){  if(d.level<4) return d.y - 18; else return d.y + 30; });
}

function dragstart(d){
	d3.select(this).classed("fixed", d.fixed=true);
	var arr = d3.select(this).data()[0].target;
	for(var i=0;i<arr.length;i++){
		nodes[arr[i]].fixed=false;
	}
}

function dragend(d){
	var arr = d3.select(this).data()[0].target;
	for(var i=0;i<arr.length;i++){
		nodes[arr[i]].fixed=true;
	}
}

d3.select("p").on("click", function(){
	var arr = d3.selectAll(".node").data();
	for(var i=0;i<arr.length;i++){
		arr[i].fixed=false;
	}
	console.log("unfix");
})