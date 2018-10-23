ProEvolutionQuidditch.preloadState = function(game) {

}

ProEvolutionQuidditch.preloadState.prototype = {

    preload: function() {
    	//IMAGE:
    	//Backgrounds:
        game.load.image('background', '/../../assets/images/background/background.png');
        game.load.image('background2', '/../../assets/images/background/background2.png');
        game.load.image('stadium1', '/../../assets/images/background/stadium1.png');
        game.load.image('stadium2', '/../../assets/images/background/stadium2.png');
        game.load.image('stadium3', '/../../assets/images/background/stadium3.png');
        game.load.image('stadium4', '/../../assets/images/background/stadium4.png');

        //Texts:
        game.load.image('cleangame', '/../../assets/images/text/cleangame.png');
        game.load.image('loading1', '/../../assets/images/text/loading1.png');
        game.load.image('loading2', '/../../assets/images/text/loading2.png');
        game.load.image('player 1', '/../../assets/images/text/player 1.png');
        game.load.image('player2', '/../../assets/images/text/player2.png');
        game.load.image('press1', '/../../assets/images/text/press1.png');
        game.load.image('press2', '/../../assets/images/text/press2.png');
        game.load.image('return', '/../../assets/images/text/return.png');
        game.load.image('start', '/../../assets/images/text/start.png');
        game.load.image('title', '/../../assets/images/text/title.png');
        game.load.image('vs', '/../../assets/images/text/vs.png');
        game.load.image('winner', '/../../assets/images/text/winner.png');

        //Other images:
        game.load.image('draco', '/../../assets/images/draco.png');
        game.load.image('griffindor', '/../../assets/images/griffindor.png');
        game.load.image('harry', '/../../assets/images/harry.png');
        game.load.image('referee', '/../../assets/images/referee.png');
        game.load.image('slytherin', '/../../assets/images/slytherin.png');
        game.load.image('snitch', '/../../assets/images/snitch.png');
        game.load.image('trophy', '/../../assets/images/trophy.png');



		//AUDIO:
    	game.load.audio('1', '/../../assets/audio/1.ogg');
    	game.load.audio('2', '/../../assets/audio/2.ogg');
    	game.load.audio('powerUp9', '/../../assets/audio/powerUp9.ogg');
    	game.load.audio('you_win', '/../../assets/audio/you_win.ogg');


    	//MUSIC:
    	game.load.audio('bensound-creepy', '/../../assets/music/bensound-creepy.mp3');
    	game.load.audio('bensound-epic', '/../../assets/music/bensound-epic.mp3');
    	game.load.audio('bensound-happyrock', '/../../assets/music/bensound-happyrock.mp3');


    },

    create: function() {

    	this.state.start('menuState');

    },

    update: function() {

    }
}