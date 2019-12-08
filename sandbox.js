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
  winner();
}

function GameReset() {
  playturn = 1;

  for (let i = 1; i < 10; i++) {
    document.getElementById(i).style.backgroundColor = "green";
    document.getElementById(i).innerText = "";
  }
  document.getElementById("start").innerText = "Restart Game";
  (win1 = 0),
    (win2 = 0),
    (win3 = 0),
    (win4 = 0),
    (win5 = 0),
    (win6 = 0),
    (win7 = 0),
    (win8 = 0);

  box1state = 0;
  box2state = 0;
  box3state = 0;
  box4state = 0;
  box5state = 0;
  box6state = 0;
  box7state = 0;
  box8state = 0;
  box9state = 0;
}

function winner() {
  if (document.getElementById(1).innerText == "X" && box1state == 0) {
    win1++;
    win4++;
    win7++;
    box1state++;
  }
  if (document.getElementById(1).innerText == "O" && box1state == 0) {
    win1--;
    win4--;
    win7--;
    box1state++;
  }
  if (document.getElementById(2).innerText == "X" && box2state == 0) {
    win1++;
    win5++;
    box2state++;
  }
  if (document.getElementById(2).innerText == "O" && box2state == 0) {
    win1--;
    win5--;
    box2state++;
  }
  if (document.getElementById(3).innerText == "X" && box3state == 0) {
    win1++;
    win6++;
    win8++;
    box3state++;
  }
  if (document.getElementById(3).innerText == "O" && box3state == 0) {
    win1--;
    win6--;
    win8--;
    box3state++;
  }
  if (document.getElementById(4).innerText == "X" && box4state == 0) {
    win2++;
    win4++;
    box4state++;
  }
  if (document.getElementById(4).innerText == "O" && box4state == 0) {
    win2--;
    win4--;
    box4state++;
  }
  if (document.getElementById(5).innerText == "X" && box5state == 0) {
    win2++;
    win5++;
    win7++;
    win8++;
    box5state++;
  }
  if (document.getElementById(5).innerText == "O" && box5state == 0) {
    win2--;
    win5--;
    win7--;
    win8--;
    box5state++;
  }
  if (document.getElementById(6).innerText == "X" && box6state == 0) {
    win2++;
    win6++;
    box6state++;
  }
  if (document.getElementById(6).innerText == "O" && box6state == 0) {
    win2--;
    win6--;
    box6state++;
  }
  if (document.getElementById(7).innerText == "X" && box7state == 0) {
    win3++;
    win4++;
    win8++;
    box7state == 0;
  }
  if (document.getElementById(7).innerText == "O" && box7state == 0) {
    win3--;
    win4--;
    win8--;
    box7state++;
  }
  if (document.getElementById(8).innerText == "X" && box8state == 0) {
    win3++;
    win5++;
    box8state++;
  }
  if (document.getElementById(8).innerText == "O" && box8state == 0) {
    win3--;
    win5--;
    box8state++;
  }
  if (document.getElementById(9).innerText == "X" && box9state == 0) {
    win3++;
    win6++;
    win7++;
    box9state++;
  }
  if (document.getElementById(9).innerText == "O" && box9state == 0) {
    win3--;
    win6--;
    win7--;
    box9state++;
  }
  if (win1 == 3) {
    document.getElementById("winman").innerText = "Player one Wins!";
    playturn = 0;
  }
  if (win1 == -3) {
    document.getElementById("winman").innerText = "Player two Wins!";
    playturn = 0;
  }
  console.log(win1);
}
