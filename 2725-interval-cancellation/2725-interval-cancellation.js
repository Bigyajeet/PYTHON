/**
 /**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timerId;
    let cancelled = false;
    const results = [];

    const executeFn = () => {
        if (cancelled) {
            return;
        }
        const returned = fn(...args);
        results.push({ time: Date.now() - startTime, returned });
        if (!cancelled) {
            timerId = setTimeout(executeFn, t);
        }
    };

    const cancelFn = () => {
        cancelled = true;
        clearTimeout(timerId);
    };

    const startTime = Date.now();
    results.push({ time: 0, returned: fn(...args) });
    timerId = setTimeout(executeFn, t);

    return cancelFn;
};
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */