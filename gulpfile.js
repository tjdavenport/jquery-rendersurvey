const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');

gulp.task('js', () => {
  return gulp.src('./jquery.renderSurvey.js')
    .pipe(babel({
      presets: ['es2017', 'es2015'],
    }))
    .pipe(uglify())
    .pipe(rename('jquery.renderSurvey.min.js'))
    .pipe(gulp.dest(''));
});

gulp.task('css', () => {
  return gulp.src('./jquery.renderSurvey.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(rename('jquery.renderSurvey.min.css'))
    .pipe(gulp.dest(''));
});

gulp.task('dist', ['js', 'css'], (done) => {
  done();
});
