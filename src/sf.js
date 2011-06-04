
var SF = {};

// ES5 Functions
if (typeof Object.create !== 'function') { //source: http://javascript.crockford.com/prototypal.html
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}

if (typeof Array.prototype.forEach !== 'function') {
  Array.prototype.forEach = function(callback)//[, thisObject])
  {
    var len = this.length;
    if (typeof callback != "function")
      throw new TypeError();

    var thisObject = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        callback.call(thisObject, this[i], i, this);
    }
  };
}

if (typeof Function.prototype.bind !== "function") { // http://webreflection.blogspot.com/2010/02/functionprototypebind.html

    Function.prototype.bind = (function (slice){

        // (C) WebReflection - Mit Style License
        function bind(context) {

            var self = this; // "trapped" function reference

            // only if there is more than an argument
            // we are interested into more complex operations
            // this will speed up common bind creation
            // avoiding useless slices over arguments
            if (1 < arguments.length) {
                // extra arguments to send by default
                var $arguments = slice.call(arguments, 1);
                return function () {
                    return self.apply(
                        context,
                        // thanks @kangax for this suggestion
                        arguments.length ?
                            // concat arguments with those received
                            $arguments.concat(slice.call(arguments)) :
                            // send just arguments, no concat, no slice
                            $arguments
                    );
                };
            }
            // optimized callback
            return function () {
                // speed up when function is called without arguments
                return arguments.length ? self.apply(context, arguments) : self.call(context);
            };
        }

        // the named function
        return bind;

    }(Array.prototype.slice));
}

SF.baseObject = {
    later: function (msec, method) {
        var that = this, args = Array.prototype.slice.apply(arguments, [2]);
        if (typeof method === 'string') {
            method = that[method];
        }
        setTimeout(function () {
            method.apply(that, args);
        }, msec);
        return that; // Cascade
    }
}

SF.inherit = function(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}