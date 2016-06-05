(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .factory('GameService', GameService);
    
    GameService.$inject = ['ConfigService', 'MinefieldService', '$rootScope'];

    function GameService(settings, minefield, $rootScope){
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
                $rootScope.$broadcast('fieldRegenerated');
            }
        };

        return instance;
    }
})(angular);