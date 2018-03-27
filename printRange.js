function printRange(start, end, skip){
    count = [];
    for(var i = start; i < end; i+=skip ){
        count.push(i);
    }
    return count;
}

console.log(printRange(2,10,2));