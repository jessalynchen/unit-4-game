var Win = 0;
var Loss = 0;
var gem1 = Math.floor(Math.random()* 11 + 1);
var gem2 = Math.floor(Math.random()* 11 + 1);
var gem3 = Math.floor(Math.random()* 11 + 1);
var gem4 = Math.floor(Math.random()* 11 + 1);
var randomNumber = Math.floor(Math.random()* 101 + 19);
var totalScore = 0;
var displayWin;
var displayLoss;
var displayTarget;
var displayScore;

//link javascript to HTML
document.readyState(function(){
  $(button).click(function(){
    randomNumber = $("Target").val();
    $('#randomTarget').append("<p>" + randomNumber + "</p>")
  })
});

document.addEventListener("DOMContentLoaded", function () {
  displayWin = document.getElementById("Win");
  displayLoss = document.getElementById("Loss");
  displayTarget = document.getElementById("Target");
  displayScore = document.getElementById("Counter");
});

//link all my random number, wins, losses, and total user score to the HTML from JS
$("#row-random").html("<p id='Target'>" + displayTarget);
$("#row-random p#Target").html(displayTarget);
//link my displayWin to my Your Total Score in HTML
//link my displayLoss to my HTML id Losses
//link my displayTarget to my HTML id Target


//when any crystals are clicked then do this function
//add the gem clicked to the total score
$("#gem1").click(function(){
  totalScore = totalScore + gem1;
//display the totalScore to the Counter
  displayScore.textContent = totalScore;
  console.log(totalScore);
});

//if gem1 is clicked, check if this matches the total score
    if (totalScore === randomNumber) {
      Win = Win + 1;
      //reset randomNumber
    }
    else if (totalGems > randomNumber) {
      Lose = Lose + 1;
      //reset randomNumber
    }
  ;

$("#gem2").click(function(){
    totalScore = totalScore + gem2;
  //display the totalScore to the Counter
    displayScore.textContent = totalScore;
    console.log(totalScore);
  });

  //if gem2 is clicked, check if this matches the total score
    if (totalScore === randomNumber) {
      Win = Win + 1;
      //reset randomNumber
    }
    else if (totalGems > randomNumber) {
      Lose = Lose + 1;
      //reset randomNumber
    }
  ;

$("#gem3").click(function(){
    totalScore = totalScore + gem3;
  //display the totalScore to the Counter
    displayScore.textContent = totalScore;
    console.log(totalScore);
  });

    //if gem3 is clicked, check if this matches the total score
    if (totalScore === randomNumber) {
      Win = Win + 1;
      //reset randomNumber
    }
    else if (totalGems > randomNumber) {
      Lose = Lose + 1;
      //reset randomNumber
    }
  ;

$("#gem4").click(function(){
    totalScore = totalScore + gem4;
  //display the totalScore to the Counter
    displayScore.textContent = totalScore;
    console.log(totalScore);
  });


    //if gem4 is clicked, check if this matches the total score
    if (totalScore === randomNumber) {
      Win = Win + 1;
      //reset randomNumber
    }
    else if (totalGems > randomNumber) {
      Lose = Lose + 1;
      //reset randomNumber
    }
  ;
