var gulp = require('gulp');
var del = require('del');
var gulpSequence = require('gulp-sequence');

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('copy-app', function() {
  gulp.src(['./app.js', './config.js', './package.json']).pipe(gulp.dest('./dist/'));
});

gulp.task('copy-models', function() {
  gulp.src(['./models/**/*.js']).pipe(gulp.dest('./dist/models/'));
});

gulp.task('copy-controllers', function() {
  gulp.src(['./controllers/**/*.js']).pipe(gulp.dest('./dist/controllers/'));
});

gulp.task('copy-routes', function() {
  gulp.src(['./routes/**/*.js']).pipe(gulp.dest('./dist/routes/'));
});

gulp.task('copy-middlewares', function() {
  gulp.src(['./middlewares/**/*.js']).pipe(gulp.dest('./dist/middlewares/'));
});

gulp.task('copy-utils', function() {
  gulp.src(['./utils/**/*.js']).pipe(gulp.dest('./dist/utils/'));
});


gulp.task('build', gulpSequence(['copy-app', 'copy-models', 'copy-controllers', 'copy-routes', 'copy-middlewares', 'copy-utils']));
