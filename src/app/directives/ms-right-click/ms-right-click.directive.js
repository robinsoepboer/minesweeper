(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .directive('msRightClick', RightClickDirective);
    
    function RightClickDirective($parse){
        return function(scope, element, attrs) {
            var fn = $parse(attrs.msRightClick);
            element.bind('contextmenu', function(event) {
                scope.$apply(function() {
                    event.preventDefault();
                    fn(scope, {$event:event});
                });
            });
        };
    }
})(angular);