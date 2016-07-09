(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('msFieldController', msFieldController);
    
    msFieldController.$inject = ['$scope', 'MinefieldService', 'MineGeneratorService', 'GameService'];
    
    function msFieldController($scope, minefield, mineGenerator, game){
        $scope.field = minefield.field;
        
        $scope.$on('fieldRegenerated', function(event,data) {
            $scope.field = minefield.field;
        });
        
        /*
        *   click event: Reveal a square
        */
        $scope.reveal = function(x, y){
            if(game.stopPlay){
                return;
            }

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
                    game.stopPlay = true;
                    break;
                default:
                    square.show = true;
                    break;
            }
        }
    }
})(angular);