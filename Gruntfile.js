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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass', 'concat']);
};
