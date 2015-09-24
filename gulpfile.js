var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('styles', function() {
	gulp.src('./scss/*.scss')
	.pipe(sass()
	.on('error', function(err) {
		notify().write(err);
		this.emit('end');
	}))
	.pipe(gulp.dest('./css'))
	.pipe(livereload())
	.pipe(notify('It worked!'));
});

gulp.task('watch', function() {
	gulp.watch('./scss/**/*.scss', ['styles']);
});

gulp.task('build', ['compileSass']);