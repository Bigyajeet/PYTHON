/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;
        let rejected = false;

        if (functions.length === 0) {
            resolve([]);
            return;
        }

        for (let i = 0; i < functions.length; i++) {
            functions[i]().then(value => {
                if (rejected) return;
                results[i] = value;
                completed++;
                if (completed === functions.length) {
                    resolve(results);
                }
            }).catch(reason => {
                if (rejected) return;
                rejected = true;
                reject(reason);
            });
        }
    });
};