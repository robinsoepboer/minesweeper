window.app.controller('GameController', ['MinefieldService', function(minefieldService){    
    this.field = minefieldService.initField();
    
    this.reveal = function($event, x, y){
        var square = this.field[y][x];
        
        if(angular.element($event.target).hasClass('flag'))
            return;
        
        if(square === -1){
            angular.element($event.target).addClass('mine');
            return;
        } else {
            angular.element($event.target).addClass('open');
            angular.element($event.target).text(square);
        }
    }
    /*
    this.revealOpenField = function(element, x, y){
        if(this.field[y][x - 1] === 0){
            angular.element(element).prev().addClass('open')
        }
    }
    
    this.plantFlag = function($event){
        angular.element($event.target).addClass('flag');
    }*/
}]);