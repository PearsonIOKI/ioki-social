module.exports = function (grunt) {
    "use strict";

    var settings = grunt.file.readJSON('settings.json'), //loading settings file with pages and components definitions
        default_exclude = settings.default_exclude,
        pages = settings.pages, //pages list
        components = settings.components, //components list
        requirejs = {}, //requirejs configuration obj
        compile_arr = [], //array with task names for grunt task registration
        build_arr; //tasks for build

    //build directory name
    grunt.option("target", settings.build_dir);

    //options for pages compilation
    requirejs.pages = {
        options: {
            mainConfigFile: "app/conf.js", //requirejs build config
            baseUrl: "./",
            appDir: "app/",
            dir: "../<%= grunt.option(\"target\") %>",
            optimize: "uglify",
            removeCombined: true,
            findNestedDependencies: false, //do not play Leonardo Di Caprio
            fileExclusionRegExp: /^common|mocks$/, //do not parse common(espessialy components)
            modules: pages //pages list to optimize
        }
    };

    //go through all components and
    // create configuration objects for each one
    // create task for registration
    components.forEach(function (component) {
        compile_arr.push('requirejs:' + component.name);
        requirejs[component.name] = {
            options: {
                mainConfigFile: "app/conf.js",
                baseUrl: "./app",
                removeCombined: true,
                findNestedDependencies: true, //inception Leo

                name: component.name,
                //by default do not include known libraries and this pointed in settings file
                exclude: default_exclude.concat(component.exclude),
                out: "../<%= grunt.option(\"target\") %>/common/" + component.name + "/index.js"
            }
        };
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: requirejs, //created object
        less: {
            development: {
                options: {
                    yuicompress: false
                },
                files: {
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap.css': 'app/vendors/pearsonstrap-0.9.0/less/1.0.0/pearson.less',
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap-app.css': 'app/vendors/pearsonstrap-0.9.0/less/1.0.0/app/pearson-app.less',
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap-site.css': 'app/vendors/pearsonstrap-0.9.0/less/1.0.0/site/pearson-site.less',
                    '../<%= grunt.option(\"target\") %>/css/app.css': 'app/less/app.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    '../<%= grunt.option(\"target\") %>/css/app.min.css': ['../<%= grunt.option(\"target\") %>/css/app.css'],
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap.min.css': ['../<%= grunt.option(\"target\") %>/css/pearsonstrap.css'],
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap-app.min.css': ['../<%= grunt.option(\"target\") %>/css/pearsonstrap-app.css'],
                    '../<%= grunt.option(\"target\") %>/css/pearsonstrap-site.min.css': ['../<%= grunt.option(\"target\") %>/css/pearsonstrap-site.css']
                }
            }
        },
        concat: {
            dist: {
                src: ['../<%= grunt.option(\"target\") %>/css/pearsonstrap.min.css' , '../<%= grunt.option(\"target\") %>/css/app.min.css'],
                dest: '../<%= grunt.option(\"target\") %>/css/app.min.css'
            }
        },
        clean: {
            build: {
                src: ['../<%= grunt.option(\"target\") %>']
            },
            pearsonstrap: {
                src: ['../<%= grunt.option(\"target\") %>/vendors/pearsonstrap*/**', '!../<%= grunt.option(\"target\") %>/vendors/pearsonstrap*/js/*.js'],
                filter: 'isFile'
            },
            options: {
                force: true
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-junit-reporter'),
                reporterOutput: '../../build/logs/xunit/jshint.xml'
            },
            ci: [
                'Gruntfile.js',
                'package.json',
                'app/**/*.js',
                '!app/vendors/**/*.js',
                '!app/bower_components/**/*.js'
            ]
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: ['app/vendors/pearsonstrap-0.9.0/images/*'],
                        dest: '../<%= grunt.option(\"target\") %>/images',
                        filter: 'isFile',
                        flatten: true

                    },
                    {
                        expand: true,
                        src: ['app/vendors/pearsonstrap-0.9.0/font/*'],
                        dest: '../<%= grunt.option(\"target\") %>/font',
                        filter: 'isFile',
                        flatten: true

                    }

                ]
            },
            bowercopy: {
                files: [
                    {
                        expand: true,
                        src: ['**'],
                        dest: 'app/vendors/',
                        filter: 'isFile',
                        flatten: false,
                        cwd: 'app/bower_components/'

                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js', 'app/**/*.js'],
                tasks: ['jshint:ci', 'karma:ci'].concat(compile_arr)
            },
            less: {
                files: 'app/less/**/*.less',
                tasks: ['less', 'cssmin', 'concat']
            }
        },
        karma: {
            options: {
                configFile: 'karma.conf.js',
                runnerPort: 9999
            },
            ci: {
                browsers: ['PhantomJS'],
                singleRun: true,
                reporters: 'junit',
                junitReporter: {
                    outputFile: '../../build/logs/xunit/karma.xml'
                }
            },
            dev: {
                browsers: ['PhantomJS', 'Firefox', 'Chrome'],
                reporters: 'progress'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

    build_arr = ['requirejs:pages', 'clean:pearsonstrap'];
    build_arr = build_arr.concat(compile_arr);
    build_arr = build_arr.concat(['less', 'cssmin', 'concat', 'copy:main']);

    grunt.registerTask('build', build_arr);

    grunt.registerTask('test', ['jshint:ci', 'karma:ci']);

    grunt.registerTask('testDev', ['jshint:ci', 'karma:dev' ]);

    grunt.registerTask('default', ['clean', 'build', 'testDev']);
};
