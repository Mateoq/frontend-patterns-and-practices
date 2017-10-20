import { EventEmitter } from 'events';

export default class Component extends EventEmitter {
  public static parseOptions<T>(domElement: Element): T {
    const rawOptions = domElement.getAttribute('data-options') || '';

    let options: T;

    try {
      options = JSON.parse(rawOptions) as T;
    } catch (e) {
      options = {} as T;
    }

    return options;
  }
}
