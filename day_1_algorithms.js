/*
PAGE 38 ALGORITH BOOK 
ARRAY PUSH FRONT 
function pushFront(arr, val){
    var newArr = [];
    newArr.push(val);
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(pushFront([1,2,3,4,5,6,7,8,], 0));

*/

/* SAME FUNCTION AS ABOVE SOLVED DIFFERENTLY */

function pushFront(arr, val){
    var newArr = [];
    newArr[0] = val;
    for(var i = 0; i < arr.length; i++){
        newArr[i + 1] = arr[i];
    }
    return newArr;
}

console.log(pushFront([1,2,3,4,5,6,7,8,], 0));
