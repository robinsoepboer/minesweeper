window.app.controller('GameController', ['MinefieldService', function(minefieldService){    
    this.field = minefieldService.initField();
    
    this.reveal = function($event){
        var square = angular.element($event.target);
        var squareValue = this.getSquareValue(square); 
        
        if(square.hasClass('flag'))
            return;
        
        switch(squareValue){
            case -1:
                square.addClass('mine');
                break;
            case 0:
                this.revealOpenField(square);
                break;
            default:
                square.addClass('open');
                square.text(squareValue);
                break;
        }
    }
    
    this.revealOpenField = function(square){
        if(square.length === 0 || $(square).is('.open'))
            return;
        
        var value = this.getSquareValue(square);
        
        $(square).addClass('open');
        if(value !== 0){
            $(square).text(value);
            return;
        }        
        
        var location = this.getSquareLocation(square);
        var x = location.x;
        var y = location.y;
        
        this.revealOpenField(this.getSquare(x + 1, y));
        this.revealOpenField(this.getSquare(x - 1, y));
        
        this.revealOpenField(this.getSquare(x, y + 1));
        this.revealOpenField(this.getSquare(x + 1, y + 1));
        this.revealOpenField(this.getSquare(x - 1, y + 1));
        
        this.revealOpenField(this.getSquare(x, y - 1));
        this.revealOpenField(this.getSquare(x + 1, y - 1));
        this.revealOpenField(this.getSquare(x - 1, y - 1));
    }
    
    this.getSquareValue = function(square){
        var location = this.getSquareLocation(square);
        return this.field[location.y][location.x];
    }
    
    this.getSquare = function(x, y){        
        return $('[Location="' + x + ',' + y + '"]');
    }
    
    this.getSquareLocation = function(square){
        var attr = square.attr('location').split(',');
        return { 
            x: parseInt(attr[0]), 
            y: parseInt(attr[1]) 
        };
    }
    
    this.plantFlag = function($event){
        $($event.target).toggleClass('flag');
    }
}]);