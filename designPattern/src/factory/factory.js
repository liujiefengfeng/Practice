var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CarTypes;
(function (CarTypes) {
    CarTypes["truck"] = "TRUCK";
    CarTypes["sedan"] = "SEDAN";
    CarTypes["coupes"] = "COUPES";
    CarTypes["unknown"] = "UNKNOWN";
})(CarTypes || (CarTypes = {}));
var Car = /** @class */ (function () {
    function Car(type, color, wheels) {
        this.type = type;
        this.color = color;
        this.wheels = wheels;
    }
    Car.prototype.info = function () {
        console.log("car type: ", this.type);
        console.log("car color: ", this.color);
        console.log("car wheels: ", this.wheels);
    };
    return Car;
}());
var CoupesCar = /** @class */ (function (_super) {
    __extends(CoupesCar, _super);
    function CoupesCar(color, wheels) {
        return _super.call(this, CarTypes.coupes, color, wheels) || this;
    }
    return CoupesCar;
}(Car));
var SedanCar = /** @class */ (function (_super) {
    __extends(SedanCar, _super);
    function SedanCar(color, wheels) {
        return _super.call(this, CarTypes.sedan, color, wheels) || this;
    }
    return SedanCar;
}(Car));
var TruckCar = /** @class */ (function (_super) {
    __extends(TruckCar, _super);
    function TruckCar(color, wheels) {
        return _super.call(this, CarTypes.truck, color, wheels) || this;
    }
    return TruckCar;
}(Car));
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    CarFactory.prototype.createCar = function (carType) {
        switch (carType) {
            case CarTypes.coupes:
                return new CoupesCar("red", 4);
            case CarTypes.sedan:
                return new SedanCar("white", 4);
            case CarTypes.truck:
                return new TruckCar("yellow", 4);
            default:
                return new Car(CarTypes.unknown, "", 0);
        }
    };
    return CarFactory;
}());
var carFactory = new CarFactory();
var car = carFactory.createCar(CarTypes.truck);
car.info();
