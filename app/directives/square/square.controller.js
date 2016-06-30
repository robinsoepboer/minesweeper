(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('SquareController', SquareController);
    
    SquareController.$inject = ['$scope', 'MinefieldService', 'GameService'];
                    
    function SquareController($scope, minefield, game){
        var self = this;
        
        /*
        *   Function used in ng-class directive, determines which class a square should receive
        */
        $scope.determineClass = function(x, y){
            var square = minefield.getSquare(x, y);

            if(square.flagPlanted){
                return 'flag';
            }

            if(game.gameOver && square.value === -1 && !square.show){
                return 'mine unexploded';
            }

            if(!square.show)
                return '';   

            else if(square.value === -1){
                return 'mine';
            }
            return 'open open-' + square.value.toString();
        }
        
        /*
        *   Rightclick event: plants a flag on a square
        */
        $scope.plantFlag = function(x, y){
            var square = minefield.getSquare(x, y);

            if(square.show)
                return;

            if(!square.flagPlanted){
                square.flagPlanted = true;
                game.minesLeft--;
            } else {
                square.flagPlanted = false;
                game.minesLeft++;
            }
        }
             
        /*
        *   Determines whether or not the square's value will be displayed (mines and open field will not have their value displayed)
        */
        $scope.displayText = function(x, y){
            var square = minefield.getSquare(x, y);
            return square.show && square.value > 0 && !square.flagPlanted ? square.value.toString() : '';   
        }   
    }
    
})(angular)