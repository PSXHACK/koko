ball = document.getElementById("ball");
let up = 0;
let gameTime = 60;

ball.onclick = function () {
    ball.style.top = (85 * Math.random()) + "%";
    ball.style.left = (85 * Math.random()) + "%"
    up++;
    document.getElementById("score").innerHTML = "Score: " + up;
    if (up == 2) {
        ball.style.width = "19" + "%";
    }
    if (up == 4) {
        ball.style.width = "18" + "%";
    }
    if (up == 6) {
        ball.style.width = "17" + "%";
    }
    if (up == 8) {
        ball.style.width = "16" + "%";
    }
    if (up == 10) {
        ball.style.width = "15" + "%";
    }
    if (up == 11) {
        ball.style.width = "14" + "%";
    }
    if (up == 12) {
        ball.style.width = "13" + "%";
    }
    if (up == 13) {
        ball.style.width = "12" + "%";
    }
    if (up == 20) {
        ball.style.width = "11" + "%";
    }
    if (up == 30) {
        ball.style.width = "10" + "%";
    }
}

let gameTimer = setInterval(function () {
    gameTime--;

    document.getElementById("timer").innerHTML = "Time left: " + gameTime + "s";

    if (gameTime === 0) {
        document.getElementById("score").innerHTML = "Score: 0";
        clearInterval(gameTimer);
        window.alert("Game over! Your final score is: " + up);
        if (confirm("Restart Game?")) {
            location.reload();
        }else{
            location.reload();
        }
    }
}, 1000);