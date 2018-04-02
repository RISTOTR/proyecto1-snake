function Snake (game){
    this.x= 10;
    this.y=10;
    this.d="right"; // default direction
    

    this.sx = 0.1; //speed
    this.sy = 0.1; // speed
    
    this.game = game;
    this.snakeSize = 10;
    this.snake= [];

    this.width=10;
    this.heigth=10;

    
}

Snake.prototype.draw =function(){
    this.game.ctx.fillStyle ="green";
    this.game.ctx.fillRect(this.x*this.snakeSize, this.y*this.snakeSize, this.snakeSize, this.snakeSize);

    this.game.ctx.strokeStyle = "darkgreen";
    this.game.ctx.strokeRect(this.x*this.snakeSize, this.y * this.snakeSize, this.snakeSize, this.snakeSize)
  
};



Snake.prototype.setListeners = function (){
    

    document.onkeydown = function (e){
        console.log('entra')
        if (e.keyCode === 39 && this.d==="right"){
            this.d === "down";
            //this.y += this.sy;
        }

        else if (e.keyCode ===39 && this.d === "down") {
            this.d === "left";
            //this.x -= this.sx;
        }

        else if ( e.keyCode === 39 && this.d === "left" ) {
            this.d === "up";
            //this.y -= this.yx;
        }

        else if (e.keyCode === 39 && this.d === "up"){
            this.d === "right";
            //this.x += this.sx;
        }

        else if (e.keyCode === 37 && this.d === "right") {
            this.d === "up";
            //this.y -= this.y;
        }

        else if (e.keyCode === 37 && this.d === "up") {
            this.d === "left";
            //this.x -= this.sx;
        }

        else if (e.keyCode === 37 && this.d === "left") {
            this.d === "down";
            //this.y += this.sx;
        }

        else /*(e.keyCode === 37 && this.d === "down")*/ {
            this.d === "right";
            //this.x += this.sx;
        }

    }.bind(this);
    
}

Snake.prototype.move = function() {
    if (this.d === "right"){
        this.x += this.sx;
    }

    else if (this.d === "down") {
        this.y += this.sy;
    }

    else if (this.d === "left") {
        this.x -= this.xy;
    }

    else /*(this.d === "up")*/ {
        this.y -= this.sy;
    }

};

/*Snake.prototype.setListeners = function () {
    document.onkeydown = function(e) {
        
        switch (e.keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
})*/
