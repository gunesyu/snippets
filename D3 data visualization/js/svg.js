d3.select("#chart")
	.append("svg")
		.attr("width", 600)
		.attr("height", 400)
		.attr("id","newSvg")
		.style("background", "#93A1A1")
		.append("rect")
			.attr("x",200)
			.attr("y", 100)
			.attr("width",200)
			.attr("height",200)
			.style("fill", "#CB4B19");

d3.select("#newSvg")
	.append("circle")
		.attr({
			"cx":300,
			"cy":200,
			"r":50
		})
		.style("fill", "#840084");