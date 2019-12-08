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
  document.getElementById(1).style.backgroundColor = "green";
  document.getElementById(1).innerText = "";
  document.getElementById(2).style.backgroundColor = "green";
  document.getElementById(2).innerText = "";
  document.getElementById(3).style.backgroundColor = "green";
  document.getElementById(3).innerText = "";
  document.getElementById(4).style.backgroundColor = "green";
  document.getElementById(4).innerText = "";
  document.getElementById(5).style.backgroundColor = "green";
  document.getElementById(5).innerText = "";
  document.getElementById(6).style.backgroundColor = "green";
  document.getElementById(6).innerText = "";
  document.getElementById(7).style.backgroundColor = "green";
  document.getElementById(7).innerText = "";
  document.getElementById(8).style.backgroundColor = "green";
  document.getElementById(8).innerText = "";
  document.getElementById(9).style.backgroundColor = "green";
  document.getElementById(9).innerText = "";
  document.getElementById("start").innerText = "Restart Game";
}

