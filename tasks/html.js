import gulp from 'gulp';

gulp.task('html', function scriptsTask() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'));
});
