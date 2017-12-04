module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin : {
      target : {
        src : "/views/css/bootstrap-grid.css",
        dest : "/views/css/bootstrap-grid.min.css"
      }
    }
    uglify:{
      build:{
        src: "/Users/sameerasarfaraz/Desktop/samsarf.github.io-master/frontend-nanodegree-mobile-portfolio-master/views/js/main.js",
        dest: "/Users/sameerasarfaraz/Desktop/samsarf.github.io-master/frontend-nanodegree-mobile-portfolio-master/views/js/main.min.js"
      }
    }
  });

  //load cssmin plugin, uglify
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  //create default task
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('default', ['uglify']);

};

  