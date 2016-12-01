'use strict';

// require = load plugin = depencencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); // added for sourcemaps
var browserSync = require('browser-sync').create(); // added for browser-sync
var autoprefixer = require('gulp-autoprefixer');
 
// sass task | watch out for correct order
gulp.task('sass', function () {
  return gulp.src('css/*.scss')
  	.pipe(sourcemaps.init()) // added for sourcemaps
    // .pipe(sass().on('error', sass.logError)) // no minify
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // minify
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('../maps')) //added for sourcemaps
    .pipe(gulp.dest('css'))
});

/* // sass task watcher
gulp.task('sass:watch', function () { // is not necessary anymore, as task 'serve' has the watch inside …

	// bad
  	// gulp.watch('css/screen.scss', ['sass']);
  	// gulp.watch('css/partials/*.scss', ['sass']);

  	//  better
  	gulp.watch(['css/*.scss', 'css/partials/*.scss'], ['sass']);
});
*/

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() { // 'serve' could be renamed.

    browserSync.init({
        server: "./"
    });

    gulp.watch(['css/*.scss', 'css/partials/*.scss'], ['sass']);
    gulp.watch(['*.html', 'css/*.css']).on('change', browserSync.reload);
});