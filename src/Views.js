


function View () {
    
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