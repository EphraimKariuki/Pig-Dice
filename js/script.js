// business logic
function PigDice(players, score, turnTotal){
  this.players: "players";
  this.score: "score";
  this.turnTotal: "turnTotal";
}
function Game(){
  if (input = "hold") {
    PigDice.score.push(PigDice.turnTotal);
  }else if ((input>1) && (input <= 6)){
    PigDice.turnTotal.push(input);
    alert("It's still your turn!");
  } else if (input= 1){
    PigDice.score.push("0");
    alert("Oops! Next players turn!");
  } else if (input < 1){
    return alert("Enter a number");
  }
$(document).ready(function(){
});
