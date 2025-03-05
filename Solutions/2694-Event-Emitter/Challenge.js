class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }
    this.eventMap[eventName].push(callback);

    return {
      unsubscribe: () => {
        this.eventMap[eventName] = this.eventMap[eventName].filter(
          (eventFunction) => eventFunction != callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const returnArray = [];
    if (this.eventMap[eventName]) {
      for (let i = 0; i < this.eventMap[eventName].length; i++) {
        returnArray.push(this.eventMap[eventName][i](...args));
      }
    }
    return returnArray;
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

console.log(emitter.emit("onClick")); // [99]
sub.unsubscribe(); // undefined
console.log(emitter.emit("onClick")); // []
