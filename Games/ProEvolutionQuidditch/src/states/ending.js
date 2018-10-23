ProEvolutionQuidditch.endingState = function(game) {

}

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {
        console.log("Ending");
    },

    create: function() {
        game.add.image(0,0,'background2');
        var winner = game.add.sprite(800,300,'harry');
        winner.scale.setTo(-1,1);
        //players[ganador].character;
    },

    update: function() {

    }
}