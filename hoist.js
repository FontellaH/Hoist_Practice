// 1----------------------------------------------------------------------
console.log(hello);
var hello = 'world';

//Output hoisting

var hello = 'world';
console.log(hello); //undefined


// 2----------------------------------------------------------------------
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}

//Fixed
var needle
function test() {
    var needle = 'magnet';
    console.log(needle);
}
var needle = 'haystack';
test();  //"magnet"



// 3----------------------------------------------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//Fixed
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}

var brendan = 'super cool';
console.log(brendan);  //"super cool"






// 4----------------------------------------------------------------------

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//Fixed
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
var food = 'chicken';
console.log(food); //  'chicken'
eat();		   //  'half-chicken'





// 5----------------------------------------------------------------------

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//Output
var mean;
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean(); 
console.log(food);
console.log(food);



// 6----------------------------------------------------------------------
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//Output
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
var genre = "disco";
rewind(); //  'rock', then 'r&b'
console.log(genre); // 'disco'





// 7----------------------------------------------------------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//Output
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo); // "san jose"
learn();	   // "seattle", then logs "burbank"
console.log(dojo); // "san jose"




// 8---------------------------------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//Output
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // {name: "Chicago", students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); // returns an error,not allowed to change the code when its a const