    'use strict'

module.exports = function() {
    $.gul.task('copyImg',function(){

    return $.gulp.src($.config.src + '/img/*.* ',{since: $.gulp.lastRun('copyImg')})
        .pipe($.gulp.dest($.config.root + '/img' ))
    })
  
}