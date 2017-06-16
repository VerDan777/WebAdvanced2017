    'use strict'

    module.exports = function() {

        $.gyulp.task('pug',function() {
            return $.gulp.src($.config.src)
            .pipe($.gb.pug({pretty:true})).on('error',$.gb.notify.onError(function(error){
                return {
                    title:'Pug',
                    message:error.message
                }
            }
        ))
        .pipe($.gulp.dest($.config.root));
    });
    };