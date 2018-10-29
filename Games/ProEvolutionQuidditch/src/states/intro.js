ProEvolutionQuidditch.introState = function (game) {

}

ProEvolutionQuidditch.introState.prototype = {

    preload: function () {

    },

    create: function () {
        game.add.sprite(0, 0, 'background2');
        game.add.sprite(278, 39, 'referee');
        game.add.sprite(120, 420, 'cleangame').scale.setTo(0.35, 0.35);

        spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(function () { game.state.start('levelState'); music.stop(); }, this);

        let music = game.add.audio("bensound-happyrock");
        music.play();
    },

    update: function () {

    }
}