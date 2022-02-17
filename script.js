console.log("Hello World")

//variables
const FPS = 30
let ballSize = 30
let ballX, ballY, velocityX, velocityY
let canvas, context

canvas = document.getElementById("gameCanvas")
context = canvas.getContext("2d")

//gameloop
setInterval(update, 1000/FPS)

//ball starting position
ballX = canvas.width / 2
ballY = canvas.height / 2

//random ball starting speed
velocityX = Math.floor(Math.random * 101 + 100)/ FPS
velocityY = Math.floor(Math.random * 101 + 100) / FPS

//update function
const update = () => {
    //move ball
    ballX == velocityX
    ballY == velocityY

    //draw background and ball
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)

}