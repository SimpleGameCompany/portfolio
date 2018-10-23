ProEvolutionQuidditch.preloadState = function(game) {
    var game = game;
}

ProEvolutionQuidditch.preloadState.prototype = {

    preload: function() {
        
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.Arcade);
        game.state.start("preloadState");

    },

    update: function() {

    }
}