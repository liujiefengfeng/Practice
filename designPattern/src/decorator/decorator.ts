interface Greeter {
  greet(target: any): void
}


class GreeterPerson implements Greeter {
  constructor() {
  }

  @log
  greet(target: string): void {
    console.log(`hello ${target}!`);
  }
}

function log(target: any, key: any, descriptor: any): any {
  const func = descriptor.value;
  descriptor.value = (...args: any[]) => {
    func.apply(target, args);
    console.log(`greet successfully!`)
  };

  return descriptor;
}
const greet = new GreeterPerson();
greet.greet(`Decorator`);

export {Greeter}
