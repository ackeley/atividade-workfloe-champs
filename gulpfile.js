var gulp    = require("gulp"),
    minCss  = require("gulp-minify-css"),
    minHtml = require("gulp-minify-html"),
    sass    = require("gulp-sass");

gulp.task("minified-html", function(){   
    gulp.src('./source/*.html')
    .pipe(minHtml())
    .pipe(gulp.dest('./dist/'));
});

gulp.task("minified-css", function(){   
    gulp.src('./source/css/*.scss')
    .pipe(sass())
    .pipe(minCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("background", function(){
    gulp.watch('./source/css/*.css', ['minified-css']);
    gulp.watch('./source/*.html', ['minified-html']);
}); 
