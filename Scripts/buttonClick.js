"option strict"
console.log("success");

function clicked(){
    //this statement gets access to the input box
    var inputCtrl = document.getElementById("thetext");
    //this statement gets access to the label
    var labelCtrl = document.getElementById("thelabel");
    //this statement puts the value of the input into the label
    labelCtrl.textContent = inputCtrl.value;
}
function getOp(){
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var arr = [op1Ctrl, op2Ctrl];
    return arr;
}
function add(btn){
    var arr = getOp();
    document.getElementById("answer").textContent = Number(arr[0].value) + Number(arr[1].value);
}
function subtract(btn){
    var arr = getOp();
    document.getElementById("answer").textContent = Number(arr[0].value) - Number(arr[1].value);
}
function multiply(btn){
    var arr = getOp();
    document.getElementById("answer").textContent = Number(arr[0].value) * Number(arr[1].value);
}
function divide(btn){
    var arr = getOp();
    document.getElementById("answer").textContent = Number(arr[0].value) / Number(arr[1].value);
}