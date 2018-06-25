"option strict"
function getlabel(){
    var labelCtrl = document.getElementById("label");
    var total = Number(labelCtrl.textContent);
    return obj = {labelCtrl, total};
}
function display(obj){
    var styleCtrl = obj.labelCtrl.style;
    // --- How to use the ternary operator ---
    //(true/false statement) ? (if true) : (if false);
    (obj.total % 2 === 0 && obj.total !== 0) ? styleCtrl.color = "red" : styleCtrl.color = "black";
    (obj.total % 3 === 0 && obj.total !== 0) ? styleCtrl.fontWeight = "bold" : styleCtrl.fontWeight = "normal";
    (obj.total % 7 === 0 && obj.total !== 0) ? styleCtrl.fontStyle = "italic" : styleCtrl.fontStyle = "normal";
    obj.labelCtrl.innerHTML = obj.total;
}
function add(){
    var obj = getlabel();
    obj.total++;
    display(obj);
}
function subtract(){
    var obj = getlabel();
    obj.total--;
    display(obj);
}