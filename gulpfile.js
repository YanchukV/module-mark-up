var fileinclude = require('gulp-file-include'),
    htmlbeautify = require('gulp-html-beautify'),
    sass = require('gulp-sass'),
    gulp = require('gulp');

gulp.task('sass', function(){
    return gulp.src('templates/components/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('fileinclude', function() {
    gulp.src(['templates/components/*.html'])
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(htmlbeautify())
        .pipe(gulp.dest('app/'));
});

gulp.task('watch', ['sass','fileinclude'], function(){
    gulp.watch('templates/components/**/*.sass', ['sass']);
    gulp.watch('templates/components/**/*.html', ['fileinclude']);
});
