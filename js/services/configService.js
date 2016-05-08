window.app.factory('ConfigService', function() {
    var instance = { 
        width: 9, 
        height:9, 
        size: function(){ 
            return this.height * this.width; 
        },
        minesToPlant:10
    };
    
    return instance;
});