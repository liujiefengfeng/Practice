import { EventHub } from './eventhub';

type TestCase = (message: string) => void

const test1: TestCase = message => {
  const eventHub = new EventHub();
  console.assert(eventHub instanceof Object === true, "EventHub is an object");
  console.log(message);
};

const test2: TestCase = message => {
  const eventHub = new EventHub();
  let called = false;
  eventHub.on("testEvent", (params: any) => {
    called = true;
    console.assert(params === "call params");
  });

  eventHub.emit("testEvent", "call params");
  setTimeout(() => {
    console.assert(called == true);
    console.log(message)
  })
};

const test3: TestCase = message => {
  const eventHub = new EventHub();
  let called = false;
  const fn1 = () => {
    called = true
  };
  eventHub.on("testEvent", fn1);
  eventHub.off("testEvent", fn1);
  eventHub.emit("testEvent", "call params");
  setTimeout(() => {
    console.assert(called == false);
    console.log(message)
  })
};

test1("EventHub is able to create an object");
test2('EventHub is able to subscribe via on and get publish via emit');
test3('EventHub is able to cancel an event');
