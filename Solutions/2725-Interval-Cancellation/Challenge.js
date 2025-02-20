/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// ------------------------------------
// ## Solutions
// ------------------------------------
// Solution 1 (my solution)
// ------------------------------------
var cancellable = function (fn, args, t) {
  let stopped = false;

  const cancelFn = () => {
    stopped = true;
  };

  const loopFn = () => {
    if (!stopped) {
      fn(...args);
      setTimeout(loopFn, t);
    }
  };

  loopFn();

  return cancelFn;
};

// Solution 2 (interval/clearInterval)
// -------------------------------------
// var cancellable = function (fn, args, t) {
//   fn(...args);
//   const timer = setInterval(() => fn(...args), t);

//   const cancelFn = () => clearInterval(timer);
//   return cancelFn;
// };

// Solution 3 (my solution + timeout/clearTimeout)
// -------------------------------------
// var cancellable = function (fn, args, t) {
//   let timerId = null;
//   fn(...args);

//   const startInterval = () => {
//     timerId = setTimeout(() => {
//       fn(...args);
//       startInterval();
//     }, t);
//   };
//   startInterval();

//   const cancelInterval = () => {
//     if (timerId !== null) {
//       // not totally needed as clearTimeout is very forgiving fn
//       clearTimeout(timerId);
//     }
//   };

//   return cancelInterval;
// };

// -------------------------------
// ## Test
// -------------------------------

const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [
  //     {"time":0,"returned":8},
  //     {"time":35,"returned":8},
  //     {"time":70,"returned":8},
  //     {"time":105,"returned":8},
  //     {"time":140,"returned":8},
  //     {"time":175,"returned":8}
  // ]
}, cancelTimeMs + t + 15);
