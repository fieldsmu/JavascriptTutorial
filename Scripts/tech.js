"option explicit"

var techs = [
    // { Id: 0, Name: "thing", Difficulty: "Easy" }
];

//upon load, display the data to the user
function loaded(){
    console.log("success");
    header();
    display();
}

//if object exists, display headings for that object. If not, tell the user that the data is not available
function header(){
    var thead = document.getElementById("thead");
    var tr = document.createElement("tr");
    if(techs.length === 0){
        var th = document.createElement("th");
        var text = document.createTextNode("No data available");
        th.appendChild(text);
        tr.appendChild(th);
        thead.appendChild(tr);
        return null;
    }
    for(var item in techs[0]){
        var th = document.createElement("th");
        var text = document.createTextNode(item);
        th.appendChild(text);
        tr.appendChild(th);
    }
    thead.appendChild(tr);
}

//displays the information of an object
function display(){
    var tbody = document.getElementById("tbody");
    techs.forEach(function(tech){
        var tr = document.createElement("tr");
        for(var item in tech){
            var td = document.createElement("td");
            var text = document.createTextNode(tech[item]);
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
function add(){
    tech = {
        Id: document.getElementById("pId").value,
        Name: document.getElementById("pName").value,
        Difficulty: document.getElementById("pDifficulty").value
    }
    techs.push(tech);
    reload();
}

//remove a object by the id
function remove(){
    var Id = document.getElementById("pId").value;
    var arr = [];
    techs.forEach(function(){
        var index = techs.findIndex(obj => obj.Id === Id);
        console.log(index);
        arr.push(index);
        console.log(arr);
    });
    arr = arr.sort((a, b) => b - a);
    console.log(arr);
    for(var i = 0; i < arr.length ; i++){
        techs.splice(arr[i], 1);
    }
    reload();
}