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

gulp.task('less', function () {
	gulp.src('./source/less/style.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	watch('./source/html/**/*.html', function () {
		gulp.start('fileinclude');
	});
	watch('./source/less/**/*.less', function () {
		gulp.start('less');
	});
});