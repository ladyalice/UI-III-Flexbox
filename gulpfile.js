var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
	gulp.src('great-idea/css/index.css');
	.pipe(autoprefixer())
	.pipe(gulp.dest('build'))
});

gulp.task('watch', function(){
	gulp.watch('great-idea/css/index.css', ['styles']);
});