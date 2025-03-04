/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, t);
    }
};

/**
 * const log = (...args) => console.log(args);
 * const dlog = debounce(log, 50);
 * setTimeout(() => dlog(1), 50);
 * setTimeout(() => dlog(2), 75);
 */