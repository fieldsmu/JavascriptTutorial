function get(){
    var id = document.getElementById("iId").value;
	$.getJSON("http://localhost:59660/majors/get/" + id)
		.done(function(res){
                console.log(res);
				reload(res);
		});
}

//if object exists, display headings for that object. If not, tell the user that the data is not available
function header(res){
	var thead = document.getElementById("thead");
	var tr = document.createElement("tr");
	if(res.Error !== null || res.Data === null){
			var th = document.createElement("th");
			var text = document.createTextNode("No data available");
			th.appendChild(text);
			tr.appendChild(th);
			thead.appendChild(tr);
			return null;
	}
	for(var item in res.Data){
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
    var tr = document.createElement("tr");
    for(var item in res.Data){
        var td = document.createElement("td");
        var text = document.createTextNode(res.Data[item]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

//once an update is made, reload the display page
function reload(res){
	var thead = document.getElementById("thead");
	while (thead.firstChild){
			thead.removeChild(thead.firstChild);
	}
	var tbody = document.getElementById("tbody");
	while (tbody.firstChild){
			tbody.removeChild(tbody.firstChild);
	}
	header(res);
	display(res);
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