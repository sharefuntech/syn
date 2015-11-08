module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      'myTarget': {
        "files": {
          'dest/libs.min.js': ['lib/d3.min.js', 'lib/underscore-min.js'],
          'dest/radar.min.js': ['src/prototype.js']
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'dest/radar.min.css': ['src/radar.css']
        }
      }
    }
  });
  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 默认任务
  grunt.registerTask('default', ['uglify', 'cssmin']);
  // grunt.registerTask(['uglify', 'cssmin']);
}