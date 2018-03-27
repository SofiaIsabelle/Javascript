
/*
function birthDay(days){
if(days >= 30){
   console.log("My birthday is so far away.");
  }
  else if( days <= 5){
    console.log("My BIRTHDAY IS JUST AROUND THE CORNER!!!");

} else if( days <= 30){
    console.log("My birthday is just around the corner!");
  }
}

console.log(birthDay(60));
*/
/*
function daysUntilMyBirthday(){
    for(var i = 0; i <= 60; i++){
        if(i >= 30){
            console.log("There are " + i + " days until my birthday. Such a long time ..... :(");
        }else if( i <= 30 && i >= 6){
            console.log("There are only " + i + " days until my birthday. Should I host a party ?");

        }else if(i <= 5 && i !== 0){
            console.log(i + " DAYS UNTIL MY BIRTHDAY!!!");
        }
        else if(i === 0){
            console.log("Happy Birthday to Me!");
        }
    }
}

console.log(daysUntilMyBirthday(60));
*/

function myBirthday(daysUntilMyBirthday){
    for(var i = daysUntilMyBirthday; i >= daysUntilMyBirthday; i-- ){
        if(i >= 30){
            console.log("There are " + i + " days until my birthday. Such a long time .... :(");
        } else if(i < 30 && i >= 6){
            console.log("There are only " + i + " days until my birthday. Should I plan something out ?");
        }else if(i <= 5 && i !== 0){
            console.log("ONLY " + i + " DAYS UNTIL MY BIRTHDAY!!!")
        }else if( i == 0){
            console.log("Happy Birthday to me!!!");
        }
    }
}

console.log(myBirthday(60));
console.log(myBirthday(29));