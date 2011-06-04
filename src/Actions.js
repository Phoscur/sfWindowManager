
function Action () {
    
}

/**
 * @return {function} Eventlistener to bind via jQuery to a DOM-Node
 */
Action.prototype.asEventhandler = function() {
    return function() {
        $(this) // this is the domNode
    }
}

function CallControllerAction () {
    
}

CallControllerAction.prototype.asEventhandler = function() {
    return function() {
        var href = $(this).attr("href");
        
    }
}
