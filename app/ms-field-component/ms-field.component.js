(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .component('msField', {
            templateUrl: 'app/ms-field-component/ms-field.tpl.html',
            controller: 'msFieldController',
            controllerAs: 'ctrl'
        });

})(angular);