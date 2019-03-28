var wins = 0;
var losses = 0;
var score = "";
var targetscore = Math.floor((Math.random() * 12) + 1);

$("#targetnumber").html('HELLO I AM YOUR RANDOM NUMBER');

// Generates 4 random numbers every time the browser is refreshed.
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 12);
    console.log(random);
}