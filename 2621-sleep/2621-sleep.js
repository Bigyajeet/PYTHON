/**
 /**
 * @param {number} millis
 * @returns {Promise}
 */
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

/** * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */