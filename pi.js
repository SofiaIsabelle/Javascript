"use strict";
//One way to write a function:
function circleArea1(r){
    var PI = 3.14;
    return PI * r * r;
}

console.log(circleArea1(7));

//Another way to write the same function:
let circleArea2 = (r) => {
    var PI = 3.14;
    return PI * r * r;
}

console.log(circleArea2(7));

//Third way to run a function:
let circleArea3 = r => 3.14 * r * r;

console.log(circleArea3(7));