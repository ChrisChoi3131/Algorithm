/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
let configueInstance = null;
class Configuration {
  constructor() {}
  static getInstance() {
    if (!configueInstance) configueInstance = new Configuration();
    return configueInstance;
  }
}
