// Binding data to DOM
var myColors = [
	{ width:200,
	  name:"G",
	  color:"#A57706"}, 
	{ width:210,
	  name:"H",
	  color:"#BD3613"}, 
	{ width:220,
	  name:"I",
	  color:"#D11C24"}, 
	{ width:230,
	  name:"J",
	  color:"#C61C6F"}, 
	{ width:240,
	  name:"K",
	  color:"#595AB7"}, 
	{ width:250,
	  name:"L",
	  color:"#2176C7"}];

d3.selectAll(".item")
	.data(myColors)
	.style({
		"color":"white",
		"background":function(d){
			return d.color;
		},
		"width":function(e){
			return e.width+"px";
		}
	});


d3.select("#newChart").selectAll("div")
	.data(myColors)
	.enter().append("div")
	.classed("item",true)
	.text(function(d){
		return d.name;
	}).style({
		"color":"white",
		"background":function(d){
			return d.color;
		},
		"width":function(e){
			return e.width+"px";
		}
	});