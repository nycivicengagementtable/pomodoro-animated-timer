var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnext = require('cssnext'),
  precss = require('precss'),
  cssvars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins');
  browserSync = require('browser-sync').create();

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([mixins, cssImport, cssvars, nested, autoprefixer, precss, cssnext]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  browserSync.init({
    notifty: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
