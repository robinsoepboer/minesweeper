(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .component('msField', {
            templateUrl: 'app/ms-field/ms-field.tpl.html',
            controller: 'msFieldController',
            controllerAs: 'ctrl'
        });

})(angular);