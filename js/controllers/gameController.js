window.app.controller('GameController', ['$scope', 'MinefieldService', function($scope, minefieldService){    
    $scope.field = minefieldService.initField();
    
    this.reveal = function(x, y){
        var square = this.getSquare(x, y); 
        
        if(square.flagPlanted)
            return;
        
        switch(square.value){
            case 0:
                this.revealOpenField(x, y);
                break;
            default:
                square.show = true;
                break;
        }
    }
    
    this.revealOpenField = function(x, y){
        var square = this.getSquare(x, y);
        
        if(!square || square.show)
            return;
        
        square.show = true;
        if(square.value !== 0)
            return;
        
        this.revealOpenField(x + 1, y);
        this.revealOpenField(x - 1, y);
        
        this.revealOpenField(x, y + 1);
        this.revealOpenField(x + 1, y + 1);
        this.revealOpenField(x - 1, y + 1);
        
        this.revealOpenField(x, y - 1);
        this.revealOpenField(x + 1, y - 1);
        this.revealOpenField(x - 1, y - 1);
    }
    
    this.getSquare = function(x, y){
        if($scope.field[y])
            return $scope.field[y][x];
    }
    
    this.plantFlag = function(x, y){
        this.getSquare(x, y).flagPlanted = true;
    }
    
    this.determineClass = function(x, y){
        var square = this.getSquare(x, y);
        
        if(!square.show)
            return '';
            
        if(square.flagPlanted){
            return 'flag';
        }
        else if(square.value === -1){
            return 'mine';
        }
        return 'open';
    }
}]);