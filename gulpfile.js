'use strict'
var gulp         = require('gulp'),
    browser_sync = require('browser-sync'),
    reload       = require('browser-sync').reload,
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    glob         = require('gulp-sass-glob');

gulp.task('default', ['sass', 'watch', 'server'] );
gulp.task('reload', reload);

gulp.task('sass', function () {
  return gulp.src('./app/assets/main.scss')
    .pipe(glob())
    .pipe(sass().on('error', sass.logError))
    .pipe(rename("style.css"))
    .pipe(gulp.dest('./public'));
});

gulp.task('reload:sass', ['sass'], reload)
gulp.task('watch', function() {
  gulp.watch('./app/assets/**/*.scss', ['reload:sass'])
  gulp.watch('./index.html', ['reload'])
})

gulp.task('server',function(){
	browser_sync({
		server:{
			baseDir: './'
		}
	})
})

