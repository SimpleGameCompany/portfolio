var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {
    var game = game
}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        console.log("Boot");
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.Arcade);
        game.state.start("preloadState");
    },

    update: function() {

    }
}