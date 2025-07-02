class EventEmitter {
    constructor() {
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
	subscribe(eventName, callback) {
      	if(!this.events[eventName]) this.events[eventName] = [];
        const eventListener = { callback };
        this.events[eventName].push(eventListener);
		return {
			unsubscribe: () => {
				const idx = this.events[eventName].indexOf(eventListener);
                if(idx > -1){
                    this.events[eventName].splice(idx, 1);
                    return undefined;
                }
			}
		}
	}
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
	emit(eventName, args = []) {
		const eventListeners = this.events[eventName];
        if(!eventListeners) return [];
        return eventListeners.map(eventListener => eventListener.callback(...args));
	}
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */