var numbersOnly = function(items){
    //placeholder array that will hold all numeric values after the type has been determined.
    var placeHolder = [];

    // a simple for loop that will go through each of the items and check what it is, we know how to loop based on the number of item
    for(var i = 0; i < items.length; i++){
        if(typeof items[i] == 'number'){
            placeHolder.push(items[i]);
        }
    }
    //finally , we return the placeholder array since it has all of its values sorted
    return placeHolder;
}

console.log(numbersOnly([1,2,3, "blur blur blue", 10, "hello"]));