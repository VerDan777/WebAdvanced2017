    'use strict'

module.exports = function () {

$.gulp.task('js',function() {
    return $.gulp.src($.config.src + '/js/app.js')
        .pipe($.gulp.sourcemaps,init())
        .pipe($.gulp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root))
})
}