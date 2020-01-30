// Game Business Logic

function Game() {
  this.players = []
  this.currentId = 0
}
 
Game.prototype.assignId = function () {
  this.currentId += 1; 
  return this.currentId;
}

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players.push(player);
}

// Player Business Logic

function Player(gameScore, rollScore) {
  this.gameScore = gameScore,
  this.rollScore = rollScore
}

// UI logic

var game = new Game(); 

var diceRoll = function() {
  var clickRoll = Math.floor(
  Math.random() * 6 ) +1;
  return clickRoll;
  }

function endTurn() {
  if (gameScore >= 100) {
    alert("WINNER!")
  }

}
  Player.prototype.rollOutcome = function() {
    var rolling = diceRoll(); 
      if (diceRoll != 1) {
        this.gameScore += rolling;
      } else { 
        (diceRoll == 1) 
        this.gameScore += 0;
      } 
      
      // $("#p1Score").text(gameScore);
   }

$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();

      parseInt($(".rollOutput").text(clickRoll));
      finalScore.push(clickRoll);
      $("#p1Score").append("<li>" + clickRoll + "</li>");
  })
  
  $("#button2").click(function(event) {
    event.preventDefault();

      parseInt($(".rollOutput").text(clickRoll));
      finalScore.push(clickRoll);
      $("#p2Score").append("<li>" + clickRoll + "</li>");
      
  });
});