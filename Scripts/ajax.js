function loaded(){
	$.getJSON("http://localhost:59660/majors/list")
		.done(function(res){
				console.log(res);
				header(res);
				display(res);
		});
}

//if object exists, display headings for that object. If not, tell the user that the data is not available
function header(res){
	var thead = document.getElementById("thead");
	var tr = document.createElement("tr");
	if(res.Data.length === 0){
			var th = document.createElement("th");
			var text = document.createTextNode("No data available");
			th.appendChild(text);
			tr.appendChild(th);
			thead.appendChild(tr);
			return null;
	}
	for(var item in res.Data[0]){
			var th = document.createElement("th");
			var text = document.createTextNode(item);
			th.appendChild(text);
			tr.appendChild(th);
	}
	thead.appendChild(tr);
}

//displays the information of an object
function display(res){
	var tbody = document.getElementById("tbody");
	res.Data.forEach(function(data){
			var tr = document.createElement("tr");
			for(var item in data){
					var td = document.createElement("td");
					var text = document.createTextNode(data[item]);
					td.appendChild(text);
					tr.appendChild(td);
			}
			tbody.appendChild(tr);
	});
}

//once an update is made, reload the display page
function reload(){
	var thead = document.getElementById("thead");
	while (thead.firstChild){
			thead.removeChild(thead.firstChild);
	}
	var tbody = document.getElementById("tbody");
	while (tbody.firstChild){
			tbody.removeChild(tbody.firstChild);
	}
	header();
	display();
}

//add another object
function add(res){
	data = {
			Id: document.getElementById("pId").value,
			Name: document.getElementById("pName").value,
			Difficulty: document.getElementById("pDifficulty").value
	}
	res.Data.push(data);
	reload();
}

// $.ajax({
// 	url: "http://localhost:59660/students/list",
// 	method: "GET",
// 	headers: {
// 		"accept": "application/json;"
// 		},
// 	success: function(data) {
// 		console.log(data);
// 		}
// 	});