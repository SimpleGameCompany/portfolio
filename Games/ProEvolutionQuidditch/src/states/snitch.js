var balls;

function snitch(sizeX,sizeY,game){
    this.sizeX =sizeX;
    this.sizeY=sizeY;
    this.x;
    this.y;
    this.game=game;

    this.initBall = function(){
        this.x = Math.floor(Math.random()*sizeX);
        this.y = Math.floor(Math.random()*sizeY);
        game.add.
    }

    this.resetBall = function(){
        this.x = Math.floor(Math.random()*sizeX);
        this.y = Math.floor(Math.random()*sizeY);
    }
    this.handleCollision= function (characters){
        for(var i =0; i< characters.length;i++){
            
        }
    }

}


function snitches (characters,sizeX,sizeY,game){
    this.characters= characters;
    this.sizeX = sizeX;
    this.sizeY =sizeY;
    this.game= game;
    
    this.initFirst = function(){
        snitche = new snitch(sizeX,sizeY,game);
        balls = [snitche];
        balls[0].resetBall();
    }   
    
    this.newBall= function(){
        snitche = new snitch(sizeX,sizeY,game);
        balls[balls.length] = snitche;
        balls[balls.length-1].resetBall();
    }

    this.handleCollisions = function(){
        for(var i =0;i<balls.length; i++){
            balls[i].handleCollision(characters);
        }
    }
  
    
}

var s = new snitches(2,50,50,"50");
s.initFirst();
s.newBall();
