'use strict';

module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Store 'src' and 'dist' locations
        app: {
            src: 'src',
            dist: 'dist/test',
            scallyCompiled: 'scally-compile'
        },

        // Watch
        watch: {

            testScally: {
                files: [
                    '../<%= app.src %>/**/*.scss'
                ],
                tasks: [
                    'sass:testScally',
                    'postcss:testScally',
                    'cssnano:minifyScally'
                ]
            },

            dev: {
                files: [
                    '<%= app.src %>/assets/scss/**/*.scss',
                    '<%= app.src %>/**/*'
                ],
                tasks: [
                    'sass:dev',
                    'postcss:dev',
                    'assemble'
                ]
            }
        },

        // Assemble
        assemble: {
            options: {
                flatten: true,
                assets: '<%= app.src %>/assets/**/*',
                layout: 'master.hbs',
                layoutdir: '<%= app.src %>/layouts/',
                partials: '<%= app.src %>/partials/**/*',
                data: ['<%= app.src %>/data/**/*', 'package.json'],
                helpers: ['helpers/helpers.js']
            },
            pages: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/views/',
                    src: '**/*.hbs',
                    dest: '<%= app.dist %>/'
                }]
            }
        },

        // Sass compilation
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'expanded',
                precision: 3
            },
            testScally: {
                files: [{
                    expand: true,
                    cwd: '../<%= app.src %>',
                    src: '**/*.scss',
                    dest: '<%= app.scallyCompiled %>',
                    ext: '.css'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= app.src %>/assets/scss',
                    src: '**/*.scss',
                    dest: '<%= app.dist %>/css',
                    ext: '.css'
                }]
            }
        },

        // CSS minification
        cssnano: {
            options: {
                sourcemap: false
            },
            minifyScally: {
                files: {
                    '<%= app.scallyCompiled %>/scally.min.css': '<%= app.scallyCompiled %>/scally.css'
                }
            },
            build: {
                files: {
                    '<%= app.dist %>/css/style.css': '<%= app.dist %>/css/style.css'
                }
            }
        },

        // PostCSS
        postcss: {
            options: {
                map: false,
                processors: [
                    // This reads from 'browserslist' file in project root
                    require('autoprefixer')()
                    //require('stylelint')()
                ]
            },
            testScally: {
                src: '<%= app.scallyCompiled %>/*.css'
            },
            dev: {
                src: '<%= app.dist %>/css/*.css'
            }
        },

        // Connect
        connect: {
            dev: {
                options: {
                    port: 9000,
                    base: '<%= app.dist %>/'
                }
            }
        },

        // Clean
        clean: {
            testScally: {
                files: [{
                    dot: true,
                    src: ['<%= app.scallyCompiled %>/*']
                }]
            },
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist',
                        '<%= app.scallyCompiled %>'
                    ]
                }]
            }
        },

        // Copy
        copy: {
            images: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= app.src %>/assets/img',
                    src: '**/*',
                    dest: '<%= app.dist %>/img'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= app.src %>/assets/fonts',
                    src: '**/*',
                    dest: '<%= app.dist %>/fonts'
                }]
            }
        },

        // Optimise images
        imagemin: {
            options: {
                progressive: true,
                optimizationLevel: 4
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= app.dist %>/img'
                }]
            }
        },

        // Optimise SVG's
        svgmin: {
            options: {
                full: true,
                plugins: [{
                    removeTitle: false,
                    removeAttrs: false,
                    removeDimensions: true
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/img',
                    src: ['**/*.svg'],
                    dest: '<%= app.dist %>/img'
                }]
            }
        },

        // GH Pages
        'gh-pages': {
            options: {
                base: 'dist',
                only: ['test/**/*', '!/*', '!/*/']
            },
            src: ['**']
        }
    });

    // Register tasks and define them

    // Register tasks
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-svgmin');

    // Serve
    grunt.registerTask('serve', [
        'clean:dist',
        'copy',
        'imagemin',
        'svgmin',
        'assemble',
        'sass:dev',
        'postcss:dev',
        'connect',
        'watch:dev'
    ]);

    // Build
    grunt.registerTask('build', [
        'clean:dist',
        'copy',
        'imagemin',
        'svgmin',
        'assemble',
        'sass:dev',
        'postcss:dev',
        'cssnano:build'
    ]);

    // Test Scally
    grunt.registerTask('testScally', [
        'clean:testScally',
        'sass:testScally',
        'postcss:testScally',
        'cssnano:minifyScally'
    ]);

    // Test Scally & watch
    grunt.registerTask('testScallyWatch', [
        'clean:testScally',
        'sass:testScally',
        'postcss:testScally',
        'watch:testScally'
    ]);

    // Deploy
    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);

    // Default—serve
    grunt.registerTask('default', [
        'serve'
    ]);
};
