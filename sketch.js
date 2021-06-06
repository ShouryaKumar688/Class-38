var gameState = 0
var playerCount;
var database;
var player,game,form;
var allPlayers;
var cars;
var car1,car2,car3,car4;


function setup(){
  createCanvas(displayWidth-30,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Start();
}

function draw(){
  if(playerCount === 4){
    game.Update(1);
  }

  if(gameState === 1){
    clear();
    game.Play();
  }

}