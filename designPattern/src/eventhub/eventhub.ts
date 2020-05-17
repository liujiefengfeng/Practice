type Event = (params?: any) => void;

class EventHub {
  private cache: { [key: string]: Array<Event> } = {};

  on(eventName: string, fn: Event) {
    this.cache[eventName] = this.cache[eventName] || [];
    this.cache[eventName].push(fn);
  }

  emit(eventName: string, params?: any) {
    const eventList: Array<Event> = this.cache[eventName] || [];
    eventList.forEach(fn => fn(params))
  }

  off(eventName: string, fn: Event) {
    let index = indexOf(this.cache[eventName], fn);
    if (index !== -1) {
      this.cache[eventName].splice(index, 1)
    }
  }
}

function indexOf(array: Array<any>, item: any): number {
  if (array === undefined) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

export { EventHub }
