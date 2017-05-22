
  var totalScore = 0;
  var gameNumber = 0;
  var wins = 0;
  var losses = 0;
  var redCrystal = 0;
  var blueCrystal = 0;
  var greenCrystal = 0;
  var yellowCrystal = 0;

  //Set all numbers
  numberReset();
  updateData();

//When an image with class of crystal is selected
$(".crystal").click(function(){
  //if clause to add number
  if (this.id === "greenCrystal") {
      totalScore = totalScore + greenCrystal;
  }
  else if (this.id === "blueCrystal") {
    totalScore = totalScore + blueCrystal;
  }
  else if (this.id === "yellowCrystal") {
    totalScore = totalScore + yellowCrystal;
  }
  else if (this.id === "redCrystal") {
    totalScore = totalScore + redCrystal;
  }
  updateData();

  if (totalScore === gameNumber) {
    alert("you won");
    wins++;
    numberReset();
    updateData();

  }
  else if (totalScore > gameNumber) {
    alert("you lose");
    losses++;
    numberReset();
    updateData();

  }
})

  function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function numberReset() {
    gameNumber = randomNumber(19, 120);
    redCrystal = randomNumber(1, 12);
    blueCrystal = randomNumber(1, 12);
    greenCrystal = randomNumber(1, 12);
    yellowCrystal = randomNumber(1, 12);
    totalScore = 0;
    console.log(gameNumber);
  }

  function updateData() {
    $("#gameNumber").text(gameNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
  }
