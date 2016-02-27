exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index;
    for(index in arr){
      if (arr[index] === item){
        return parseInt(index);
      }
    }
    return -1;
  },

  sum : function(arr) {
    var arrSum = 0;
    arr.forEach(function(item) {
      arrSum += item;
    });
    return arrSum;

  },

  remove : function(arr, item) {
    var arrCopy = [];
    var arrItem;
    for(arrItem of arr) {
      if (arrItem !== item) {
        arrCopy.push(arrItem);
      }
    }
    return arrCopy;
  },

  removeWithoutCopy : function(arr, item) {
    var arrLen = arr.length;
    for(var i = 0; i < arrLen; i++) {
      if(arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        arrLen = arrLen - 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;

  },

  truncate : function(arr) {
    arr.pop();
    return arr;

  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail : function(arr) {
    arr.shift();
    return arr;

  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert : function(arr, item, index) {
    var frontArr = arr.slice(0,index);
    var rearArr = arr.slice(index);
    frontArr.push(item);
    return frontArr.concat(rearArr);
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(arrItem) {
      if(arrItem === item) {
        count += 1;
      }
    });
    return count;
  },

  duplicates : function(arr) {
    var sortedArr = arr.sort();
    var duplicateArr = [];
    for(var i = 0; i < sortedArr.length; i ++) {
      if(sortedArr.indexOf(sortedArr[i]) !== sortedArr.lastIndexOf(sortedArr[i])) {
        duplicateArr.push(sortedArr[i]);
        i = sortedArr.lastIndexOf(sortedArr[i]);
      }
    }
    return duplicateArr;
      },

  square : function(arr) {
    return arr.map(function(item) {
      return item * item;
    });

  },

  findAllOccurrences : function(arr, target) {
    var indexArr = [];
    arr.forEach(function(item, index) {
      if(item === target) {
        indexArr.push(index);
      }
    });
    return indexArr;
  }
};
