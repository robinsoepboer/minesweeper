(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('MinefieldController', MinefieldController);
    
    MinefieldController.$inject = ['$scope', 'MinefieldService', 'MineGeneratorService', 'GameService'];
    
    function MinefieldController($scope, minefield, mineGenerator, game){
        $scope.field = minefield.field;
        
        $scope.$on('fieldRegenerated', function(event,data) {
            $scope.field = minefield.field;
        });
        
        /*
        *   click event: Reveal a square
        */
        $scope.reveal = function(x, y){
            if(game.firstClick){
                mineGenerator.generateMines(x, y);
                game.firstClick = false;
            }

            var square = minefield.getSquare(x, y); 

            if(square.flagPlanted)
                return;

            switch(square.value){
                case 0:
                    minefield.revealOpenField(x, y);
                    break;
                case -1:
                    square.show = true;
                    game.gameOver = true;
                    break;
                default:
                    square.show = true;
                    break;
            }
        }
    }
})(angular);