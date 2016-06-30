(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('ngGameOptions', ngGameOptionsDirective);
    
    function ngGameOptionsDirective(){
        var directive = {
            restrict     : 'EA',
            templateUrl  : 'app/directives/ngGameOptions/ngGameOptions.tpl.html',
            controller   : 'ngGameOptionsController',
            controllerAs : 'options'
        };

        return directive;
    }
    
})(angular);