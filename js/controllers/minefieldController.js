window.app.controller('MinefieldController', ['$scope', 'MinefieldService', 'MineGeneratorService', function($scope, minefield, mineGenerator){    
    var firstClick = true;
    $scope.field = minefield.getField();
    
    /*
    *   click event: Reveal a square
    */
    this.reveal = function(x, y){
        if(firstClick){
            mineGenerator.generateMines(x, y);
            firstClick = false;
        }
        
        var square = minefield.getSquare(x, y); 
        
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
    
    /*
    * function handles revealing an open field, will recursivly reveal all open surrounding fields
    */
    this.revealOpenField = function(x, y){
        var square = minefield.getSquare(x, y);
        
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
    
    /*
    *   Rightclick event: plants a flag on a square
    */
    this.plantFlag = function(x, y){
        var square = minefield.getSquare(x, y);
        
        if(square.show)
            return;
        
        square.flagPlanted = !square.flagPlanted;
    }
    
    /*
    *   Function used in ng-class directive, determines which class a square should receive
    */
    this.determineClass = function(x, y){
        var square = minefield.getSquare(x, y);
        
        if(square.flagPlanted){
            return 'flag';
        }
        
        if(!square.show)
            return '';   
        
        else if(square.value === -1){
            return 'mine';
        }
        return 'open open-' + square.value.toString();
    }
}]);