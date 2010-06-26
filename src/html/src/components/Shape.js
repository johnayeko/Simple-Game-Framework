/** section: Components API
 * class Shape < Component
 *
 * Another abstract class, not meant to be instantiated directly. All "shape"
 * type [[SGF.Component]] classes use this class as a base class. The only
 * functionality that this class itself adds to a regular [[SGF.Component]] is
 * [[SGF.Shape#color]], since all shapes can have a color set for them.
 **/

/**
 * new SGF.Shape([options])
 * - options (Object): The optional 'options' object's properties are copied
 *                     this [[SGF.Shape]] in the constructor. It allows all
 *                     the same default properties as [[SGF.Component]], but
 *                     also adds [[SGF.Shape#color]].
 *
 * This will never be called directly in your code, use one of the subclasses
 * to instantiate [[SGF.Shape]]s.
 **/
function Shape(options) {
    Component.call(this, options);
}

Shape.prototype = new Component(true);

Shape.prototype['render'] = function(renderCount) {

    if (this['__color'] !== this['color']) {
        setStyleImportant(this['element'], 'background-color', "#" + this['color']);
        this['__color'] = this['color'];
    }

    Component.prototype['render'].call(this, renderCount);
}

/**
 * SGF.Shape#color -> String
 *
 * The color of the [[SGF.Shape]]. The String value is expected to be like
 * a CSS color string. So it should be a **six** (not three) character
 * String formatted in `RRGGBB` form. Each color is a 2-digit hex number
 * between 0 and 255.
 **/
Shape.prototype['color'] = "000000";

Shape.prototype['toString'] = functionReturnString("[object Shape]");

makePrototypeClassCompatible(Shape);

modules['shape'] = Shape;
