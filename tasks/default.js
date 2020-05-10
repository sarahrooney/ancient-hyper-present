import gulp from 'gulp';

gulp.task('default', [
  'style',
  'html',
  'assets',
  'scripts',
  'connect',
  'watch'
]);
