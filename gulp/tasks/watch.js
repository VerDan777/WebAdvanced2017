    'use strict'

module.exports  = function () {
    $.gulp.task('watch',function() {
        $.gulp.watch($.config.src, $.gulp.series('pug'))
        $.gulp.watch($.config.src + '/sass/**/*.scss',$.gulp.series('sass'))
        $.gulp.watch($.config.src + '/js/**/*.js',$.gulp.series('js'))
        $.gulp.watch($.config.src + '/img/*.*',$.gulp.series('copyImg'))
    })
}