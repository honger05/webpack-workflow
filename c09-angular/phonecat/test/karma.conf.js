module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'src/app/bower_components/angular/angular.js',
      'src/app/bower_components/angular-route/angular-route.js',
      'src/app/bower_components/angular-mocks/angular-mocks.js',
      'src/app/components/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
