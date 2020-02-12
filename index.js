const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++)
         callback(collection[i])
      } else {
        let object = Object.values(collection)
        for (let i = 0; i < object.length; i++){
         callback(object[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++)
         newArr.push(callback(collection[i]))
      } else {
        let object = Object.values(collection)
        for (let i = 0; i < object.length; i++){
         newArr.push(callback(object[i]))
        }
      }
      return newArr
    },

    reduce: function(collection, callback, acc) {
      for (let i = 0; i < collection.length; i++){
        if (acc === undefined){
        acc = collection[0]
        i++
      }
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate){
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate){
      let truthArr = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          truthArr.push(collection[i])
        }
      }
      return truthArr
    },

    size: function(collection){
      if (Array.isArray(collection)){
         return collection.length
      } else {
        let object = Object.values(collection)
         return object.length
      }
    },

    first: function(array, n = 0){
      if (n === 0){
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n = 0){
      if (n === 0){
        return array[array.length - 1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array){
      let truthArray = []
      for (let i = 0; i < array.length; i++){
        if (!!array[i]){
          truthArray.push(array[i])
        }
      }
      return truthArray
    },

    sortBy: function(array, callback){
      let newArr = array.slice()
      newArr.sort((a, b) => callback(a) - callback(b))
      return newArr
    },

    flatten: function(array, shallow){
      if (shallow){
        return array.flat()
      } else {
        return array.flat(Infinity)
      }
    },

    uniq: function(collection, isSorted, callback = x => x){
      let arr = []
      for (const i of collection){
        let counter = 0
        for (const n of arr){
          if (callback(i) === callback(n)){
            counter++
          }
        }
        if (counter < 1){
          arr.push(i)
        }
      }
      return arr
    },

    keys: function(object){
      return Object.keys(object)
    },

    values: function(object){
      return Object.values(object)
    },

    functions: function(object) {
      let functionNames = []
      for (let key in object){
        if(typeof object[key] === 'function'){
          functionNames.push(key)
        }
      }
      return functionNames
    }
  }
})()

fi.libraryMethod()