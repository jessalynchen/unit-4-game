//jquery web based game
//random generate a number every time the start of a Game
//cyrstals generate a Game
//add those points to our total score
//cyrstals are worth a different score
//goal is to match total score to the random number



//add all the numbers that the user presses together
var counter = 0

var number = [1, 2, 10, 9]

var compGen = number[Math.floor(Math.random() * number.length)];
var wins = 
var lose = 

//function to generate a random number for each image clicked
//when on click do this event

// for each time the user clicks on a image button, add the value of the crystal to the total counter. 
// then use the function. 

//function to check user and comp inputs
    function checkInput (){
        if (number == compGen){
            wins = wins + 1;
            //restart courses, and run the function to generate a random number
        }
        if (number > compGen){
            lose = lose + 1;
            //restart courses, and run the function to generate a random number
        }
    }

//all cyrstals have a different number
//for each click add the image number into total number 

<!DOCTYPE html>
<html>
<head>
  <title>simple crystal game</title>

  <style type="text/css">

    .crystal-image {
      width: 300px;
      height: 300px;
    }
  </style>

</head>
<body>

  <h1>Number to Guess: <span id="number-to-guess"></span></h1>

  <!-- Note that this div is now empty. We will fill it dynamically -->
  <div id="crystals">
  </div>

  <!-- JAVASCRIPT  -->
  <!-- ========================================= -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <script type="text/javascript">

  var targetNumber = 53;

  $("#number-to-guess").text(targetNumber);

  var crystals = $("#crystals");

  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  crystals.on("click", ".crystal-image", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });

  </script>
</body>
</html>
