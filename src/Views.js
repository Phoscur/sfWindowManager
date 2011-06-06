

/**
 * Interface for Views
 */
function View () {
    
}

View.prototype.setContent = function() {
    
};
/**
 * Factory method
 */
View.create = function() {
    
}

function sfDIV () {
    
}

var sfDIVNodePrototype = null;
sfDIV.prototype.getHTMLNodePrototype = function() {
    if (sfDIVNodePrototype == null) {
        sfDIVNodePrototype = $("<div/>");
    }
    return sfDIVNodePrototype;
}

sfDIV.create = function() {
    
}

function sfWindow () {
    
}

SF.views