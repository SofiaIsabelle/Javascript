var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

for(var key of students){
    console.log(key.first_name +" "+ key.last_name);
}

// console.log(students[0].first_name);  Prints out Michael

//This logs out the index of each of the objects within the array :
for( var x in students){
    console.log(x);
}

//Grabs the object at each of the indexies in the array :
for( var x in students){
    console.log(students[x].first_name + " " + students[x].last_name);
}


for(var i = 0; i < students.length; i++){
    console.log(students[i].first_name + " " + students[i].last_name);
}