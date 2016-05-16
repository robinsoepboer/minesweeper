window.app.controller('GameController', ['$scope', 'MinefieldService', 'GameService', function($scope, minefield, game){
    $scope.gameOver = function(){
        game.gameOver = true;
    }
    
    $scope.minesLeft = function(){
        return game.minesLeft;   
    }
    
    $scope.newGame = function(){
        game.newGame();
    }
    
    $scope.victory = function(){
        if(game.minesLeft !== 0)
            return;
        
        //flesh out
    }
}]);