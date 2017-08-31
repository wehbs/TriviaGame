$(document).ready(function() {


var showGame = $("#visibleGame");









// BUTTON ACTIONS
// ===========================================================
$("#startGame").on("click", function() {
  startGame();
})

$("#doneGame").on("click", function() {
  // startGame();
})



function startGame() {
  $("#startGame").replaceWith(showGame);
}











// Build a countdown timer.

// The game ends when the time runs out.

// The page will reveal the number of questions that players answer correctly and incorrectly.

// Don't let the player pick more than one answer per question.



















});
