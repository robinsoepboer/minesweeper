(function(angular){
    'use strict';
    
    angular
        .module('minesweeper')
        .factory('MineGeneratorService', MineGeneratorService);
    
    MineGeneratorService.$inject = ['ConfigService', 'MinefieldService', 'GameService'];
    
    function MineGeneratorService(settings, minefield, game){
        var instance = {
            /*
            * Generates all mines, the x and y parameters are the location of the first click which can never be a mine
            */
            generateMines: function(firstClickX, firstClickY){
                generateMines(firstClickX, firstClickY);
            }
        };

        /*
         * Generates mines and places them in the minefield, surrounding squares are raised to indicate the presence of a mine
         */
        function generateMines(firstClickX, firstClickY){        
            while(game.minesToPlant !== 0){
                var y = randomNumber(settings.height); 
                var x = randomNumber(settings.width);

                if(minefield.getSquare(x, y).value === -1 || (x === firstClickX && y === firstClickY))
                    continue;

                minefield.getSquare(x, y).value = -1;

                raiseSurroundingSquares(x, y);
                game.minesToPlant--;
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

            if(minefield.getSquare(x, y).value === -1)
                return;

            minefield.getSquare(x, y).value = minefield.getSquare(x, y).value + 1;
        }

        //Generate random number
        function randomNumber(max){
            return Math.floor(Math.random() * max);
        }

        return instance;
    }
})(angular)