import EnemyController from "./EnemyController.js";
import Player from "./Player.js";


const canvas = document.getElementById("game");//Space where the game will be played
const ctx = canvas.getContext("2d");//CTX = Context of the game

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "images/space_background.webp";

const enemyController = new EnemyController(canvas);
const player = new Player(canvas, 3);

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    enemyController.draw(ctx); //Enemies visible
    player.draw(ctx); //Player visible
}

setInterval(game, 1000/60);