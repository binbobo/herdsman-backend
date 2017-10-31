var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['dist'], cb);
});

gulp.task('build', function() {
  gulp.src(['./app.js', './package.json']).pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['clean', 'build']);
