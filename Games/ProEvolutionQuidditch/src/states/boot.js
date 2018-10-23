var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {

}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.Arcade);
        game.state.start("preloadState");
    },

    update: function() {

    }
}