var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

$(window).load(function(){
	if (document.getElementById("obj_canvas") != null){
		console.log("canvas found: " + QueryString.url);
		var svgObj = document.createElement('object');
		svgObj.setAttribute("data", QueryString.url);
		svgObj.setAttribute("type", "text/html");
		svgObj.setAttribute("width", "100%")
		svgObj.setAttribute("height", "100%")
		document.getElementById("obj_canvas").appendChild(svgObj)
	}
});

function go_to_page(page){
	console.log("goto called");
	window.open("test.html?url="+page);
}