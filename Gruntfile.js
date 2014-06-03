module.exports = function(grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                src: ['src/css/reset.css', 'src/css/syntax.css', 'src/css/main.css'],
                dest: 'dest/css/built.css'
            }
        },
        sass : {
            dist: {
                files: {
                    'src/css/main.css' : 'src/css/main.scss'
                }
            }
        },
        uglify: {
            dist: {
                options: {
                  banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                files: {
                    'dest/script.min.js' : ['src/js/script.js']
                }
            }
        },
        watch : {
            files: ['src/css/*.scss', 'src/css/*.css'],
            tasks: ['sass', 'concat'],
            options: {}
        },
        jshint: {
            files: ['Gruntfile.js', 'src/js/*.js'],
            options: {
                globals: {
                    console: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
};
