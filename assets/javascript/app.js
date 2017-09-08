$(document).ready(function() {
  // GLOBAL VARIABLES
  // ===========================================================
  var showGame = $("#visibleGame");
  var showEndGame = $("#visibleEndGame");
  var time = 40;
  var intervalId;

  // COUNTERS
  // ===========================================================
  var correct = 0;
  var incorrect = 0;
  // var unanswered = 0;

  // BUTTON ACTIONS
  // ===========================================================
  $("#startGame").on("click", function() {
    startGame();
  })

  $("#doneGame").on("click", function() {
    doneGame();
  })

  // BEGIN GAME
  // ===========================================================
  function startGame() {
    // Transition to questions element
    $("#startGame").replaceWith(showGame);
    // Start Timer
    intervalId = setInterval(function() {
      time--;
      $("#timer").html("Time Remaining: " + time);
      if (time == 0) {
        doneGame();
      }
    }, 1000);
  }

  // END GAME
  // ===========================================================
  function doneGame() {

    clearInterval(intervalId);

    if ($("#correct1").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct2").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct3").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct4").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct5").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct6").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct7").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correct8").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    // Transition to correct/incorrect element
    $("#visibleGame").replaceWith(showEndGame);

    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
    // $("#unanswered").html(unanswered);
  }


  // TODO: The page will reveal the number of questions that players leave unanswered.


});
