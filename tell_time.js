

function tellTime(HOUR, MINUTE, PERIOD){
    if(MINUTE >= 30 && PERIOD == "AM" ){
        console.log("It's almost " + (HOUR+1) + " in the morning");
    }else if(MINUTE <= 30 && PERIOD == "AM"){
        console.log("It's just after " + (HOUR) + " in the morning");
    }else if(MINUTE >= 30 && PERIOD == "PM"){
        console.log("It's almost " + (HOUR+1) + " in the evening");
    }else if(MINUTE <= 30 && PERIOD == "PM"){
        console.log("It's just after " + (HOUR) + " in the evening");
    }
}

console.log(tellTime(8, 50, "AM"));
console.log(tellTime(7, 15, "PM"));

