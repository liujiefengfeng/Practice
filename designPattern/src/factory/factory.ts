enum CarTypes {
  truck = "TRUCK",
  sedan = "SEDAN",
  coupes = "COUPES",
  unknown = "UNKNOWN"
}

class Car {
  type: CarTypes;
  color: string;
  wheels: number;

  constructor(type: CarTypes, color: string, wheels: number) {
    this.type = type;
    this.color = color;
    this.wheels = wheels;
  }

  info() {
    console.log("car type: ", this.type);
    console.log("car color: ", this.color);
    console.log("car wheels: ", this.wheels);
  }
}

class CoupesCar extends Car {
  constructor(color: string, wheels: number) {
    super(CarTypes.coupes, color, wheels);
  }
}

class SedanCar extends Car {
  constructor(color: string, wheels: number) {
    super(CarTypes.sedan, color, wheels);
  }
}

class TruckCar extends Car {
  constructor(color: string, wheels: number) {
    super(CarTypes.truck, color, wheels);
  }
}

class CarFactory {
  createCar(carType: CarTypes): Car {
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
  }
}


const carFactory = new CarFactory();
const car = carFactory.createCar(CarTypes.truck);
car.info();

export {
  Car,
  CarFactory
}
