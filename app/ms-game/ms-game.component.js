(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .component('msGame', {
            templateUrl: 'app/ms-game/ms-game.tpl.html',
            controller: 'msGameController',
            controllerAs: 'game'
        });

})(angular);