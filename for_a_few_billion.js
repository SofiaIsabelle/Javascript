function doubleIt(){
    var pay = 0.01;
    for(var i = 1; i <= 30; i++){
        pay *= 2;
        console.log(pay); // To find out what's going on in the for loop 
    }
    return pay;

}

console.log(doubleIt());