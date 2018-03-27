var names = [ "James", "Jill", "Jane", "Jack" ];

function printNames(newArray){
    for(var i = 0; i < newArray.length; i++ ){
        console.log(i + '->' + newArray[i]);
    }
}

printNames([ "James", "Jill", "Jane", "Jack" ]); // is the same as line 10 below:
printNames(names);