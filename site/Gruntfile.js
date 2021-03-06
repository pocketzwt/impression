module.exports = function(grunt) {
    'use strict';
    var path, webpack;
    require('load-grunt-tasks')(grunt);
    path = require('path');
    webpack = require('webpack');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        execute: {
            target: {
                src: ['server.js']
            }
        },
        clean: {
            all: {
                src: ["build/**/*"]
            }
        },
        copy: {
            impression: {
                files: [{
                    expand: true,
                    cwd: '../src/scripts',
                    src: ['**/*'],
                    dest: 'scripts/components/base/'
                }]
            },
            img: {
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['**/*'],
                    dest: 'build/images/'
                }]
            },
            font: {
                files: [{
                    expand: true,
                    cwd: '../src/styles/font-awesome',
                    src: ['fonts/*'],
                    dest: 'build/styles/'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'build/'
                }],
                options: {
                    process: function(content, srcpath) {
                        return content.replace(/<\/body>/, "<script src='scripts\/app.js'></script></body>");
                    }
                }
            },
            animate: {
                files: [{
                    expand: true,
                    cwd: '../src/styles/animate',
                    src: ['*.css'],
                    dest: 'build/styles/animate'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    trace: false,
                    quiet: false,
                    debugInfo: false,
                    lineNumbers: false,
                    update: true
                },
                files: [{
                    expand: true,
                    cwd: '../src/styles/',
                    src: 'index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: '../src/styles',
                    src: 'font-awesome/index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 100 version', '> 99%']
            },
            auto: {
                expand: true,
                flatten: true,
                src: 'build/styles/*.css',
                dest: 'build/styles/'
            }
        },
        cssmin: {
            core: {
                options: {
                    keepSpecialComments: 0,
                    report: "gzip"
                },
                files: [{
                    expand: true,
                    cwd: 'build/styles',
                    src: ['**/*.css'],
                    dest: 'build/styles/'
                }]
            }
        },
        watch: {
            sass: {
                files: '../src/styles/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            },
            impression: {
                files: '../src/scripts/**/*.js',
                tasks: ['copy:impression']
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['$super', '$', 'exports', 'require', 'module']
                },
                report: 'gzip',
                preserveComments: false
            },
            js: {
                files: [{
                    expand: true,
                    cwd: "build/",
                    src: ["scripts/*.js"],
                    dest: "build/"
                }]
            }
        },
        eslint: {
            target: ['../src/scripts/**/*.js', 'scripts/**/*.js']
        },
        scsslint: {
            allFiles: [
                '../src/styles/**/*.scss',
                'styles/**/*.scss',
            ],
            options: {
                exclude: ['../src/styles/font-awesome/**'],
                // bundleExec: true,
                config: '.scss-lint.yml',
                reporterOutput: 'scss-lint-report.xml',
                colorizeOutput: true
            }
        },
    });

    grunt.registerTask('default', ['eslint', 'clean', 'copy:img', 'copy:impression', 'sass', 'copy:font', 'autoprefixer','execute']);

    grunt.registerTask('ready', ['eslint', 'clean']);
    grunt.registerTask('deploy', ['copy:html', 'copy:img', 'sass', 'copy:font','autoprefixer','cssmin','uglify']);
};
