(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('ngGameOptionsController', ngGameOptionsController);
    
    ngGameOptionsController.$inject = ['ConfigService', 'GameService', 'UltimateModeService'];
                    
    function ngGameOptionsController(config, game, ultimateModeService){
        var self = this;
        
        self.show = false;
        self.difficulties = config.difficulties;
        self.selectedDifficulty = config.difficulties[0];
        
        self.toggleDialog = function(){
            self.show = !self.show;
        }
        
        self.newGame = function(){
            config.mines = self.selectedDifficulty.mines;
            config.height = self.selectedDifficulty.height;
            config.width = self.selectedDifficulty.width;

            game.newGame();
            self.show = false;
        }
        
        self.selectDifficulty = function(difficulty){            
            if(difficulty.name === 'custom'){
                config.difficulties = difficulty;
            }
            
            self.selectedDifficulty = difficulty;
        }
        
        self.startUltimateMode = function(){
            ultimateModeService.start();
        }
    }
    
})(angular)