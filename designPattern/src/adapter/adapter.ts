interface Greeter {
  greet(target: any): void
}

class GreeterPerson implements Greeter {
  constructor() {
  }

  greet(target: string): void {
    console.log(`hello ${target}!`);
  }
}

class Bird {
  constructor() {
  }

  twitter(subject: string) {
    console.log(`twitter ${ subject }`)
  }
}

class GreeterBird implements Greeter {
  protected bird: Bird;

  constructor(bird: Bird) {
    this.bird = bird
  }

  greet(target: any): void {
    this.bird.twitter(target)
  }
}


const greeterPerson = new GreeterPerson();
const bird = new Bird();
const greeterBird = new GreeterBird(bird);
greeterPerson.greet(`Adapter`);
greeterBird.greet(`Adapter`);

export {
  GreeterBird,
  GreeterPerson
}
