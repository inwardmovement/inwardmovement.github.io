var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    minify  = require('gulp-clean-css'),
    uglify  = require('gulp-uglify'),
    beautify  = require('gulp-html-beautify'),
    exec    = require('child_process').exec,
    del     = require('del');

gulp.task('default', [ 'reset', 'css', 'js', 'hugo', 'html', 'clean' ]);

gulp.task('reset', function(){
    return del('public/**/*');
});

gulp.task('css', function(){
  return gulp.src('static/css/*.css')
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('static'))
});

gulp.task('js', function(){
  return gulp.src([
    'static/js/jquery.js',
    'static/js/popper.js',
    'static/js/bootstrap.js',
    'static/js/style.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static'))
});

gulp.task('hugo', ['reset', 'css', 'js'], function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
})

gulp.task('html', ['hugo'], function() {
  var options = {
      "useConfig": false,
      "indent_with_tabs": true,
      "preserve_newlines": false,
      "indent_char": " ",
      "indentSize": 1
  };
  gulp.src('public/**/*.html')
    .pipe(beautify(options))
    .pipe(gulp.dest('public'))
});

gulp.task('clean', ['html'], function () {
  return del([
      'static/main.css',
      'static/main.js',
      'public/img',
      'public/css',
      'public/js'
  ]);
});
