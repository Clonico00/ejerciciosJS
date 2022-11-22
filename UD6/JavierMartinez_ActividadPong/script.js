//variables globales

var ball = document.getElementById("ball");
var paddle1 = document.getElementById("paddle1");
var paddle2 = document.getElementById("paddle2");
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var ballX = 0;
var ballY = 0;
var ballSpeedX = 0;
var ballSpeedY = 0;
var paddle1Y = 0;
var paddle2Y = 0;
var score1Value = 0;
var score2Value = 0;
var paddle1Speed = 0;
var paddle2Speed = 0;

//funciones
function startGame() {
    ballX = 300;
    ballY = 200;
    ballSpeedX = 5;
    ballSpeedY = 5;
    paddle1Y = 200;
    paddle2Y = 200;
    score1Value = 0;
    score2Value = 0;
    paddle1Speed = 0;
    paddle2Speed = 0;
    setInterval(update, 1000 / 60);

}

function update() {
    moveBall();
    movePaddle1();
    movePaddle2();
    draw();

}

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX >= 590) {
        ballSpeedX = -ballSpeedX;
        score1Value++;
    }
    if (ballX <= 10) {
        ballSpeedX = -ballSpeedX;
        score2Value++;
    }
    if (ballY >= 390) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballY <= 10) {
        ballSpeedY = -ballSpeedY;
    }
    if (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + 100) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX >= 580 && ballY >= paddle2Y && ballY <= paddle2Y + 100) {
        ballSpeedX = -ballSpeedX;
    }


}

function movePaddle1() {
    paddle1Y += paddle1Speed;
    if (paddle1Y < 2) {
        paddle1Y = 2;
    }
    if (paddle1Y >= 348) {
        paddle1Y = 348;
    }

}

function movePaddle2() {
    paddle2Y += paddle2Speed;
    if (paddle2Y < 2) {
        paddle2Y = 2;
    }
    if (paddle2Y >= 348) {
        paddle2Y = 348;
    }

}

function draw() {
    ball.setAttribute("cx", ballX);
    ball.setAttribute("cy", ballY);
    paddle1.setAttribute("y", paddle1Y);
    paddle2.setAttribute("y", paddle2Y);
    score1.innerHTML = score1Value;
    score2.innerHTML = score2Value;

}

function keyDown(evt) {
    if (evt.keyCode == 38) {
        paddle1Speed = -10;
    }
    if (evt.keyCode == 40) {
        paddle1Speed = 10;
    }
    if (evt.keyCode == 17) {
        paddle2Speed = -10;
    }
    if (evt.keyCode == 18) {
        paddle2Speed = 10;
    }
}

function keyUp(evt) {
    if (evt.keyCode == 38) {
        paddle1Speed = 0;
    }
    if (evt.keyCode == 40) {
        paddle1Speed = 0;
    }
    if (evt.keyCode == 17) {
        paddle2Speed = 0;
    }
    if (evt.keyCode == 18) {
        paddle2Speed = 0;
    }
}

//eventos
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
startGame();

