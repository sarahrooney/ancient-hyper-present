import gulp from 'gulp';

gulp.task('assets', () => {
  return gulp.src([
      'src/assets/**/*'
    ], { base: './src' })
    .pipe(gulp.dest('build/'));
});
