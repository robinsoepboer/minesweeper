window.app.factory('ConfigService', function() {
    var instance = {        
        mines:10,
        width: 9, 
        height:9, 
        
        size: function(){ 
            return this.height * this.width; 
        }
    }
    
    return instance;
});