class TimeLimitedCache {
  constructor() {
    this.cache = new Map(); // {key: {value: value, expiration: timestamp}}
  }

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time in milliseconds
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const now = Date.now();
    const expiration = now + duration;

    if (this.cache.has(key) && this.cache.get(key).expiration > now) {
      this.cache.set(key, { value, expiration });
      return true;
    } else {
      this.cache.set(key, { value, expiration });
      return false;
    }
  }

  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const now = Date.now();
    if (this.cache.has(key) && this.cache.get(key).expiration > now) {
      return this.cache.get(key).value;
    } else {
      return -1;
    }
  }

  /**
   * @return {number} count of un-expired keys
   */
  count() {
    const now = Date.now();
    let count = 0;
    for (const { expiration } of this.cache.values()) {
      if (expiration > now) {
        count++;
      }
    }
    return count;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 100); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */