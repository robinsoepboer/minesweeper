(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('msSquare', SquareDirective);
    
    function SquareDirective(){
        var directive = {
            restrict: 'EA',
            scope:false,
            templateUrl: 'app/directives/ms-square/ms-square.tpl.html',
            controller: 'msSquareController',
            controllerAs: 'ctrl'
        };

        return directive;
    }
    
})(angular);