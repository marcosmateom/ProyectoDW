var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

//Var styles para que funcione con el watch
var Styles_f = function(done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('html/css/'));
    done();
};

var Styles_f2 = function(done) {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('../proyectodb/css/'));
    done();
};

gulp.task('styles', Styles_f);
gulp.task('stylesdb', Styles_f2);

//Watch task
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', Styles_f);
});

gulp.task('watchdb', function() {
    gulp.watch('sass/**/*.scss', Styles_f2);
});

gulp.task('webserver', function() {
    gulp.src('html')
        .pipe(webserver({
            fallback: './index.html',
            livereload: true,
            directoryListing: true,
            open: true
        }));
});