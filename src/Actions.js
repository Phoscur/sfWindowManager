


function Action() {
    
}

/**
 * Convert the action to a Eventhandler function
 * @param {function} before(action, node) function to execute before the action is executed
 * @return {function} Eventhandler to bind to a DOM-Node
 * 
 * Example – fetches the target controller from the node's href attribute:
 * $("#myLink").click(aCallControllerAction.asEventhandler(function(action, node) {
 *     action.setTarget($(node).attr("href"));
 * }));
 */
Action.prototype.asEventhandler = function(before) {
    var that = this; // save context
    return function() {
        console.log(that);
        before && before(that, this);
        that.execute();
        return false;
    };
}

/**
 * Simple Action, which uses the manager to call a serverside controller
 * The target controller and additional data can be set via constructor or setter
 */
function CallControllerAction(target, data) {
    Action.call(this);
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

