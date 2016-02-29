exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

  speak : function(fn, obj) {
    return fn.apply(obj,[]);

  },

  functionFunction : function(str) {
    return function(str1) {
      return str + ', ' + str1;
    };

  },

  makeClosures : function(arr, fn) {
    var functionArr = [];
    var clousure = function(val){
      return function(){
        return fn(val);
      };
    };
    for(var i = 0; i < arr.length; i++) {
      functionArr.push(clousure(arr[i]));
    }
    return functionArr;

  },

  partial : function(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    };

  },

  useArguments : function() {
    var sum = 0;
    for(var item of arguments){
      sum += item;
    }
    return sum;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
      var moreArgs = Array.prototype.slice.call(arguments);
      var finalArgs = args.concat(moreArgs);
      return fn.apply(null, finalArgs);
    };

  },

  curryIt : function(fn) {

  }
};
