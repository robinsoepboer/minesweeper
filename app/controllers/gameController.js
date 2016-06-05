(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('GameController', GameController);
    
    GameController.$inject = ['$scope', 'MinefieldService', 'GameService'];
    
    function GameController($scope, minefield, game){
        $scope.gameOver = function(){
            game.gameOver = true;
        }

        $scope.minesLeft = function(){
            return game.minesLeft;   
        }

        $scope.newGame = function(){
            game.newGame();
        }

        $scope.victory = function(){
            if(game.minesLeft !== 0)
                return;

            //flesh out
        }
    }
    
})(angular);