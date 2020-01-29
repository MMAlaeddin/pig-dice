//back end

finalScore = [];

function Player1(currentScore) {
  this.currentScore = 0;
}
 function displayScore(currentScore) {
  $(".scoreP1Output").push(currentScore);
 }

Player1.prototype.updateScore = function() {
  this.currentScore += clickRoll;
  return(currentScore);

}















//front end








$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();

    var clickRoll = Math.floor(
      Math.random() * 6 ) +1;
      parseInt($(".rollOutput").text(clickRoll));
      $("#p1Score").append("<li>" + clickRoll +"</li>");
   
  })
  
  $("#button2").click(function(event) {
    event.preventDefault();

    var clickRoll = Math.floor(
      Math.random() * 6 ) +1;
      parseInt($(".rollOutput").text(clickRoll));
      $("#p2Score").append("<li>" + clickRoll +"</li>");
   
  })
});