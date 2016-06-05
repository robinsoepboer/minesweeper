(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('ngSettings', SettingsDirective);
    
    function SettingsDirective(){
        var directive = {
            restrict     : 'EA',
            templateUrl  : 'app/directives/ngSettings/ngSettings.tpl.html',
            replace      : false,
            scope        : false,
            controller   : 'ngSettingsController',
            controllerAs : 'settings'
        };

        return directive;
    }
    
})(angular);