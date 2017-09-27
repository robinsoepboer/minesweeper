(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('msGameOptions', msGameOptionsDirective);
    
    function msGameOptionsDirective(){
        var directive = {
            restrict     : 'EA',
            templateUrl  : 'app/directives/ms-game-options/ms-game-options.tpl.html',
            controller   : 'msGameOptionsController',
            controllerAs : 'options'
        };

        return directive;
    }
    
})(angular);