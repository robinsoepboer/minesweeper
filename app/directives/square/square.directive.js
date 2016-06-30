(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('square', SquareDirective);
    
    function SquareDirective(){
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/directives/square/square.tpl.html',
            controller: 'SquareController',
            controllerAs: 'square',
        };

        return directive;
    }
    
})(angular);