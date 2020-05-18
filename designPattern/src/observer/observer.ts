class Subject {
  private observers: Array<Observer> = new Array<Observer>();
  private state!: number;

  public subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  public setState(state: number): void {
    console.log("state changed: ", state);
    this.state = state;
    this.publish();
  }

  public getState() {
    return this.state;
  }

  public publish() {
    for (let oberver of this.observers) {
      oberver.update()
    }
  }

  public unsubscribe(observer?: Observer): void {
    if (!observer) {
      this.observers = new Array<Observer>();
    } else {
      this.observers.splice(this.observers.indexOf(observer), 1);
    }
  }
}


abstract class Observer {
  protected subject!: Subject;

  public abstract update(): void;
}

class AObserver extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.subscribe(this);
  }

  public update() {
    console.log(`AObserver: ${ this.subject.getState() }`);
  }
}


class BObserver extends Observer {
  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.subscribe(this);
  }

  public update() {
    console.log(`BObserver: ${ this.subject.getState() }`);
  }
}

const subject = new Subject();

const aObserver = new AObserver(subject);
const bObserver = new BObserver(subject);

console.log('========');
console.log('State change: 100');
subject.setState(100);
console.log('========');

console.log('=========');
console.log('aObserver 取消订阅');
subject.unsubscribe(aObserver);
console.log('State change: 150');
subject.setState(150);
console.log('=========');

export { Subject }
