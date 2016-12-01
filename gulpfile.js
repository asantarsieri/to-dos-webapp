'use strict';

// require = load plugin
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); // added for sourcemaps
 
gulp.task('sass', function () {
  return gulp.src('css/*.scss')
  	.pipe(sourcemaps.init()) // added for sourcemaps
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('/maps')) //added for sourcemaps
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {

	// bad
  	// gulp.watch('css/screen.scss', ['sass']);
  	// gulp.watch('css/partials/*.scss', ['sass']);

  	//  better
  	gulp.watch(['css/*.scss', 'css/partials/*.scss'], ['sass']);

});