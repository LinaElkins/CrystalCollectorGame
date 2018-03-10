//Speduocoding:
//Page starts with a Target goal number ( 19-120)
//Have 4 Crystals with random number
    //Crystals will displayed as buttons on the page
    //Each Crystal will generates a new random number (1-12) everytime win or loss
    //Crystal's number will be hiding until player clicks it 
//When clicking any Crystal, the random number generated will be added into previous totalu ntil hits goal number or over
    //The player wins if their total score matches the random number from the beginning of the game.
    //The player loses if their score goes above the random number.
    //The game restarts whenever the player wins or loses.
    //When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


var randomResult;
var lost = 0;
var wins = 0;
var preNumber = 0;

var resetGame = function() {

$(".crystals").empty();

var images = ["assets/images/C1.jpg","assets/images/C3.png", "assets/images/C2.jpg", "assets/images/C4.jpg"]

randomResult = Math.floor(Math.random()* 102)+19;

$("#result").text("Target Number:" + randomResult);

for(var i=0; i<4; i++){

    var random = Math.floor(Math.random()* 12)+1;

    var crystal = $("<div>");
        crystal.attr({
            "class":'crystal',
            "data-random": random
        });

       crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"contain",
        "background-repeat":"no-repeat"
    
       })
    

    $(".crystals").append(crystal);
    }
}

$("#preNumber").text("Your Score:" + preNumber);

resetGame();


$(document).on("click", ".crystal", function(){
    var crystalValue = parseInt($(this).attr('data-random'));
    preNumber += crystalValue;
    $("#preNumber").text(preNumber);
    
    if(preNumber > randomResult) {
        lost++;
        $("#loss").text("Loss:" + lost);
        preNumber = 0;
        $("#preNumber").text("Your Score:" + preNumber);
        resetGame();
    }
    else if(preNumber === randomResult) {
        wins++;
        $("#win").text("Win:" + wins);
        preNumber = 0;
        $("#preNumber").text("Your Score:" + preNumber);
        resetGame();

    }
  
});
