const {src, dest, series} = require('gulp'),
                replace   = require('gulp-replace'),
                beautify  = require('gulp-html-prettify'),
                trim      = require('gulp-remove-empty-lines'),
                exec      = require('child_process').exec,
                del       = require('del');

function reset() {
  return del('public/**/*');
}

function hugo(fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    fetch(err);
  });
};

function html() {
  return src('public/**/*.html')
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(trim())
    // typography
    .pipe(replace('&laquo;', '&laquo;&#160;'))
    .pipe(replace('&raquo;', '&#160;&raquo;'))
    .pipe(replace(' :', '&#160;:'))
    .pipe(replace(' ;', '&#160;;'))
    .pipe(replace(' !', '&#160;!'))
    .pipe(replace(' ?', '&#160;?'))
    .pipe(replace(' %', '&#160;%'))
    .pipe(replace(' €', '&#160;€'))
    .pipe(replace(' <i ', '&#160;<i '))
    .pipe(replace('</i> ', '</i>&#160;'))
    .pipe(dest('public'))
};

module.exports = {
  default: series(reset, hugo, html)
}
