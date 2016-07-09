(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .controller('msGameController', msGameController);
    
    msGameController.$inject = ['$scope', 'MinefieldService', 'GameService'];
    
    function msGameController($scope, minefield, game){
        var ctrl = this;

        ctrl.newGame = game.newGame;        

        $scope.isVictorious = function(){
            return game.isVictorious();            
        }

        $scope.minesLeft = function(){
            return game.flagsLeft;
        }
    }
    
})(angular);