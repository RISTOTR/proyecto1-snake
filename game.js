function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.reset();

}

Game.prototype.start = function(){
    this.interval = setInterval (function() {
    this.clear();
    this.moveAll();
    this.draw();
    }.bind(this),1000/60);
}

Game.prototype.stop = function () {
    clearInterval(this.interval)
};

Game.prototype.gameOver = function(){

}

Game.prototype.reset = function(){
    this.background = new Background (this);
    this.snake = new Snake (this);
};

Game.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function(){
    this.background.draw();
    this.snake.draw();
};

Game.prototype.moveAll = function() {
    this.snake.move();
};

