
var wins = 0;
var losses = 0;

$(document).ready(function () {
  console.log(wins);
  function winner() {
    console.log("win clicked");
    wins++;
    console.log(wins);
  }
  function loser() {
    console.log("loser clicked");
    losses++;
    console.log(losses);
  }
  $("#evanston").on("click", winner)
  $("#foote").on("click", winner)
  $("#m").on("click", winner)
  $("#1993").on("click", winner)
  $("#chicago").on("click", loser)
  $("#moon").on("click", loser)
  $("#california").on("click", loser)
  $("#cobra").on("click", loser)
  $("#charlotte").on("click", loser)
  $("#joseph").on("click", loser)
  $("#terminator").on("click", loser)
  $("#felix").on("click", loser)
  $("#charles").on("click", loser)
  $("#1985").on("click", loser)
  $("#2001").on("click", loser)
  $("#1990").on("click", loser)



})


setTimeout(thirtyseconds, 1000 * 0);
setTimeout(twentyseconds, 1000 * 10);
setTimeout(tenseconds, 1000 * 20);
setTimeout(fiveseconds, 1000 * 25);
setTimeout(timeUp, 1000 * 30);

function thirtyseconds() {
  $("#time-left").html("<h2> 30 Seconds Left!</h2>");
  console.log("30 seconds left");
}
function twentyseconds() {
  $("#time-left").html("<h2> 20 Seconds Left!</h2>");
  console.log("20 seconds left");
}
function tenseconds() {
  $("#time-left").html("<h2> 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}
function fiveseconds() {
  $("#time-left").html("<h2> 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}
function timeUp() {
  $("#time-left").html("<h2> Time's Up!</h2>");
  alert("total correct answers: " + wins);
  alert("total incorrect answers: " + losses);
  console.log("time is up");
}


