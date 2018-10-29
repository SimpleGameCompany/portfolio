var playernumber=1;


        //Botones
        var skey;
        var press1key;
        var press2key;

        //Booleano para cambiar entre un jugador o dos
        var pressed1 = true;

        var press1;
        var press2;
        var start;
        var player1;
        var player2;
ProEvolutionQuidditch.menuState = function(game) {

}

var music;
var oneSound;
var twoSound;

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {
        
    },

    create: function() {



        //Imagen de fondo
    game.stage.backgroundColor = "#4488AA";
    //Fondo de pantalla
    game.add.image(0, 0, 'background');
    //Dos jugadores
    press1= game.add.image(game.world.centerX, game.world.centerY+100, 'press1');
    press2= game.add.image(game.world.centerX, game.world.centerY +100, 'press2');
    press1.anchor.x = 0.5;
    press1.anchor.y = 0.5;
    press2.anchor.x = 0.5;
    press2.anchor.y = 0.5;
    //Jugador pulsa S
    start=game.add.image(game.world.centerX, game.world.centerY+150, 'start');
    start.anchor.x = 0.5;
    start.anchor.y = 0.5;
    //Comentario.
    //Indicador de los jugadores en partida
    player1=game.add.image(game.world.centerX, game.world.centerY+200, 'player 1');
    player1.anchor.x = 0.5;
    player1.anchor.y = 0.5;
    player2=game.add.image(game.world.centerX, game.world.centerY+200, 'player2');
    player2.anchor.x = 0.5;
    player2.anchor.y = 0.5;
        //Keys de 1,2,s
    skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    press1key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    press2key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);

        //Quitamos los sprites pertinentes.
    player2.visible = false;
    press1.visible = false;
   
    music = game.add.audio("bensound-creepy");
    music.play();

    oneSound = game.add.audio("1");
    twoSound = game.add.audio("2");

    },

    update: function() {

    //Interaccion de botones
    if (skey.isDown)
    {
        game.state.start("introState");
        music.stop();
    }
    if (press1key.isDown && !pressed1)
    {
        console.log("switched from 2 players to 1 player.");

        oneSound.play();
        var playernumber=1;
        pressed1=true;
        //hacemos visibles e invisibles imágenes en funcion de la opcion
        press2.alpha = 1;
        player1.visible = true;
        press1.visible = false;
        player2.visible = false;
    }
    if (press2key.isDown && pressed1)
    {
        console.log("switched from 1 player to 2 players.");

        twoSound.play();
        var playernumber=2;
        pressed1=false;
        //hacemos visibles e invisibles imágenes en funcion de la opcion
        press2.alpha = 0;
        player1.visible = false;
        press1.visible = true;
        player2.visible = true;
    }
        }
}