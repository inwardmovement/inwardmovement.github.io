var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    minify  = require('gulp-clean-css'),
    uglify  = require('gulp-uglify');

gulp.task('default', [ 'css', 'js' ]);

gulp.task('css', function(){
  return gulp.src('static/css/*.css')
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('static'))
});

gulp.task('js', function(){
  return gulp.src('static/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static'))
});
