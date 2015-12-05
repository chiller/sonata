var gulp = require('gulp');
var mocha = require('gulp-mocha');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
require('babel-core/register');

gulp.task('es6', () => {
	return gulp.src('src/*.es6')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('lib'));
});


gulp.task('test', ['es6'], function () {
    return gulp.src('test/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            compilers: {
                js: babel
            },
            bail: true
        }));
});

gulp.task('default', ['es6', 'test']);

gulp.task('watch', function () {
    run_default = function () {
        gulp.start('default');
    }
    run_default()
    watch('src/*.es6', run_default);
    watch('test/*.js', run_default);
});
