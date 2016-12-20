// nodejs / browser
// async code execution
//
if (typeof define !== 'function') {
  // nodejs implementation
  var define = require('amdefine')(module);
}
define([], function () {
  'use strict';
  return function(func){
    if(
        typeof process === 'object' &&
        typeof process.nextTick === 'function'
      ){
      process.nextTick(
        function(){
          func.apply(this);
        }
      );
    }else{
      setTimeout(function(){
        func.apply(this);
      },0);
    }
  };
});
