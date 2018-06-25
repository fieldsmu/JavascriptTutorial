function count(){
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
}
function factorial(num){
    var total = 1;
    for(var i = num; i > 1; i--){
        total = total * i;
    }
    console.log(total);
}