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
    
    _main: {
        value: null
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

    draw: {
        value: function() {
            var hue = Math.round(this._color);
            var color = "hsl(" + hue + ",80%,60%)";

            this._root.style.color = color;
            this._main.style.fill = color;
        }
    }
        
});
