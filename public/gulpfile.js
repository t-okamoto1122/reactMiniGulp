var gulp = require('gulp');
var react = require('gulp-react');
var using = require('gulp-using');  // ファイル名の出力
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');  // エラー発生時もタスクを継続する

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 9000
        }));
});

gulp.task('react', function() {
    //return gulp.src('./jsx/**/*.jsx')
    return gulp.src('./*.jsx')
        .pipe(plumber())
        .pipe(using())
        .pipe(react())
        .pipe(gulp.dest('js/'));
});

gulp.task('watch', ['webserver'], function() {
    gulp.watch(['./*.jsx'], ['react']);
});
