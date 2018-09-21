var gulp = require('gulp');
watch = require('gulp-watch');
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');
//task('task_name','what_will_happen_when_task_runs')
gulp.task('default',function(){
   console.log("Hooray - you created a Gulp task");
});

gulp.task('html',function(){
   console.log("Imagine something useful is done to your html");
});

gulp.task('styles',function(){
   return gulp.src('./app/assets/styles/styles.css')
   .pipe(postcss([cssImport, cssvars, nested , autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
    // Is where we use the gulp watch plugin
    //We pass in two arguments watch('file',) 'file' is the file on the computer where it must save changes to.
    // './; will go to the root of the app folder
    watch('./app/index.html', function(){
        // So when ever we make changes to html file we automatically tigger the tasks. Here we tigger the html tasks.
        gulp.start('html');

    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});
