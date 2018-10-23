
var ganador;
var players = [];
ProEvolutionQuidditch.levelState = function(game) {
    var game = game;
}

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {
        
    },

    create: function() {
       for(let i = 0; i<playernumber;i++){
           players[i] = new player(i,0,0,"harry",game);
       } 
       
    },

    update: function() {
        for(let i = 0; i<playernumber;i++){
            players[i].InputStage(game);
        } 
    }
}