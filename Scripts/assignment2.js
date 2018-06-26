"option explicit"

var students = [
    { id:0, name:"test", gpa:3.5, sat:1000, year:"Senior" }
];

function loaded(){
    console.log("success"); 
    header();
    display();
}

function header(){
    var head = document.getElementById("thead");
    var _tr = document.createElement("tr");
    for(var key in students[0]){
        var _th = document.createElement("th");
        var _text = document.createTextNode(key);
        _th.appendChild(_text);
        _tr.appendChild(_th);
    }
    head.appendChild(_tr);
}

function display(){
    var tbody = document.getElementById("tbody");
    students.forEach(function(student){
        var tr = document.createElement("tr");
        for(var key in student){
            var td = document.createElement("td");
            var text = document.createTextNode(student[key])
            td.appendChild(text);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

function add(){
    var stud = {
        id: document.getElementById("pId").value,
        name: document.getElementById("pName").value,
        gpa: document.getElementById("pGpa").value,
        sat: document.getElementById("pSat").value,
        year: document.getElementById("pYear").value
    }
    students.push(stud);
    var tbody = document.getElementById("tbody");
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    display();
}