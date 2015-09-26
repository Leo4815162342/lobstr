var gulp = require('gulp'),
	sass = require('gulp-sass'),
  csscomb = require('gulp-csscomb'),
	autoprefixer = require('gulp-autoprefixer'),
  connect = require('gulp-connect');
 
gulp.task('styles', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass({
      includePaths: ['./scss'],
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
            browsers: [
              'last 2 versions',
              'safari 5',
              'ie 8',
              'ie 9',
              'opera 12.1',
              'ios 6',
              'android 4'
            ],
            cascade: false
        }))
    .pipe(csscomb())
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});
  
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['styles']);
  gulp.watch(['./*.html'], ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);

