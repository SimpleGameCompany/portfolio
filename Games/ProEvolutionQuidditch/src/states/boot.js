var ProEvolutionQuidditch = {}

ProEvolutionQuidditch.bootState = function(game) {
    var game = game
}

ProEvolutionQuidditch.bootState.prototype = {

    preload: function() {
        //Prepare images for preload screen:
        game.load.image('background', '/../../assets/images/background/background.png');        
        game.load.image('loading1', '/../../assets/images/text/loading1.png');
    },

    create: function() {
        game.physics.startSystem(Phaser.Physics.Arcade);
        game.state.start("preloadState");
    },

    update: function() {

    }
}