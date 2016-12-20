var requirejs = require('requirejs');

requirejs.config({
  nodeRequire: require
});

requirejs(['../asynccode'],function(async){
  var max = 1024 * 1024;
  var i = 0;

  var next = function(){
    if(i < max){
      async(function(){
        Math.sqrt(i);
        i++;
        next();
      });
    }else{
      console.log('ready'); // eslint-disable-line
    }
  };
  next();
});
