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
    var player2=game.add.image(game.world.centerX, game.world.centerY-200, 'player 2');

        //Keys de 1,2,s
    skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    press1key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    press2key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);

        //Quitamos los sprites pertinentes.
    player2.visible = false;
    press1.visible = false;


    if (skey.isDown)
    {
        game.state.start("preloadState");
    }
    if (press1.isDown && !pressed1)
    {
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
        var playernumber=2;
        pressed1=false;
        //hacemos visibles e invisibles imágenes en funcion de la opcion
        press2.visible = false;
        player1.visible = false;
        press1.visible = true;
        player2.visible = true;
    }










    /*
        Code from example diamond burst
    */
   game.stage.backgroundColor = '#337799';
   emitter = game.add.emitter(game.world.centerX, 100, 200);
   emitter.makeParticles('diamond');
   emitter.start(false, 5000, 20);


   /*
       Code for the pause menu
   */

   // Create a label to use as a button
   pause_label = game.add.text(w - 100, 20, 'Pause', { font: '24px Arial', fill: '#fff' });
   pause_label.inputEnabled = true;
   pause_label.events.onInputUp.add(function () {
       // When the paus button is pressed, we pause the game
       game.paused = true;

       // Then add the menu
       menu = game.add.sprite(w/2, h/2, 'menu');
       menu.anchor.setTo(0.5, 0.5);

       // And a label to illustrate which menu item was chosen. (This is not necessary)
       choiseLabel = game.add.text(w/2, h-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
       choiseLabel.anchor.setTo(0.5, 0.5);
   });

   // Add a input listener that can help us return from being paused
   game.input.onDown.add(unpause, self);

   // And finally the method that handels the pause menu
   function unpause(event){
       // Only act if paused
       if(game.paused){
           // Calculate the corners of the menu
           var x1 = w/2 - 270/2, x2 = w/2 + 270/2,
               y1 = h/2 - 180/2, y2 = h/2 + 180/2;

           // Check if the click was inside the menu
           if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
               // The choicemap is an array that will help us see which item was clicked
               var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

               // Get menu local coordinates for the click
               var x = event.x - x1,
                   y = event.y - y1;

               // Calculate the choice 
               var choise = Math.floor(x / 90) + 3*Math.floor(y / 90);

               // Display the choice
               choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
           }
           else{
               // Remove the menu and the label
               menu.destroy();
               choiseLabel.destroy();

               // Unpause the game
               game.paused = false;
           }
       }
   };
    },

    update: function() {

    }
}