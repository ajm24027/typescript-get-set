var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            if (radius > 0) {
                this._radius = radius;
            }
            else {
                throw new Error("Cannot set a negative radius");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.radius);
circle.radius = 6;
console.log(circle.radius);
