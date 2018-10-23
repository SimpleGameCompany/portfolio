var playernumber=1;

ProEvolutionQuidditch.menuState = function(game) {

}

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        
    },

    create: function() {

        //Botones
        var skey;
        var press1key;
        var press2key;

        //Booleano para cambiar entre un jugador o dos
        var pressed1 = true;

        //Imagen de fondo
    game.stage.backgroundColor = "#4488AA";
    //Fondo de pantalla
    game.add.image(game.world.centerX, game.world.centerY, 'background');
    //Dos jugadores
    var press1= game.add.image(game.world.centerX, game.world.centerY -1000, 'press1');
    var press2= game.add.image(game.world.centerX, game.world.centerY -1000, 'press2');
    //Jugador pulsa S
    var start=game.add.image(game.world.centerX, game.world.centerY-200, 'start');
    //Indicador de os jugadores en partida
    var player1=game.add.image(game.world.centerX, game.world.centerY-200, 'player 1');
    var player2=game.add.image(game.world.centerX, game.world.centerY-200, 'player2');

        //Keys de 1,2,s
    skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    press1key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    press2key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);

        //Quitamos los sprites pertinentes.
    player2.visible = false;
    press1.visible = false;

        //Interaccion de botones
    if (skey.isDown)
    {
        game.state.start("levelState");
    }
    if (press1.isDown && !pressed1)
    {
        console.log("switched from 2 players to 1 player.");

        var playernumber=1;
        pressed1=true;
        //hacemos visibles e invisibles imágenes en funcion de la opcion
        press2.visible = true;
        player1.visible = true;
        press1.visible = false;
        player2.visible = false;
    }
    if (press2.isDown && pressed1)
    {
        console.log("switched from 1 player to 2 players.");
        var playernumber=2;
        pressed1=false;
        //hacemos visibles e invisibles imágenes en funcion de la opcion
        press2.visible = false;
        player1.visible = false;
        press1.visible = true;
        player2.visible = true;
    }
   
    },

    update: function() {

    }
}