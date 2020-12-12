
//VARIABLE DECLARATION
let i=0;

// COUNTER UP FUNCTION
function myUpFunction() {

i = i+1;

  document.getElementById("count").innerHTML = i ;
}

// COUNTER DOWN FUNCTION
function myDownFunction() {

i = i-1;

  document.getElementById("count").innerHTML = i ;
}

//CLICK + FUNCTION
let resultUp = document.getElementById("up");
resultUp.addEventListener("click", myUpFunction);

//CLICK - FUNCTION
let resultDown = document.getElementById("down");
resultDown.addEventListener("click", myDownFunction);
