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
                    flagPlanted: false,
                    displayValue:function(){
                        return this.show && this.value !== 0 && this.value !== -1 ? this.value.toString() : '';   
                    }
                };
            }
        }
        
        return field;
    }
    
    return instance;
}]);