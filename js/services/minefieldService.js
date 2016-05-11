window.app.factory('MinefieldService', ['ConfigService', function(settings) {

    var field = [[]];
    
    var instance = {
        initField: function(){
            generateField();
            generateMines();
            
            return field;
        }
    };
    
    /*
     *  Generates intial state of minefield without mines
     */
    function generateField(){ 
        for (var y = 0; y < settings.height; y++) {
            field[y] = []

            for (var x = 0; x < settings.width; x++) {
                field[y][x] = {
                    value: 0,
                    show: false,
                    flagPlanted: false
                };
            }
        }
    }
    
    /*
     * Generates mines and places them in the minefield, surrounding squares are raised to indicate the presence of a mine
     */
    function generateMines(){        
        while(settings.minesToPlant !== 0){
            var y = randomNumber(settings.height); 
            var x = randomNumber(settings.width);
            
            if(field[y][x].value === -1)
                continue;
            
            field[y][x].value = -1;
            
            raiseSurroundingSquares(x, y);
            settings.minesToPlant--;
        }
    }  
    
    /*
     *  Raise al surrounding squares to indicate the presence of a mine
     */
    function raiseSurroundingSquares(x, y){
        raiseSquareByOne(x + 1, y);
        raiseSquareByOne(x - 1, y);
        
        raiseSquareByOne(x, y + 1);
        raiseSquareByOne(x + 1, y + 1);
        raiseSquareByOne(x - 1, y + 1);
        
        raiseSquareByOne(x, y - 1);
        raiseSquareByOne(x + 1, y - 1);
        raiseSquareByOne(x - 1, y - 1);
        
    }
    
    /*
     *  Raise a square to indicate the presence of a mine
     */
    function raiseSquareByOne(x, y){
        if(x >= settings.width || x < 0)
            return;
        if(y >= settings.height || y < 0)
            return;
        
        if(field[y][x].value === -1)
            return;
        
        field[y][x].value = field[y][x].value + 1;
    }
    
    //Generate random number
    function randomNumber(max){
        return Math.floor(Math.random() * max);
    }
    
    return instance;
}]);