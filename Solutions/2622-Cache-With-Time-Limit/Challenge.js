var TimeLimitedCache = function () {
  this.cacheMap = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  keyExists = false;

  if (this.cacheMap.has(key)) {
    keyExists = true;
    clearTimeout(this.cacheMap.get(key).timer);
  }

  this.cacheMap.set(key, {
    value: value,
    timer: setTimeout(() => {
      this.cacheMap.delete(key);
    }, duration),
  });

  return keyExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cacheMap.has(key)) {
    return this.cacheMap.get(key).value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cacheMap.size;
};

// ----------------------------------------
// Test
// ----------------------------------------
timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 100)); // false
setTimeout(() => {
  console.log(timeLimitedCache.get(1));
}, 50); // 42
setTimeout(() => {
  console.log(timeLimitedCache.count());
}, 50); // 1
setTimeout(() => {
  console.log(timeLimitedCache.get(1));
}, 150); // -1
