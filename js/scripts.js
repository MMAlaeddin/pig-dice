function Player(currentScore, finalScore) {
  this.currentScore = currentScore,
  this.finalScore += clickRoll
}

var finalScore = [];
var sum = 0;
// for (var i = 0; i <= finalScore.length; i ++) {
//   finalScore += clickRoll;



//front end


$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();

    var clickRoll = Math.floor(
      Math.random() * 6 ) +1;
      parseInt($(".rollOutput").text(clickRoll));
      finalScore.push(clickRoll);
      $("#p1Score").append("<li>" + clickRoll + "</li>");
   

   

  })
  
  $("#button2").click(function(event) {
    event.preventDefault();

    var clickRoll = Math.floor(
      Math.random() * 6 ) +1;
      parseInt($(".rollOutput").text(clickRoll));
      finalScore.push(clickRoll);
      $("#p2Score").append("<li>" + clickRoll + "</li>");
      
  });
});