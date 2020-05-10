import gulp from 'gulp';
import watch from 'gulp-watch';
import connect from 'gulp-connect';

gulp.task('watch', () => {
  watch('./src/**/*.{json,yaml,html,pug,jade,html}', function htmlWatch() {
      return gulp.start(['html']);
  });

  watch('./src/**/*.styl', function styleWatch() {
    return gulp.start(['style']);
  });

  watch('./src/assets/**/*', function assetWatch() {
    return gulp.start(['assets']);
  });

  watch('./src/**/*.js', function scriptWatch() {
    gulp.start(['scripts']);
  });
})
