
SF.manager = (function() {
    var views = {};
    
    return {
        handleServerResponse: function(responseArray) {
            responseArray.forEach(function(response) {
                // TODO handle messages
                var view = views[response.view.id];
                if (!view) {
                    view = views[response.view.id] = SF.views[response.view.type].create.apply(null, response.view.args);
                }
                
            });
        }
    };
})();
