
module.exports = function(grunt) {
  grunt.initConfig({

    bower: {
      install: {
        options: {
          targetDir: "wwwroot/lib",
          layout: "byComponent",
          cleanTargetDir: "false"
        }
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

    watch: {
      css: {
        files: 'Assets/Style/**/*.scss',
        tasks: ['sass']
      }
    },


  });

  grunt.registerTask("default",  [ "bower:install", "sass" ]);
  grunt.registerTask("dev", ["sass", "watch"]);
  grunt.registerTask("devwatch", ["watch"]);


  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-bower-task");


};
