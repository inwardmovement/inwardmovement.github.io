var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    replace   = require('gulp-replace'),
    minify    = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    beautify  = require('gulp-html-prettify'),
    trim      = require('gulp-remove-empty-lines'),
    exec      = require('child_process').exec,
    del       = require('del');

gulp.task('default', [ 'reset', 'css', 'js', 'hugo', 'html', 'clean' ]);

gulp.task('reset', function(){
    return del('public/**/*');
});

gulp.task('css', function(){
  return gulp.src([
  'static/css/bootstrap.css',
  'static/css/app.css'
  ])
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('static'))
});

gulp.task('js', function(){
  return gulp.src([
    'static/js/jquery.js',
    'static/js/popper.js',
    'static/js/bootstrap.js',
    'static/js/app.js'
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
  return gulp.src('public/**/*.html')
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(trim())
    .pipe(replace('&laquo;', '&laquo;&#160;'))
    .pipe(replace('&raquo;', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace(' ;', '&#8239;;'))
    .pipe(replace(' !', '&#8239;!'))
    .pipe(replace(' ?', '&#8239;?'))
    .pipe(replace(' %', '&#8239;%'))
    .pipe(replace(' €', '&#8239;€'))
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
