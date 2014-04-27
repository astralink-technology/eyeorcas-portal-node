module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            build: {
                src: 'public/css/compiled/site-eyeorcas-portal.css',
                dest: 'public/css/compiled/site-eyeorcas-portal.min.css'
            }
        },
        sass: {
            build: {
                files: {
                    'public/css/compiled/site-eyeorcas-portal.css': 'public/css/pages/site-eyeorcas-portal.scss'
                }
            }
        }
    });

    //grunt plugins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    //default tasks
    grunt.registerTask(
        'buildcss',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'sass', 'cssmin' ]
    );
}