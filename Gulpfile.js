var fileinclude = require('gulp-file-include');
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch')

gulp.task('fileinclude', function () {
	gulp.src(['./source/html/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('watch-html', function () {
	watch('./source/html/**/*.html', function(){
		gulp.start('fileinclude');
	});
});