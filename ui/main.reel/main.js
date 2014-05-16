/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    
    _root: {
        value: document.querySelector("html")
    },
    
    _body: {
        value: document.querySelector("body")
    },
    
    _color: {
        value: 0
    },
                                    
    color: {
        set: function(value) {
            this._color = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._color;
        }
    },
    
    _size: {
        value: 0
    },

    size: {
        set: function(value) {
            this._size = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._size;
        }
    },
    
    _space: {
        value: 0
    },

    space: {
        set: function(value) {
            this._space = value;
            this.needsDraw = true;
        },
        get: function() {
            return this._space;
        }
    },

    draw: {
        value: function() {
            var hue = Math.round(this._color);
            var color = "hsl(" + hue + ",80%,60%)";
            this._root.style.color = color;
            this._root.style.fill = color;
            
            this._body.style.fontSize = this._size +"px";
            
            this._root.style.fontSize = this._space +"px";
        }
    }
        
});
