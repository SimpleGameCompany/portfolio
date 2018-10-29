ProEvolutionQuidditch.endingState = function(game) {

}

ProEvolutionQuidditch.endingState.prototype = {

    preload: function() {
        console.log("Ending");
    },

    create: function() {
        game.add.image(0,0,'background2');
        var winner = game.add.sprite(750,250,'harry');
        winner.scale.setTo(-1,1);

        var escudo = game.add.sprite(100,250,'griffindor');

        var copa = game.add.sprite(400,340,'trophy');
        copa.anchor.x = 0.5;
        copa.anchor.y = 0.5;

        var winnerText = game.add.image(400,0,'winner');
        winnerText.anchor.x = 0.5;

        var returnText = game.add.image(400,winner.height,'return');
        returnText.anchor.x = 0.5;
        returnText.scale.setTo(0.5,0.5);

        
        //players[ganador].character;
    },

    update: function() {
        //if(spaceKey.isDown){
            //game.state.start("menuState");
        //}
    }
}