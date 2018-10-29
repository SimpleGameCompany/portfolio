function player (id,x,y,character, game){
    this.puntuacion = 0;
    this.id = id;
    this.x = x;
    this.y = y;
    this.character = character;
    this.phaserObject = game.add.sprite(x,y,character);
    
    this.up    = game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.down  = game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.left  = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.right = game.input.keyboard.addKey(Phaser.Keyboard.D);
    game.physics.enable(this.phaserObject, Phaser.Physics.ARCADE);
    
    
    this.InputStage = function(game){
        if (this.up.isDown)
        {
            game.physics.arcade.accelerationFromRotation(this.phaserObject, 200, this.phaserObject.body.acceleration);
        }
        else
        {
            this.phaserObject.body.acceleration.set(0);
        }
    
        if (this.left.isDown)
        {
            this.phaserObject.body.angularVelocity = -300;
        }
        else if (this.right.isDown)
        {
            this.phaserObject.body.angularVelocity = 300;
        }
        else
        {
            this.phaserObject.body.angularVelocity = 0;
        }
    }
}