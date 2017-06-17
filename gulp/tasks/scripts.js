    'use strict'

module.exports = function () {

$.gulp.task('js',function() {
    return $.gulp.src($.path.app)
        .pipe($.gulp.sourcemaps.init())
        .pipe($.gp.concat('app.js'))
        .pipe($.gulp.sourcemaps.write())
        .pipe($.gulp.dest($.config.root))
})
}