var balls;
var points;


function snitch(sizeX,sizeY,game){
    this.sizeX =sizeX;
    this.sizeY=sizeY;
    this.x;
    this.y;
    this.game=game;
    this.sprite;

    this.initBall = function(){
        this.x = Math.floor(Math.random()*sizeX);
        this.y = Math.floor(Math.random()*sizeY);
        this.sprite = game.add.sprite(this.x,this.y,'snitch');
        this.sprite.anchor.set(0.5);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
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
var pointsmasmas = function(player){
    if(points[player]!= null){
        points[player]++;
    }else{
        points[player] =1;
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
            for(var j =0;j<characters.length; j++){
                game.physics.arcade.collide(characters[j],balls[i].sprite,function(){pointsmasmas(j);},null,this);
            }
            
        }
    }
    
  
    
}
/*
var s = new snitches(2,50,50,"50");
s.initFirst();
s.newBall();
*/