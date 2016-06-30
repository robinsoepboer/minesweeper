(function(){
    'use strict';
    
    angular
        .module('minesweeper')
        .factory('UltimateModeService', UltimateModeService);
     
    UltimateModeService.$inject = ['$window', 'ConfigService', 'GameService'];
    
    function UltimateModeService($window, config, game){
        var originalSettings = {};
        
        var instance = {
            start: function(){
                var square = 16;
                
                originalSettings = {
                    mines: config.mines,
                    width: config.width,
                    height: config.height
                };
                
                config.width = Math.floor($window.innerWidth / square);
                config.height = Math.floor($window.innerHeight / square);
                
                var total = config.width * config.height;
                
                config.mines = total * config.ultimateModeMinesRatio;
                                
                game.ultimateMode = true;
                game.newGame();
            },
            
            backToNormal: function(){
                
                game.ultimateMode = false;
            }
        }
        
        return instance;
    }
})();