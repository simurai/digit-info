/**
 * @module ui/skins.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Skins
 * @extends Component
 */
exports.Skins = Component.specialize(/** @lends Skins# */ {
    constructor: {
        value: function Skins() {
            this.super();
        }
    },
    
    templateDidLoad: {
        value: function() {
            this._select.onchange = function(e){
                document.getElementById('skins').setAttribute("data-montage-skin", e.target.value);
            }
        }
    }
        
});
