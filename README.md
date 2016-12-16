# asyncCode

Creates a new call stack for a code block

For use in nodejs:

```
npm install async-code --save
```


Now for every async code block'

```
/* uncomment for use with nodejs */
// var requirejs = require('requirejs');
// requirejs.config({
//   nodeRequire: require
// });

requirejs(['../asyncCode'],function(async){
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

```

```
const myAsyncFunc = function(callback){
  // Function scope/codeblock
  asyncCode(
    // This is executed in another code block
    function(){
      // Do your async thing
      // ....
      // .....
      callback('ok');
    }
  );
  return this;
}


```
