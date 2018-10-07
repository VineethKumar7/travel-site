var gulp = require('gulp');
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles',function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, mixins, cssvars, nested , autoprefixer]))
   .on('error', function(errorInfo){ // we are passing a function parameter which is passed to it by browser.
     console.log(errorInfo.toString()); // This provides more infomation that is not needed by the user. We are making this information in human redable form. For this purpose we use toString() method.
     this.emit('end')
   })
   .pipe(gulp.dest('./app/temp/styles'));
});
