import gulp from 'gulp';
import browserify from 'gulp-browserify';

gulp.task('scripts', function scriptsTask() {
  return gulp.src('./src/**/*.js')
    .pipe(browserify({
      debug: true,
      transform: [
        'babelify',
        'brfs',
        'yamlify'
      ]
    }))
    .pipe(gulp.dest('./build/js'));
});
