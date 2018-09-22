var gulp = require('gulp');
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import');
gulp.task('styles',function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, cssvars, nested , autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles'));
});
