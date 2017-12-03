module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify:{
      build:{
        src: "/Users/sameerasarfaraz/Desktop/samsarf.github.io-master/frontend-nanodegree-mobile-portfolio-master/views/js/main.js",
        dest: "/Users/sameerasarfaraz/Desktop/samsarf.github.io-master/frontend-nanodegree-mobile-portfolio-master/views/js/main.min.js"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  grunt.registerTask('default', ['uglify']);

};