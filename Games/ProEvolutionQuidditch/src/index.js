game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv')
  
game.state.add('bootState', ProEvolutionQuidditch.bootState)
game.state.add('preloadState', ProEvolutionQuidditch.preloadState)
game.state.add('menuState', ProEvolutionQuidditch.menuState)
game.state.add('introState', ProEvolutionQuidditch.introState)
game.state.add('levelState', ProEvolutionQuidditch.levelState)
game.state.add('endingState', ProEvolutionQuidditch.endingState)
  
game.state.start('bootState')
