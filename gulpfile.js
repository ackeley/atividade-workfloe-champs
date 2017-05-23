var gulp    = require("gulp"),
    minCss  = require("gulp-minify-css"),
    minHtml = require("gulp-minify-html");

gulp.task("minified-html", function(){   
    gulp.src('./source/*.html')
    .pipe(minHtml())
    .pipe(gulp.dest('./dist/'));
});

gulp.task("minified-css", function(){   
    gulp.src('./source/css/*.scss')
    .pipe(minCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task("background", function(){
    gulp.watch('./source/css/*', ['minified-css']);
    gulp.watch('./source/*.html', ['minified-html']);
}); 
