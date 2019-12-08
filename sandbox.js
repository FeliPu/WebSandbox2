function TicTac(ele) {
  if (
    playturn == 1 &&
    document.getElementById(ele).style.backgroundColor == "green"
  ) {
    document.getElementById(ele).style.backgroundColor = "orange";
    document.getElementById(ele).innerText = "X";
    playturn = 2;
  } else if (
    playturn == 2 &&
    document.getElementById(ele).style.backgroundColor == "green"
  ) {
    document.getElementById(ele).style.backgroundColor = "blue";
    document.getElementById(ele).innerText = "O";
    playturn = 1;
  }
}

function GameReset() {
  playturn = 1;

  for (let i = 1; i < 10; i++) {
    document.getElementById(i).style.backgroundColor = "green";
    document.getElementById(i).innerText = "";
  }
  document.getElementById("start").innerText = "Restart Game";
}
