module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Remove built directory
    clean: {
      build: ['build/']
    },
    // Built stylesheets with less
    less: {
      build: {
        src: 'assets/less/*',
        dest: 'build/css/styles.css'
      }
    },

    // Build the site using grunt-includes
    includes: {
      build: {
        cwd: 'site',
        src: [ '*.html', 'pages/*.html' ],
        dest: 'build/',
        options: {
          flatten: true,
          includePath: 'include',
          banner: '<!-- Site built using grunt includes! -->\n'
        }
      }
    },
    watch:{
          options:{
            spawn:false,
            livereload:false
         },
         css:{
            files:['assets/less/*'],
            tasks:['less']
        },
        includes:{
                files:['site/*.html','site/**/*.html'],
                tasks:['includes']
        }
   }
  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Task definitions
  grunt.registerTask('build', ['clean', 'less', 'includes','watch']);
  grunt.registerTask('default', ['build']);
};
