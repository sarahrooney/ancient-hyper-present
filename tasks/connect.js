import gulp from 'gulp';
import connect from 'gulp-connect';
import ip from 'ip';

gulp.task('connect', () => connect.server({
  root: 'build',
  livereload: true
}));
