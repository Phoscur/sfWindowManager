

/**
 * Interface for Views
 */
function View(node) {
    this.node = node;
}

View.prototype.setContent = function(html) {
    this.node.html(html);
};
/**
 * Factory method
 * Creates an HTML node if none is given (cloning a prototype)
 * Uses a given constructor to create the new object,
 * falls back to the standard constructor
 */
View.create = function(node, constructor) {
    // 'this' is the class 'View' in this context
    node = node || this.prototype.getHTMLNodePrototype().clone();
    constructor = constructor || this;
    return new constructor(node);
};
/**
 * HTML nodes require lazy-initialisation on DOM–ready
 */
View.prototype.getHTMLNodePrototype = function() {};

function sfDIV() {
    
}

SF.inherit(sfDIV, View);

var sfDIVNodePrototype = null;
sfDIV.prototype.getHTMLNodePrototype = function() {
    if (sfDIVNodePrototype == null) {
        sfDIVNodePrototype = $("<div/>");
    }
    return sfDIVNodePrototype;
}

sfDIV.create = function() {
    
}

function sfWindow() {
    
}

SF.views