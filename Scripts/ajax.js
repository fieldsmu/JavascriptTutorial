function loaded(){
	$.getJSON("http://localhost:59660/majors/list")
		.done(function(res){
				console.log(res);
				reload();
				header(res);
				display(res);
				create(res);
		});
}

function get(Id){
	$.getJSON("http://localhost:59660/majors/get/" + Id)
		.done(function(res){
				console.log(res);
				reload();
				headerSingle(res);
				displaySingle(res);
				edit(res);
		});
}

function remove(){
	var Id = document.getElementById("Id").value;
	$.getJSON("http://localhost:59660/majors/get/" + Id)
	.done(function(res){
		console.log(res);
		$.post("http://localhost:59660/majors/remove/", res.Data)
			.done(function(resp){
				console.log(resp);
				loaded();
		});
	});
}

function create(res){
	$('#create').click(function(){
		var obj = {};
		for(var item in res.Data[0]){
			obj[item] = document.getElementById(item).value;
		}
		console.log(obj);
		$.post("http://localhost:59660/majors/create/", obj)
			.done(function(res){
				console.log(res);
				loaded();
		});
	});
}

function edit(res){
	var firstTable = document.getElementById("firstTable");
	var table = document.createElement("table");
	for(var item in res.Data){
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var thText = document.createTextNode(item);
		th.appendChild(thText);
		var td = document.createElement("td");
		var input = document.createElement("input");
		input.id = item;
		input.attributes['type'] = typeof(res.Data[item]);
		td.appendChild(input);
		tr.appendChild(th);
		tr.appendChild(td);
		table.appendChild(tr);
	}
	firstTable.appendChild(table);
	for(var item in res.Data){
		$('#' + item).attr('type', typeof(res.Data[item]));
		$('#' + item).val(res.Data[item]);
		if(item === "Id"){
			$('#' + item).attr('readonly', true);
		}
	}
	var btn = document.createElement("button");
	btn.classList = "btn btn-primary";
	btn.id = "change";
	var btnText = document.createTextNode("Change");
	btn.appendChild(btnText);
	table.appendChild(btn);
	$('#change').click(function(){
		var obj = {};
		for(var item in res.Data){
			obj[item] = document.getElementById(item).value;
		}
		console.log(obj);
		$.post("http://localhost:59660/majors/change/", obj)
			.done(function(res){
				console.log(res);
				loaded();
		});
	});
}

//if object exists, display headings for that object. If not, tell the user that the data is not available
function header(res){
	var thead = document.getElementById("thead");
	var tr = document.createElement("tr");
	if(res.Data.length < 1){
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

function headerSingle(res){
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
	$('button').attr('onClick', '');
	$('button').unbind('click');
	var tbody = document.getElementById("tbody");
	res.Data.forEach(function(data){
		var tr = document.createElement("tr");
		for(var item in data){
				var td = document.createElement("td");
				var text = document.createTextNode(data[item]);
				td.appendChild(text);
				tr.appendChild(td);
		}
		var btn = document.createElement("button");
		btn.id = data.Id.toString();
		btn.classList = "btn btn-secondary";
		var jQueryBtnId = "#" + btn.id;
		var btntext = document.createTextNode("Detail");
		btn.appendChild(btntext);
		var td = document.createElement("td");
		td.appendChild(btn);
		tr.appendChild(td);
		tbody.appendChild(tr);
		$(jQueryBtnId).click(function(){
			get(data.Id);
		});
	});
	//add logic to create new major
	var firstTable = document.getElementById("firstTable");
	var table = document.createElement("table");
	for(var item in res.Data[0]){
		var tr = document.createElement("tr");
		var th = document.createElement("th");
		var thText = document.createTextNode(item);
		th.appendChild(thText);
		var td = document.createElement("td");
		var input = document.createElement("input");
		input.id = item;
		td.appendChild(input);
		tr.appendChild(th);
		tr.appendChild(td);
		table.appendChild(tr);
	}
	firstTable.appendChild(table);
	for(var item in res.Data[0]){
		$('#' + item).attr('type', typeof(res.Data[0][item]));
	}
	var removeBtn = document.createElement("button");
	removeBtn.classList = "btn btn-danger";
	removeBtn.id = "remove";
	var removebtnText = document.createTextNode("Remove");
	removeBtn.appendChild(removebtnText);
	table.appendChild(removeBtn);
	$("#remove").click(function(){
		remove();
	});
	var createBtn = document.createElement("button");
	createBtn.classList = "btn btn-primary";
	createBtn.id = "create";
	var createbtnText = document.createTextNode("Create");
	createBtn.appendChild(createbtnText);
	table.appendChild(createBtn);
	$("#create").click(function(){
		create(res);
	});
}

function displaySingle(res){
	var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    for(var item in res.Data){
        var td = document.createElement("td");
        var text = document.createTextNode(res.Data[item]);
        td.appendChild(text);
        tr.appendChild(td);
	}
	var btn = document.createElement("button");
	btn.id = res.Data.Id.toString();
	btn.classList = "btn btn-secondary";
	var jQueryBtnId = "#" + btn.id;
	var btntext = document.createTextNode("Back");
	btn.appendChild(btntext);
	var td = document.createElement("td");
	td.appendChild(btn);
	tr.appendChild(td);
	tbody.appendChild(tr);
	$(jQueryBtnId).click(function(){
		loaded();
	});
}


//once an update is made, reload the display page
function reload(){
	var body = document.getElementById("body");
	while(body.firstChild){
		body.removeChild(body.firstChild);
	}
	var table = document.createElement("table");
	table.id = "firstTable";
	table.classList = "table table-hover";
	var thead = document.createElement("thead");
	thead.id = "thead";
	thead.classList = "thead-dark";
	var tbody = document.createElement("tbody");
	tbody.id = "tbody";
	table.appendChild(thead);
	table.appendChild(tbody);
	body.appendChild(table);
}