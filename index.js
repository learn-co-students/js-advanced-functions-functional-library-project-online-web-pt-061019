const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // console.log(collection) [1,2,3,4]
      // console.log(typeof collection) - object
      // console.log(callback) - alert
      for(const el in collection) {
      // console.log(collection[el]) --{ one: 1, two: 2, three: 3, four: 4 }
        callback(collection[el])
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      for(const el in collection) {
        newArray.push(callback(collection[el]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      // From Test:
      // const callback = (acc, val, collection) => (acc + (val * 3))
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1)
        // to remove the first element and return a new Array
      } 
      for(const el of collection) {
        acc = callback(acc, el)
      }
      return acc
    },

    find: function(collection, predicate) {
      // console.log(typeof collection)
      for(const el in collection){
        // console.log(el)
        if (predicate(collection[el])) {
          return collection[el]
        }
      }
      return undefined
    }, 

    filter: function(collection, predicate) {
      let values = []
      for(const el in collection){
        if (predicate(collection[el])) {
          values.push(collection[el])
        }
      }
      return values
    },

    size: function(collection) {
      let keysArray= []
      for(const keys in collection){
      keysArray.push(collection[keys])
      }
      return keysArray.length
      // return Object.keys(collection).length
    },

    first: function(arrayObject, n) {
      if (!n){
        return arrayObject[0]
      } else {
        return arrayObject.slice(0, n)
        // arrayObject.splice(n);
        // return arrayObject
        // !!! array.splice(start)
      }
      // return !n ? arrayObject[0] : arrayObject.slice(0, n)
    },

    // We can provide two arguments to .slice(), the index where the slice should begin and the index before which it should end.

    last: function(arrayObject, n) {
      if (!n){
        return arrayObject.slice(-1)[0]
        // return arrayObject[arrayObject.length - 1]
      } else {
        return arrayObject.slice(-n)
        // return arrayObject.slice(arrayObject.length - n)
      }
      // return !n ? arrayObject[arrayObject.length - 1] : arrayObject.slice(arrayObject.length - n)
    },

    // When we provide a negative index, the JavaScript engine knows to start counting from the last element in the Array instead of the first.

    // !!Converts Object to boolean
    compact: function(array) {
      let copyArray = [] //falsy values removed
      for(const el in array) {
        if (!!array[el] === true) {
          copyArray.push(array[el])
        }
      }
      return copyArray
    },

    sortBy: function(arrayObj, callback) {
      let sortedArray = []
      for(const el in arrayObj) {
        sortedArray.push(arrayObj[el])
      }
        //points.sort(function(a, b){return a - b}); 
        sortedArray.sort(function(a, b){return callback(a) - callback(b)})
      return sortedArray
    },

    // Array.prototype.flat()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    // var newArray = arr.flat([depth]);

    //  Array.isArray() method determines whether the passed value is an Array

    // flatten: function(arrayObj, shallow = false, newFlatArray= []) {
    // Does not work with Objects >>>
    // return (shallow) ? arrayObj.flat(1) : arrayObj.flat(Infinity)

    // flatten: (arrayObj, shallow = false, newFlatArray= []) => { 
    //   if (!Array.isArray(arrayObj)) {
    //     return newFlatArray.push(arrayObj)
    //   };
    //   if (shallow) {
    //     return arrayObj.flat()
    //     } else {
    //       for(const el of arrayObj) {
    //         fi.flatten(el, false, newFlatArray)
    //       }
    //     }
    //     return newFlatArray
    //   },
    
    // if array is not an array, push all elements in the new array and return it

    flatten: function(arrayObj, shallow = false, newFlatArray= []) {
      if (shallow === true) {
        for(const el of arrayObj) {
          if (Array.isArray(el)){
            for(const val of el){
              newFlatArray.push(val)
            }
          } else {
            newFlatArray.push(el)
          }
        }
      } else {
        for(const el of arrayObj){
          if (Array.isArray(el)) {
            this.flatten(el, false, newFlatArray)
          } else {
            newFlatArray.push(el)
          }
        }
      }
      return newFlatArray
    },

    //points.sort(function(a, b){return a - b}); 
    uniq: function(array, isSorted, callback) {
      const uniqArray = []
      if (isSorted === false) {
        array.sort(function(a, b){return a - b})
      }
      for(const el of array) {
        if (callback) {
          if(!uniqArray.find(e => callback(e) === callback(el))) {
            uniqArray.push(el)
          }
        } else {
          if(!uniqArray.find(e => e === el)) {
            uniqArray.push(el)
          }
        }
      }
      return uniqArray
    },

    // uniq: function(array, isSorted, callback = val => val) {
    //   const uniqArray = []
    //   for(const val of array) {
    //     if(!uniqArray.find( el => callback(val) === callback(el))) {
    //       uniqArray.push(val)
    //     }
    //   }
    //   return uniqArray
    // },


    // Object Functions
    keys: function(object) {
      const keysArray = []
      for(const key in object)
        keysArray.push(key)
      return keysArray
    },

    values: function(object) {
      const valuesArray = []
      for(const value in object)
        valuesArray.push(object[value])
      return valuesArray
    },

    functions: function(object) {
      // console.log(object)
      let functionList = []
      for(const key in object){
        if (typeof object[key] === "function")
          functionList.push(key)
      }
      return functionList.sort()
      // return Object.keys(object).filter(key => typeof(object[key]) === 'function').sort()
    },
  }
})()

fi.libraryMethod()
