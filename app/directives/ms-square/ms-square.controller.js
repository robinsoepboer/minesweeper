(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('msSquareController', msSquareController);
    
    msSquareController.$inject = ['$scope', 'MinefieldService', 'GameService'];
                    
    function msSquareController($scope, minefield, game){
        var ctrl = this;
        
        /*
        *   Function used in ng-class directive, determines which class a square should receive
        */
        ctrl.determineClass = function(x, y){
            var square = minefield.getSquare(x, y);

            if(square.flagPlanted){
                if(game.stopPlay && square.value !== -1){
                    return 'flag flag-wrong';
                }

                return 'flag';
            }

            if(game.stopPlay && square.value === -1 && !square.show){
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
        ctrl.plantFlag = function(x, y){
            var square = minefield.getSquare(x, y);

            if(square.show)
                return;

            if(game.stopPlay)
                return;

            if(!square.flagPlanted){
                square.flagPlanted = true;
                game.flagsLeft--;

                if(square.value === -1)
                    game.minesLeft--;

            } else {
                square.flagPlanted = false;
                game.flagsLeft++;

                if(square.value === -1)
                    game.minesLeft++;

            }
        }
             
        /*
        *   Determines whether or not the square's value will be displayed (mines and open field will not have their value displayed)
        */
        ctrl.displayText = function(x, y){
            var square = minefield.getSquare(x, y);
            return square.show && square.value > 0 && !square.flagPlanted ? square.value.toString() : '';   
        }   
    }
    
})(angular);