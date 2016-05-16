window.app.factory('GameService', ['ConfigService', 'MinefieldService', function(settings, minefield) {
    var instance = {
        gameOver: false,
        minesLeft: settings.mines,
        minesToPlant: settings.mines,
        firstClick: true,
         
        newGame: function(){
            this.firstClick = true;
            this.gameOver =  false;
            
            this.minesLeft = settings.mines;
            this.minesToPlant = settings.mines;
            
            minefield.generateNewField();
        }
    };
    
    return instance;
}]);