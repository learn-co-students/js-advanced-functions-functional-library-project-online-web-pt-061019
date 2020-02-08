const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        let newCollection = collection.slice()
        for (let i = 0; i < newCollection.length; i++) {
          callback(newCollection[i], i, newCollection)
        }
        return collection
      } else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          callback(values[i], i, values)
        }
        return collection
      }
    },

    map: function(collection, callback) {
      let newArray = [];
      if (Array.isArray(collection)) {
        let newCollection = collection.slice()
        for (let i = 0; i < newCollection.length; i++) {
          let newElement = callback(newCollection[i], i, newCollection)
          newArray.push(newElement)
        }
        return newArray
      } else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          let newElement = callback(values[i], i, values)
          newArray.push(newElement)
        }
        return newArray
      }
    },

    reduce: function(collection, callback, acc) {
      let newArray;
      if (Array.isArray(collection)) {
        newArray = collection;
      } else {
        newArray = Object.values(collection);
      }
      let accumulator;
      if (!!acc) {
        accumulator = acc;
        for (let i = 0; i < newArray.length; i++) {
          accumulator = callback(accumulator, newArray[i], newArray);
        }
      } else {
        accumulator = newArray[0];
        for (let i = 1; i < newArray.length; i++) {
          accumulator = callback(accumulator, newArray[i], newArray);
        }
      }
      return accumulator;
    },

    find: function(collection, predicate) {
      let newArray;
      let result;
      if (Array.isArray(collection)) {
        newArray = collection;
      } else {
        newArray = Object.values(collection);
      }
      for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i]) === true) {
          result = newArray[i]
          break
        } else {
          result = undefined;
        }
      }
      return result
    },

    filter: function(collection, predicate) {
      let newArray;
      let results = [];
      if (Array.isArray(collection)) {
        newArray = collection;
      } else {
        newArray = Object.values(collection);
      }
      for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i]) === true) {
          results.push(newArray[i]);
        }
      }
      return results;
    },

    size: function(collection) {
      let newArray;
      if (Array.isArray(collection)) {
        newArray = collection;
      } else {
        newArray = Object.keys(collection);
      }
      return newArray.length;
    },

    first: function(array, n=1) {
      let newArr = [];
      if (n === 1) {
        newArr = array[0];
      } else {
        for (let i = 0; i < n; i++) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    last: function(array, n=1) {
      if (n===1) {
        return array[array.length - 1]
      } else {
        return array.slice(-n);
      }
    },

    compact: function(array) {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      let newArray = [...array];
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      });
    },

    flatten: function(array, shallow=false) {
      //if array contains an array, flatten it
      let newArray = [];
      if (shallow === true) {
        newArray = array.flat()
      } else {
        newArray = array.flat(Infinity)
        //maybe not supposed to use flat here? Unsure.
      }
      return newArray;
    },

    uniq: function(array, isSorted=false, callback) {
      let newArray = [];
      if (!callback) {
        for (let i = 0; i < array.length; i++) {
          if (!newArray.includes(array[i])) {
            newArray.push(array[i])
          }
        }
      } else if (!!callback) {
        let alteredArray = [];
        for (let i = 0; i < array.length; i++) {
          if (!alteredArray.includes(callback(array[i]))) {
            alteredArray.push(callback(array[i]));
            newArray.push(array[i])
          }
        }
      }
      return newArray;
    },

    keys: function(object) {
      let newArray = [];
      for (let key in object) {
        newArray.push(key)
      }
      return newArray;
    },

    values: function(object) {
      let newArray = [];
      for (let key in object) {
        newArray.push(object[key])
      }
      return newArray;
    },

    functions: function(object) {
      let names = fi.keys(object);
      let functions = [];
      for (let el of names) {
        if (typeof object[el] === "function") {
          functions.push(el);
        }
      }
      const sortedFunctions = functions.sort((a, b) => a - b);
      return sortedFunctions;
    }


  }
})()

fi.libraryMethod()
