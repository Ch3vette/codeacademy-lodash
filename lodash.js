const _ = {
  clamp(number,lowerBound,upperBound){
    let lowerClampedValue = Math.max(number,lowerBound);
    let clampedValue =Math.min(lowerClampedValue,upperBound);
    return clampedValue;
  },

  inRange(number,start,end){
    if (end === undefined) {
      end = start
      start = 0
    } if (start > end) {
      let newEnd = end
      end = start
      start = newEnd
    }
    let isInRange = start <= number && number < end
    return isInRange
  },

  words(string){
    let words = string.split(' ');
    return words
  },

  pad(string,length) {
    if(length>string.length){
      let startPad = Math.floor((length-string.length)/2)
      let endPad = length - string.length - startPad
      const finalPad = ' '.repeat(startPad) + string + ' '.repeat(endPad)
      return finalPad
    } else {
      return string
    }
  },
  has(object,key){
    let hasValue = object[key];
    if(hasValue != undefined){
      return true
    }
    return false
    },
  invert(object){
    let newObject = {}
    for (let key in object){
      const originalValue = object[key];
      newObject = {originalValue : key}
    }
    return newObject
  },

  findKey(object,predicate) {
    for (let key in object) {
      let value=object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key
      }
    }
    return undefined
  },

  drop(array,number) {
    if (number === undefined) {
      number = 1
    }
    let droppedArray = array.slice(number);
    return droppedArray
  },

  dropWhile(array,predicate) {
    const callback = (element, index) =>{
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(callback);
    let droppedArray = this.drop(array,dropNumber);
    return droppedArray;
  },

  chunk(array, size) {
    if(size === undefined) {
      size = 1
    }
    let arrayChunks = [];
    for (let counter = 0; counter< array.length; counter+= size) {
      let arrayChunk = array.slice(counter,counter+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};


module.exports = _;
