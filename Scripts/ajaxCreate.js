function create(){
	var major = {
		Id: document.getElementById("pId").value, //server will ignore this value and assign primary key
		Description: document.getElementById("pDesc").value,
		MinSat: document.getElementById("pSat").value
	};
	$.post("http://localhost:59660/majors/create/", major)
		.done(function(res){
            console.log(res);
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