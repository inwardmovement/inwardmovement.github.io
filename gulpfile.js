var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    exec    = require('child_process').exec,
    del     = require('del');
let minify  = require('gulp-clean-css');

gulp.task('default', [ 'clean1', 'css', 'js', 'hugo', 'clean2' ]);

gulp.task('clean1', function(){
    return del('public/**/*');
});

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

gulp.task('hugo', ['clean1', 'css', 'js'], function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
})

gulp.task('clean2', ['hugo'], function () {
  return del([
      'static/main.css',
      'static/main.js',
      'public/css',
      'public/js'
  ]);
});
