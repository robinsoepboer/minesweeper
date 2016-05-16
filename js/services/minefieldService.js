window.app.factory('MinefieldService', ['ConfigService', function(settings) {
    var instance = {
        field: generateField(),
        
        /*
        *   Gets the entire field
        */
        getField: function(){
            return this.field;
        },
        
        /*
        *   Gets a square at a certain position
        */
        getSquare: function(x, y){
            if(this.field[y])
                return this.field[y][x];
        },
        
        generateNewField: function(){
            this.field = generateField();
        },
        
        /*
        * function handles revealing an open field, will recursivly reveal all open surrounding fields
        */
        revealOpenField: function(x, y){
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
    };
    
    /*
     *  Generates intial state of minefield without mines
     */
    function generateField(){ 
        var field = [[]];
        
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
        
        return field;
    }
    
    return instance;
}]);