
var gulp = require("gulp");

var minifyCSS = require("gulp-clean-css");
var concat = require("gulp-concat");
var proc = require("child_process");
var rename = require("gulp-rename");

gulp.task("concat", function() { 
  return gulp.src("src/_assets/*.css")
    .pipe(concat("style.css"))
    .pipe(gulp.dest("src/css"));
});

gulp.task("css", ["concat"], function() { 
  return gulp.src("src/css/style.css")
    .pipe(minifyCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("src/css"));
});

gulp.task("build", ["concat", "css"], function() { 
  return proc.spawn('jekyll', ['build'], {stdio: 'inherit'});
});

gulp.task("dev", function() { 
    gulp.watch("src/**/*.*", ["build"]);
});

gulp.task("default", [ "concat", "css", "build" ]);
