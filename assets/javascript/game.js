window.onload = function() {

var wins = 0;
var losses = 0;
var score = 0;
var targetScore;

//Creates a reusable function that we can call on later.
var gameStart = function () {

//Array for the crystal images.
    var images = [
        'assets/images/blue.png',
        'assets/images/purple.jpg',
        'assets/images/green.png',
        'assets/images/red.png'
    ];

//Resets the crystals and prevents the error or creating more 
//crystals after the game is reset.
$(".crystals").empty();

//Generates a random target number that the player must reach in order to win.
targetScore = Math.floor((Math.random() * 31) + 50);
    // testing console.log(targetScore);
    
//Displays the target number on the page.    
$("#targetnumber").html('Your Target Number Is: ' + targetScore);

// Generates 4 random numbers every time the browser is refreshed.
for(var i = 0; i < 4; i++){
    var random = Math.floor((Math.random() * 13) + 2);
    //testing console.log(random);


//Makes 4 crystal divs with the class of "crystal" and each crystal is assigned 
//a random number.
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

//Gives the crystal divs a background image which it gets from the 
//variable image array and indexes through it.
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        })

    $(".crystals").append(crystal);
}
}

//Calls the Game Start function.
gameStart();


//When each crystal is clicked, the console logs the corresponding number.
$(document).on('click', '.crystal', function () {

//Converts the randomly generated numbers that correspond to each crystal from
//strings to numbers to they can be operated on.
    var number = parseInt($(this).attr('data-random'));

//After the string is converted to a number, the crystal numbers are added to
//to the total score each time they are clicked.
    score += number;

//Displays and updates the total score as crystals are clicked.
    $("#totalscore").html("Total Score: " + score);

//Conditional logic for score keeping.
//If the user score is more than the target score, the user loses,
//loss counter goes up by one,
//the score resets and the game starts again.
//Same thing happens when the user hits the target score.

    if(score > targetScore){
        console.log("You lost!");
        losses++;
        $("#losses").html("Losses: " + losses);
        score = 0;
        gameStart();
    }
    else if(score === targetScore){
        console.log("You win!");
        wins++;
        $("#wins").html("Wins: " + wins);
        score = 0;
        gameStart();
    }
    

});
};

