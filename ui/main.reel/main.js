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
    }
    
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

            this.style.color = color;
            this.style.fill = color;
        }
    }
        
});
