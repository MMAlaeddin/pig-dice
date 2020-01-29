//back end
function Roll(){
  this.roll = roll

}

function Score(){
  this.roll = parseInt($(["" + ""]))
}
















//front end








$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    var clickRoll = Math.floor(
      Math.random() * 6 ) +1;
      $(".rollOutput").text(clickRoll);

    

  })
  
  
});