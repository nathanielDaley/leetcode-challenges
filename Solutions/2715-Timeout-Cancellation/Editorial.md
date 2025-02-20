Timeout Cancellation

LeetCode
20759
Jun 27, 2023
Editorial
Overview:
We need to implement a functioncancellablethat executes a given function (let's call itfn) after a specified delay (tmilliseconds), unless a cancel function (cancelFn) is called before the delay expires. The cancel function should prevent the execution of the delayed function.

In other words, we have a taskfnwe want to do, but we want to wait for a bit (tmilliseconds) before doing it. However, if we change our mind and want to cancel this task before the wait time is up, we can use a cancel function (cancelFn). If we don't cancel, the task will happen after the delay.

Closures:
In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. The lexical environment consists of the variables, functions, and scopes available at the time of the closure's creation.

Working:

When a function is defined inside another function, a closure is created. The inner function retains a reference to the variables and scope of its outer function.
When the outer function finishes executing and returns, the closure is still intact with its captured variables and scope chain.
The closure allows the inner function to access and manipulate the variables of its outer function, even if the outer function's execution has been completed.
This behavior is possible because the closure maintains a reference to its outer function's variables and scope chain, preventing them from being garbage collected.
For a more detailed explanation of closures, check out theCounter editorial.

In the context of the problem, closures are used to maintain a reference to the timer variable even after the function that creates the closure has returned. This allows thecancelFnfunction to access and modify the timer variable, effectively canceling the execution of the delayed function.

setTimeout:
setTimeoutis a built-in function in JavaScript that allows you to schedule the execution of a function after a specified delay. It can take an infinite number of arguments but usually, its first two arguments are always a function to be executed and a delay time in milliseconds.

Note: setTimeoutis avariadic function that can accept an infinite number of arguments.

Here's an example of how to usesetTimeout:

function delayedFunction() {
console.log("Delayed function executed!");
}

const delay = 2000;

const timerId = setTimeout(delayedFunction, delay);

// To cancel the execution before the delay expires:
clearTimeout(timerId);

Working:

WhensetTimeoutis called, it starts a timer and sets it to run after the specified delay.
After the delay expires, the JavaScript event loop puts the specified function in the execution queue.
Once the call stack is empty, the function is executed, and any associated code inside it is run.
If thesetTimeoutfunction is canceled before the delay expires, the scheduled function will not be executed.
For a deeper understanding ofsetTimeout, refer to the following editorials:Cache With Time Limit Editorial,Debounce Editorial, andThrottle Editorial.

In the context of the problem,setTimeoutis used inside thecancellablefunction to schedule the execution of the delayed function (fn) after the specified delay (t).

Overall,closuresandsetTimeoutwork together in this problem to create a cancelable delayed function execution mechanism. The closure preserves the reference to thetimeoutIdvariable, andsetTimeoutschedules the execution of the function after the specified delay.

Approach 1: Using Closure

Intuition:

We use thesetTimeoutfunction to schedule the execution of the delayed functionfnafter the specified timeoutt. Then, we use theapplymethod to pass the arguments from theargsarray tofn.

When we callfn.apply(null, args), we're telling JS to execute thefnfunction with the arguments in theargsarray. Thenullargument specifies that the function should be executed in the global scope rather than in the scope of some other object. This is useful because we want to call a function defined in the global scope from within another function.

Also, by storing the timer ID returned bysetTimeoutin thetimeoutIdvariable, we can cancel the execution of the delayed function by callingclearTimeoutwith thetimeoutId.

Algorithm:

Inside thecancellablefunction, we usesetTimeoutto schedule the execution offnafter the specified timeoutt. Thefnfunction is invoked using theapplymethod, withnullas the context andargsas the arguments. Additionally, thesetTimeoutfunction returns a timer ID, which is stored in thetimeoutIdvariable.

Afterward, acancelFnfunction is defined, which callsclearTimeoutwith thetimeoutIdto cancel the execution of the delayed function.
Finally, return thecancelFnfrom thecancellablefunction.

Implementation:

/\*\*

- @param {Function} fn
- @param {Array} args
- @param {number} t
- @return {Function}
  \*/
  var cancellable = function(fn, args, t) {
  const timeoutId = setTimeout(function() {
  fn.apply(null, args);
  }, t);

const cancelFn = function() {
clearTimeout(timeoutId);
};

return cancelFn;
};

Complexity Analysis:
Time complexity: O(1)

Space complexity: O(1)

While the time and space complexity of the cancellable function itself isO(1), it's important to note that the time complexity of the functionfnthat is passed as an argument can have some different complexity.

Approach 2: Using Boolean flag
Intuition:
We can use a boolean variable that decides whether calling functionfnis allowed or not.

Algorithm:
Initialize a boolean variableisCancelledasfalseto track the cancellation status.
UsesetTimeout()to schedule the execution offnafter a delay oftmilliseconds, but only ifisCancelledisfalse.
Return a function that flips the value ofisCancelledtotrue, canceling the execution offn. The cancellation function ensures thatfnwill never be called if it is invoked before the delay expires.
While this approach does prevent thefnfunction from being executed if the cancel function is invoked, it's worth noting that thesetTimeoutcallback still gets executed when the delay is over. This means that even when canceled, the function still uses up a slot in the JavaScript event loop queue. As such, in terms of computational efficiency, this approach might be slightly less efficient than Approach 1, which cancels thesetTimeoutentirely.

Implementation:

/\*\*

- @param {Function} fn
- @param {Array} args
- @param {number} t
- @return {Function}
  \*/
  var cancellable = function(fn, args, t) {
  let isCancelled = false;
  setTimeout(() => {
  if(!isCancelled)
  fn(...args);
  }, t);

return () => {
isCancelled = true;
};
};

Complexity Analysis:
Time complexity: O(1)

Space complexity: O(1)

While the time and space complexity of the cancellable function itself isO(1), it's important to note that the time complexity of the functionfnthat is passed as an argument can have some different complexity.
