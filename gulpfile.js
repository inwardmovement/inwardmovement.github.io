var gulp      = require('gulp'),
    replace   = require('gulp-replace'),
    beautify  = require('gulp-html-prettify'),
    trim      = require('gulp-remove-empty-lines'),
    exec      = require('child_process').exec,
    del       = require('del');

gulp.task('default', ['reset', 'hugo', 'html']);

gulp.task('reset', function(){
    return del('public/**/*');
});

gulp.task('hugo', ['reset'], function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
});

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
