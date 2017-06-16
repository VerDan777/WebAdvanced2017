'use strict'

global.$ = {
    package:require('./package.json'),
    config: require('./config.js'),

    path: {
        task:require('./gulp/tasks/task.js'),
        app: require('./gulp/path/app.js')
    },
    gulp:require('gulp'),
    del:require('del'),
    browserSync:require('browser-sync').create(),
    gp:require('gulp-load-plugins')()
};


    $.path.task.forEach(function(taskPath) {
        return (taskPath)();
    });

$.gulp.task('default',$.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'js',
        'copyImg',
        
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )  
))