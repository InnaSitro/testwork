// Gruntfile.js
 
// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {
 
  // ===========================================================================
  // Конфигурация GRUNT ===========================================================
  // ===========================================================================
  var themeDir = 'content/',
        jsDir = themeDir + 'js/',
        jsFiles = {
            common: {
                files: [
                        jsDir + 'vendor/jquery.min.js',
                        jsDir + 'vendor/cssua.min.js',
                        jsDir + 'vendor/swiper.min.js',
                        jsDir + 'swiperslider-init.js', 
                        jsDir + 'vendor/jquery.validate.min.js', 
                        jsDir + 'jqueryvalidate-init.js',                      
                        jsDir + 'common.js',
                    ],
                general: jsDir + 'common.prod.js',
                min: jsDir + 'prod/common.prod.min.js'
            },
        };

    grunt.initConfig({
     
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            common: {
                options: {sourceMap: true,},
                src: jsFiles.common.files,
                dest: jsFiles.common.min
            },
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'content/css/style.css': 'content/css/style.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 versions', 'ie 8', 'ie 9']})
                ]
            },
            dist: {
                files: {
                  'content/css/style.min.css':'content/css/style.min.css'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: ['content/css/style.css'],
                    dest: 'content/css/style.min.css',
                }]
            }
        },
        watch: {
            jsCommon: {
                files: jsFiles.common.files,
                tasks: ['uglify:common'],
                options: {spawn: false},
            },
            sass: {
                files: ['node_modules/bootstrap/scss/*.scss', 'node_modules/bootstrap/scss/mixin/*.scss', 'node_modules/bootstrap/scss/utilities/*.scss', 'content/css/vendor/*.css','content/css/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        },
     
    });
     
  // ===========================================================================
  // Загружаем модули GRUNT ========================================================
  // ===========================================================================
  // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', [ 'sass', 'postcss:dist', 'cssmin', 'uglify:common']);
    grunt.registerTask('jsCommon', ['uglify:common']);
 
};