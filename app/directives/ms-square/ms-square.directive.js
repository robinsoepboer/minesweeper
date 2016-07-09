(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('msSquare', SquareDirective);
    
    function SquareDirective(){
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/directives/ms-square/ms-square.tpl.html',
            controller: 'msSquareController',
            controllerAs: 'square',
        };

        return directive;
    }
    
})(angular);