module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: [
                'css/*'
                ],
                dest: 'combined.css'
            },
            js: {
                src: [
                'js/respond.min.js'
                ],
                dest: 'combined.js'
            }
        },
        cssmin: {
            css: {
                src: 'combined.css',
                dest: 'combined.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'combined.js': ['combined.js']
                }
            }
        },
        watch: {
      js: {
        files: ['js/*'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['css/*'],
        tasks: ['concat:css', 'cssmin:css'],
        options: {
          livereload: true,
        }
      }
    }

});
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat:css', 'cssmin:css', 'concat:js', 'uglify:js']);
};
