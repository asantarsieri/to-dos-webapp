'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {

	// bad
  	// gulp.watch('css/screen.scss', ['sass']);
  	// gulp.watch('css/partials/*.scss', ['sass']);

  	// better
  	gulp.watch(['css/*.scss', 'css/partials/*.scss'], ['sass']);

});