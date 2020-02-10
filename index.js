const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const el in collection) {
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
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1)
      } 
      for(const el of collection) {
        acc = callback(acc, el)
      }
      return acc
    },

    find: function(collection, predicate) {
      for(const el in collection){
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
    },

    first: function(arrayObject, n) {
      if (!n){
        return arrayObject[0]
      } else {
        return arrayObject.slice(0, n)
      }
    },

    last: function(arrayObject, n) {
      if (!n){
        return arrayObject.slice(-1)[0]
      } else {
        return arrayObject.slice(-n)
        
      }
    },

    compact: function(array) {
      let copyArray = [] 
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
        sortedArray.sort(function(a, b){return callback(a) - callback(b)})
      return sortedArray
    },

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
      let functionList = []
      for(const key in object){
        if (typeof object[key] === "function")
          functionList.push(key)
      }
      return functionList.sort()
    },
  }
})()

fi.libraryMethod()