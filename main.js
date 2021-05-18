//Del 1
function one(number) {

    if (number/2===5){
        return true;
    }
    else{
        return false;
    }
}

const answer = one(10);
console.log(answer);

//Del 2
function two(number_two) {

    if (number_two-1===0){
        return true;
    }
    else{
        return false;
    }
}

const answer_two = two(1);
console.log(answer_two);

//Del 3
function three(number_three) {

    if (number_three>10){
        return true;
    }
    else{
        return false;
    }
}

const answer_three = three(11);
console.log(answer_three);

//Del 4
function four(number_four) {

    if (number_four<10){
        return true;
    }
    else{
        return false;
    }
}

const answer_four = four(9);
console.log(answer_four);

//Del 5 - Array
function fruitArray(){
    const fruits=[
        "apple",
        "mango",
        "banana"  
    ]
   
    return fruits;
   }

console.log(fruitArray());


//Del 6
function favoriteThings() {
    const favorites={
        animal:"duck",
        color:"yellow",
        food: "sushi",
        flower: "sunflowers",
        place: "Gili Trawagan, Indonesia"
    }
    
    return favorites;
}
console.log(favoriteThings());


//Del 7
const johnAge=document.getElementById("john");
const sarahAge=document.getElementById("sarah");
const button=document.getElementById("mybutton");

function whenClicked(){
    const john=parseInt(johnAge.value);
    const sarah = parseInt(sarahAge.value);

    if (john>sarah) {
        alert("John.");
    } 
    else if (john===sarah) {
        alert("Sarah and John are the same age.");
    }
    else {
        alert("Sarah.");
    }
}

button.addEventListener("click", whenClicked);






