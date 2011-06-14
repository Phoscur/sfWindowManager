
SF.manager = (function() {
    var views = {} // id: View | TODO needs garbage collection
    ,   ajax  = function(target, data, callback) {};

    function getView (id, type, args) {
        var view = views[id];
        if (!view/* || !(view instanceof type)*/) {
            view = views[id] = SF.views[type].create(args);
        }
        return view;
    }

    return {
        init: function(options) {
            ajax = options.ajax;
        },
        requestFromServer: function(target, additionalData, callback){
            var data = additionalData || {};
            var that = this;
            ajax(target, data, function(response) {
                that.handleServerResponse(response);
                callback && callback();
            });
        },
        handleServerResponse: function(responseArray) {
            responseArray.forEach(function(response) {
                var view = getView(response.view.id, response.view.type, response.view.args);
                response.content && view.setContent(response.content);
                response.messages && response.messages.forEach(function(m) {
                    view.log(m);
                });
                
            });
        }
    };
})();