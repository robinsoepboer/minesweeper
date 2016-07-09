(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .factory('GameService', GameService);
    
    GameService.$inject = ['ConfigService', 'MinefieldService', '$rootScope'];

    function GameService(settings, minefield, $rootScope){
        var instance = {
            stopPlay: false,
            flagsLeft: settings.mines,
            minesLeft: settings.mines,
            minesToPlant: settings.mines,
            firstClick: true,

            newGame: function(){
                this.firstClick = true;
                this.stopPlay = false;

                this.flagsLeft = settings.mines;
                this.minesLeft = settings.mines;
                this.minesToPlant = settings.mines;

                minefield.generateNewField();
                $rootScope.$broadcast('fieldRegenerated');
            },

            isVictorious: function(){
                if(this.minesLeft !== 0)
                    return false;
                
                return true;
            }
        };

        return instance;
    }
})(angular);