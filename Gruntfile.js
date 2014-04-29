module.exports = function(grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                src: 'src/css/*.css',
                dest: 'dest/css/built.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
};