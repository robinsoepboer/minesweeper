window.app.controller('MinefieldController', [
    '$scope', 
    'MinefieldService', 
    'MineGeneratorService', 
    'GameService',
function($scope, minefield, mineGenerator, game){    
    $scope.field = minefield.getField();
    
    /*
    *   click event: Reveal a square
    */
    $scope.reveal = function(x, y){
        if(game.firstClick){
            mineGenerator.generateMines(x, y);
            game.firstClick = false;
        }
        
        var square = minefield.getSquare(x, y); 
        
        if(square.flagPlanted)
            return;
        
        switch(square.value){
            case 0:
                minefield.revealOpenField(x, y);
                break;
            case -1:
                square.show = true;
                game.gameOver = true;
                break;
            default:
                square.show = true;
                break;
        }
    }
    
    /*
    *   Rightclick event: plants a flag on a square
    */
    $scope.plantFlag = function(x, y){
        var square = minefield.getSquare(x, y);
        
        if(square.show)
            return;
        
        if(!square.flagPlanted){
            square.flagPlanted = true;
            game.minesLeft--;
        } else {
            square.flagPlanted = false;
            game.minesLeft++;
        }
        
    }
    
    /*
    *   Function used in ng-class directive, determines which class a square should receive
    */
    $scope.determineClass = function(x, y){
        var square = minefield.getSquare(x, y);
        
        if(square.flagPlanted){
            return 'flag';
        }
        
        if(game.gameOver && square.value === -1 && !square.show){
            return 'mine unexploded';
        }
        
        if(!square.show)
            return '';   
        
        else if(square.value === -1){
            return 'mine';
        }
        return 'open open-' + square.value.toString();
    }
    
    /*
    *   Determines whether or not the square's value will be displayed (mines and open field will not have their value displayed)
    */
    $scope.displayText = function(x, y){
        var square = minefield.getSquare(x, y);
        return square.show && square.value > 0 ? square.value.toString() : '';   
    }
}]);