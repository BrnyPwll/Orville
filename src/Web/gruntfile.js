'use strict';

var paths = {
  js: [],
  html: [],
  scss: ['Assets/Style/**/*.scss'],
  css: []
};

module.exports = function(grunt) {

  // should only use this in prod.
  if (process.env.NODE_ENV !== 'production') {
    require('time-grunt')(grunt);
  }

  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: "wwwroot/lib",
          layout: "byComponent",
          cleanTargetDir: "true"
        }
      }
    },

    bgShell: {
      _defaults: {
        bg: true
      },

      runK: {
        cmd: 'k web',
        bg: false
      }
    },


    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'Assets/Style',
          src: ['global.scss', 'Views/**/*.scss'],
          dest: 'wwwroot/style',
          ext: '.css'
        }]
      }
    },

//    typescript: {
//     base: {
//        src: ['Assets/Script/cf/**/*.ts'],
//        dest: 'wwwroot/script',
//        options: {
//          basePath: 'Assets/Script'
//       }
//      }
//    },

    watch: {
      css: {
        files: paths.scss,
        tasks: ['sass']
      }
    },

    concurrent: {
      tasks: ['watch', 'bgShell:runK'],
      options: {
        logConcurrentOutput: true
      }
    },

    env: {
      test: {
        NODE_ENV: 'test'
      }
    },


    concat: {
      libs: {
        files: [{
          src: ['wwwroot/lib/angular/*.js', 'wwwroot/lib/angular-*/*.js'],
          dest: 'wwwroot/lib/angular.js'
        }]
      }
    },

    uglify: {
      libs: {
        files: {
          'wwwroot/lib/angular.min.js': 'wwwroot/lib/angular.js'
        }
      }
    },

    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      libs: {
        src: 'wwwroot/lib/*.min.js'
      },
      images: {
        src: 'Assets/Images/**/*.{jpg,jpeg,gif,png,webp}',
        dest: 'wwwroot/images'
      }
    },

    filerev_assets: {
      dist: {
        options: {
          cwd:'wwwroot/'
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  //grunt.registerTask("default",  [ "bower:install", "sass" ]);
  //grunt.registerTask("dev", ["sass"]);
  //grunt.registerTask("watch", ["watch"]);
  //grunt.registerTask("script", ["typescript"]);


  //grunt.loadNpmTasks("grunt-contrib-sass");
  //grunt.loadNpmTasks("grunt-contrib-watch");
  //grunt.loadNpmTasks("grunt-bower-task");
  //grunt.loadNpmTasks("grunt-typescript");

  grunt.registerTask('default', ['bower:install', 'prepare', 'concurrent']);

  grunt.registerTask('prepare', ['concat', 'uglify', 'filerev', 'filerev_assets']);



};
