import gulp from 'gulp';
import stylus from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import nib from 'nib';
import sopStyle from 'sop-styl';

export default function styleTask() {
  return gulp.src('./src/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      use: [
        nib(),
        sopStyle()
      ]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'));
}

gulp.task('style', styleTask);
