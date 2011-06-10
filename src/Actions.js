

// require jQuery


function Action() {
    
}

/**
 * @return {function} Eventlistener to bind via jQuery to a DOM-Node
 */
Action.prototype.asEventhandler = function() {
    return function() {
        $(this) // this is the domNode
    }
}

function CallControllerAction(target, data) {
    this.setTarget = function(newTarget) {
        target = newTarget;
        return this;
    };
    this.getTarget = function() {
        if (!target) {
            throw new Error("Target not specified");
        }
        return target;
    };
    this.setData = function(newData) {
        data = newData;
        return this;
    };
    this.getData = function() {
        return data;
    };
}
SF.inherit(CallControllerAction, Action);

CallControllerAction.prototype.execute = function() {
    SF.manager.requestFromServer(this.getTarget(), this.getData());
};

CallControllerAction.prototype.asEventhandler = function(before) {
    var that = this; // save context
    return function() {
        before && before(that, this);
        //var href = $(this).attr("href");
        that.execute();
    }
}
