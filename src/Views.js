

// requires jQuery for DOM creation and manipulation

const VIEWS_CSS_ID = 'views'
,     SFWINDOW_HTML = '<div class="sfWindow"><div><div class="closeButton">X</div><div class="minimizeButton">_</div></div><div class="sfWindowContent"></div></div>';

/**
 * Interface for Views
 */
function View(node, args) {
    if (!node) {
        throw new Error("No node given");
    }
    this.node = node;
}

View.prototype.setContent = function(html) {
    this.node.html(html);
    return this;
};

View.prototype.appendContent = function(html) {
    this.node.append(html);
    return this;
};

View.prototype.log = function(message) {
    this.appendContent(message.text);
    return this;
};

View.html = "<div/>";
/**
 * Factory method
 * Creates an HTML node if none is given
 */
View.create = function(args, node) {
    // 'this' is the class 'View' in this context
    node = node || $(this.html).appendTo('#'+VIEWS_CSS_ID);
    return new this(node, args);
};
/**
 * HTML nodes require lazy-initialisation on DOM–ready
 */
View.prototype.getHTMLNodePrototype = function() {};

function SfDiv(node, args) {
    View.call(this, node, args);
}

SF.inherit(SfDiv, View);

SfDiv.html = "<div/>";

SfDiv.create = View.create;

function SfWindow(node, args) {
    View.call(this, node, args);
    
}

SF.inherit(SfWindow, View);

SfWindow.create = View.create;

SfWindow.html = SFWINDOW_HTML;

SfWindow.prototype.setContent = function(content) {
    this.node.find('.sfWindowContent').html(content);
    return this;
};

SF.views = {
    SfDiv: SfDiv,
    SfWindow: SfWindow
};
