"option explicit"
function loaded(){
    var users = [
        { id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
        { id:2, username:"aa", password:"aa", lastname:"Amos", isAdmin:false, active: true },
        { id:3, username:"bb", password:"bb", lastname:"Badin", isAdmin:true, active: false },
        { id:4, username:"cc", password:"cc", lastname:"Cory", isAdmin:false, active: false },
        { id:5, username:"dd", password:"dd", lastname:"Dugan", isAdmin:true, active: true }
    ];

    var head = document.getElementById("thead");
    var _tr = document.createElement("tr");
    for(var key in users[0]){
        var _th = document.createElement("th");
        var _text = document.createTextNode(key);
        _th.appendChild(_text);
        _tr.appendChild(_th);
    }
    head.appendChild(_tr);

    var body = document.getElementById("tbody");
    users.forEach(function(user){
        var tr = document.createElement("tr");
        for(var key in user){
            var td = document.createElement("td");
            var text = document.createTextNode(user[key])
            td.appendChild(text);
            tr.appendChild(td);
        }
        body.appendChild(tr);
    });
}