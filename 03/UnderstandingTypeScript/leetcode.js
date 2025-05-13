//ignore this file for note, this is just for Leet code work

/**
 * 
 * 
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
 * 
 */

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError("TypeError: array.groupBy requires a function arg");
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  //Using the given array, iterate over the existing
  //collection.
  return this.reduce((grouped, item) => {
    const key = fn(item); //get the key from the callback

    if (!grouped[key]) {
      //error handling.... just in case.
      grouped[key] = [];
    }

    grouped[key].push(item); // Add the current item to the corresponding group
    return grouped;
  }, {});
};
