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

class CarBuilder {
  private type = CarTypes.unknown;
  private color = "";
  private wheels = 0;

  setCarType(type: CarTypes) {
    this.type = type;
    return this;
  }

  setCarColor(color: string) {
    this.color = color;
    return this;
  }

  setWheels(wheels: number) {
    this.wheels = wheels;
    return this;
  }

  build(): Car {
    return new Car(this.type, this.color, this.wheels);
  }
}

const truckCar: Car = new CarBuilder()
.setCarType(CarTypes.truck)
.setCarColor("red")
.setWheels(4)
.build();

truckCar.info();
