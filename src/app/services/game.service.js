(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .factory('GameService', GameService);
    
    GameService.$inject = ['ConfigService', 'MinefieldService', '$rootScope'];

    function GameService(settings, minefield, $rootScope){
        var instance;
        
        instance = {
            self:this,
            stopPlay: false,
            flagsLeft: settings.mines,
            minesLeft: settings.mines,
            minesToPlant: settings.mines,
            firstClick: true,

            newGame: function(){
                instance.firstClick = true;
                instance.stopPlay = false;

                instance.flagsLeft = settings.mines;
                instance.minesLeft = settings.mines;
                instance.minesToPlant = settings.mines;

                minefield.generateNewField();
                $rootScope.$broadcast('fieldRegenerated');
            },

            isVictorious: function(){
                if(instance.minesLeft !== 0)
                    return false;
                
                return true;
            }
        };

        return instance;
    }
})(angular);