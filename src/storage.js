class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }

  /**
   * Store a value, if the key already exists then return false and do nothing.
   * @param {*} key Key used to identify value.
   * @param {*} value Value to store.
   * @returns {boolean} Returns true if the value was stored, false if not.
   */
  setSafe(key, value) {
    if (!this.has(key)) {
      this.set(key, value);
      return true;
    }
    return false;
  }

  /**
   * Store a value with given key. If key exists it will be overridden.
   * @param {*} key Key used to identify value.
   * @param {*} value Value to store.
   */
  set(key, value) {
    if (typeof value === "object") {
      const newValue = JSON.stringify(value);
      this.storage.setItem(key, newValue);
    } else {
      this.storage.setItem(key, value);
    }
  }

  /**
   * Returns the value associated with a given key.
   * @param {*} key Key used to identify value.
   * @returns {string} Found value or null.
   */
  get(key) {
    const item = this.storage.getItem(key);
    if (typeof item === "object") {
      return JSON.parse(item);
    }
    return item;
  }

  /**
   * Returns and array with all keys in the storage. (Correct order is not guaranteed)
   * @returns {string[]} Keys.
   */
  getKeys() {
    const keys = [];
    for (let i = 0; i < this.storage.length; i++) {
      keys[i] = this.storage.key(i);
    }
    return keys;
  }

  /**
   * Returns an array with all stored values. (Correct order is not guaranteed)
   * @returns {string[]} Values.
   */
  getValues() {
    const list = [];
    for (let i = 0; i < this.storage.length; i++) {
      list[i] = this.valueAt(i);
    }
    return list;
  }

  /**
   * Removes a value with the given key.
   * @param {*} key Key to remove value at.
   */
  delete(key) {
    this.storage.removeItem(key);
  }

  /**
   * Returns a true if they given key exists.
   * @param {*} key Key used to identify value.
   * @returns {boolean} True if the key exists, false if it doesn't.
   */
  has(key) {
    return !!this.storage.getItem(key);
  }

  /** Clears the entire storage. */
  clear() {
    this.storage.clear();
  }

  /**
   * Returns the value at a given index.
   * @param {number} index Index of value.
   * @returns {*} Found value or null.
   */
  valueAt(index) {
    return this.get(this.storage.key(index));
  }
}
