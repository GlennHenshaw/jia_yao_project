




//function makeList(event){
//	console.log(document.getElementById("movie_title").value);
//}

var title;

d3.csv("data.csv").then(function(data){


	window.makeList = function(){

		d3.selectAll("li").remove();

		title = d3.select("#movie_title").property("value");
		console.log(title);

		var cluster = [];
        var titles = [];


        data.forEach(function(d){
    	    if (title == d.title){
    		    cluster.push(d.cluster);
    	    }

        });

	    var cluster_data = data.filter((d) => cluster.includes(d.cluster));

	

	    d3.select("#movie_list")
	      .selectAll("li")
	      .data(cluster_data)
	      .enter()
	      .append("li")
	      .text((d) => d.title);

	}
	 


});