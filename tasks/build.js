import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';

gulp.task('build', function(callback) {
  runSequence('clean',
    ['style', 'scripts', 'assets'],
    'html',
    callback);
});

gulp.task('clean', function(){
  return del('build/**');
});

gulp.task('callback-example', function(callback) {
  fs.readFile('...', function(err, file) {
      console.log(file);
      callback();
  });
});