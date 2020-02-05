const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const el in collection){
        callback(collection[el])
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = []
      for(const el in collection){
        newArr.push(callback(collection[el]))
      }
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      if(!acc){
        acc = collection[0];
        collection = collection.slice(1);
      }
      for(const el of collection){
        acc = callback(acc, el)
      }
      return acc;
    },

    find: function(collection, predicate){
      for(const el in collection){
        if(predicate(collection[el])){
        return collection[el]
        }
      }
      return undefined;
    },

    filter: function(collection, predicate){
      let trueValues = []
      for(const el in collection){
        if(predicate(collection[el])){
          trueValues.push(collection[el])
        }
      }
      return trueValues;
    },

    size: function(collection){
      if(Array.isArray(collection)){
        return collection.length
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n){
      if(!n){
        return array[0];
      }else{
        return array.slice(0, n);
      }
    },

    last: function(array, n){
      if(!n){
        return(array[array.length -1]);
      }else{
        return array.slice(-n);
      }
    },

    compact: function(array){
      return array.filter(x => !!x === true);
    },

    sortBy: function(array, callback){
        let copyArr = [...array]
        return copyArr.sort((x,y) => callback(x) - callback(y));

    },

    flatten: function(array, shallow = false, newArr = []){
      if(shallow === true){
        for(const el of array){
          if(Array.isArray(el)){
            for(const v of el){
              newArr.push(v)
            }
          }else{
            newArr.push(el)
          }
        }
      }else{
        for(const el of array){
          if(Array.isArray(el)){
            this.flatten(el, false, newArr)
          }else{
            newArr.push(el)
          }
        }
      }
      return newArr;
    },

    uniq: function(array, isSorted, callback){
      const newArr = []
      if(isSorted === false){
        array.sort((a,b) => a - b)
      }
      for(const el of array){
        if(callback){
          if(!newArr.find(i => callback(i) === callback(el))){
            newArr.push(el)
          }
        } else {
          if(!newArr.find(i => i === el)){
            newArr.push(el)
          }
        }
      }
      return newArr;
    },

    keys: function(obj){
      const keysArr = [];
      for(let k in obj){
        keysArr.push(k)
      }
      return keysArr;
    },

    values: function(obj){
      const valsArr = [];
      for(let k in obj){
        valsArr.push(obj[k])
      }
      return valsArr;
    },

    functions: function(fi) {
      return Object.keys(fi).filter(k => typeof(fi[k]) === 'function').sort()
    },


  }
})()

fi.libraryMethod()
