function deleteNth(arr, limit){
    var results = [],
    counter = {};

    for(var i = 0; i < arr.length; i++){
        if(counter[arr[i]]){
            counter[arr[i]]++;
        }
        else{
            counter[arr[i]] = 1;
        }
        if(counter[arr[i]] <= limit) results.push(arr[i]);
    }
        return results;
}

console.log(deleteNth([20,37,20,21], 1)); // [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2])