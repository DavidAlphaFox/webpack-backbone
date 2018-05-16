requirejs.config({
  baseUrl: '/',
  paths: {
      summary: 'dist/index',
      jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
      backbone: "https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min",
      underscore: "https://cdn.bootcss.com/underscore.js/1.9.0/underscore-min"
  },
  shim: {
      'backbone': {
          deps: ['underscore', 'jquery']
      }
  }
});