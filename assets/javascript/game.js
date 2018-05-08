var Win = 0;
var Loss = 0;
var gem1 = Math.floor(Math.random()*11+1);
var gem2 = Math.floor(Math.random()*11+1);
var gem3 = Math.floor(Math.random()*11+1);
var gem4 = Math.floor(Math.random()*11+1);

var countGems = [];
var displayWin = document.getElementById("Win");
var displayLoss = document.getElementById("Loss");
var displayTarget = document.getElementById("Target");
var counterNumber = document.getElementById("Counter");

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("gem1").onclick = function() {
    countGems.push(gem1);
    console.log(countGems);
  }
    document.getElementById("gem2").onclick = function(){
    countGems.push(gem2);
    console.log(countGems);
   }
    document.getElementById("gem3").onclick = function(){
      countGems.push(gem3);
      console.log(countGems);
   }   
    document.getElementById("gem4").onclick = function(){
      countGems.push(gem4);
      console.log(countGems); 
    }

});
    // alert("Hello World");
    // var targetNumber = Math.floor(Math.random()*101+19);
    // console.log(targetNumber);

    // function addGems () {
    //   document.getElementById("Counter") = 
      
    // $(document).ready(function() {
    //   $("#crystals").each(function(){
    //     $(this).click(function(){
    //       countGems.push($(this).val());
    //       console.log(countGems);
    //     });
     
    //   });

  
  // $("body").on("click", "#crystals",function(){
  //     alert("Hello World");
  //     var targetNumber = Math.floor(Math.random()*101+19);
  //     console.log(targetNumber);
      
  //     });

  


// document.addEventListener("DOMContentLoaded", function(){
//   getWin = document.getElementById("Win");
//   getLoss = document.getElementById("Loss");
//   getCounter = document.getElementById("Counter");
// });



//   function totalGems (){
//   }
// });

// //   })
// //     console.log(targetNumber);
// //     console.log(crystals);
    

// // });

//     // function addGems (){
//     //   for  
//     //   for every crystal clicked
//     //   add to the counterNumber
//     // }

//     // function checkInput (){
//     //   if getCounter === targetNumber {
//     //     getWin = getWin + 1;
//     //     //restart game when player wins
//     //     getWin = getWin + 1;
//     //     increaseNumber;
//     //     getCounter = 0;
        
//     //   }
//     //   else if getCounter >= targetNumber {
//     //     getLoss = getLoss + 1;
//     //     //restart game when player wins
//     //   }
      
//     //   }



// // var Counter  = $('<div>' + getCounter[i]);
// // console.log(gemNumber);



// // else {
// //   //game continues 
// // }
// // getTotal = document.getElementById("Total");


// // $("button").click(function(){
// //   $(this).counter();
// // })
// // });




// // // document.onclick = function (event) {
// // //   console.dir(event);

// //   $(#Total).text(getTotal);

// //   var counterTotal = 0;

// //   $("#crystals").on("click",".crystal-image",function(){
// //     counter += 10;
    
// //   })
// // }



// // // //add all the numbers that the user presses together
// // // var counter = 0
// // // var number = [1, 2, 10, 9]

// // // var compGen = number[Math.floor(Math.random() * number.length)];
// // // var wins = 
// // // var lose = 

// // // image on. click 

// // // //function to generate a random number for each image clicked
// // // //when on click do this event

// // // // for each time the user clicks on a image button, add the value of the crystal to the total counter. 
// // // // then use the function. 

// // // //function to check user and comp inputs
// // //     function checkInput (){
// //         if (number == compGen){
// //             wins = wins + 1;
// //             //restart courses, and run the function to generate a random number
// //         }
// //         if (number > compGen){
// //             lose = lose + 1;
// //             //restart courses, and run the function to generate a random number
// //         }
// //     }

// // //all cyrstals have a different number
// // //for each click add the image number into total number 

// // <!DOCTYPE html>
// // <html>
// // <head>
// //   <title>simple crystal game</title>

// //   <style type="text/css">

// //     .crystal-image {
// //       width: 300px;
// //       height: 300px;
// //     }
// //   </style>

// // </head>
// // <body>

// //   <h1>Number to Guess: <span id="number-to-guess"></span></h1>

// //   <!-- Note that this div is now empty. We will fill it dynamically -->
// //   <div id="crystals">
// //   </div>

// //   <!-- JAVASCRIPT  -->
// //   <!-- ========================================= -->
// //   <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

// //   <script type="text/javascript">

// //   var targetNumber = 53;

// //   $("#number-to-guess").text(targetNumber);

// //   var crystals = $("#crystals");

// //   var counter = 0;

// //   // Now for the hard part. Creating multiple crystals each with their own unique number value.

// //   // We begin by expanding our array to include four options.
// //   var numberOptions = [10, 5, 3, 7];

// //   // Next we create a for loop to create crystals for every numberOption.
// //   for (var i = 0; i < numberOptions.length; i++) {

// //     // For each iteration, we will create an imageCrystal
// //     var imageCrystal = $("<img>");

// //     // First each crystal will be given the class ".crystal-image".
// //     // This will allow the CSS to take effect.
// //     imageCrystal.addClass("crystal-image");

// //     // Each imageCrystal will be given a src link to the crystal image
// //     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

// //     // Each imageCrystal will be given a data attribute called data-crystalValue.
// //     // This data attribute will be set equal to the array value.
// //     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

// //     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
// //     crystals.append(imageCrystal);
// //   }

// //   // This time, our click event applies to every single crystal on the page. Not just one.
// //   crystals.on("click", ".crystal-image", function() {

// //     // Determining the crystal's value requires us to extract the value from the data attribute.
// //     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
// //     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
// //     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

// //     var crystalValue = ($(this).attr("data-crystalvalue"));
// //     crystalValue = parseInt(crystalValue);
// //     // We then add the crystalValue to the user's "counter" which is a global variable.
// //     // Every click, from every crystal adds to the global counter.
// //     counter += crystalValue;

// //     // All of the same game win-lose logic applies. So the rest remains unchanged.
// //     alert("New score: " + counter);

// //     if (counter === targetNumber) {
// //       alert("You win!");
// //     }

// //     else if (counter >= targetNumber) {
// //       alert("You lose!!");
// //     }
    
// //   });
