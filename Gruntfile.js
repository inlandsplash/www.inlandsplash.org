module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmllint: {
        all: [
          '_site/**/*.html'
        ]
    },

    shell: {
        jekyllBuild: {
            command: 'jekyll build'
        }
    },
    connect: {
        server: {
            options: {
                port: 4005,
                base: '_site'
            }
        }
    },
    watch: {
      livereload: {
        files: [
            '_config.yml',
            '{**/*,*}.{scss,html,md,yml}',
            '!{**/*,*}.{DS_Store,swp}',
            '!_site/**',
            '!vendor/**'
        ],
        tasks: ['shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['shell', 'connect', 'watch']);

  grunt.registerTask('test', ['htmllint']);

};
