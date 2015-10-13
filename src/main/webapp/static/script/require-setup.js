requirejs.config({

 baseUrl: 'static/script/',

 shim : {
  "bootstrap" : { "deps" :['jquery'] }
 },

 paths: {
  // the left side is the module ID,the right side is the path to
  jquery: 'jquery-1.11.3.min',
  bootstrap:'bootstrap.min'
 }

});