
var wins = 0;
var losses = 0;

$("#Evanston").on("click", correct)
function correct() {
    wins + 1 ;
    console.log(wins);
}


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
    console.log("time is up");
  }


