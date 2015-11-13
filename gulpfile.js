var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssimport = require('gulp-cssimport'),
    connect = require('gulp-connect');

//plugins which need to be concatenated into 1 file
var jsPath = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    'bower_components/owl.carousel/dist/owl.carousel.js'
];

gulp.task('sass', function () {
  gulp.src('assets/styles/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
          browsers: ['last 2 versions', "IE 9"],
          cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/styles'))
      .pipe(connect.reload())
});

gulp.task('js-bundle-deps', function(){
    return gulp.src(jsPath)
        .pipe(concat('bower-bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-css', function () {
  gulp.src('assets/styles/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions', "IE 9"],
        cascade: false
      }))
      //imports css from sass files
      .pipe(cssimport())
      .pipe(csso())
      .pipe(gulp.dest('dist/styles'))
});

gulp.task('html', function () {
  gulp.src('*.html')
      .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    port: 8000,
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch('assets/styles/**/*.scss', ['sass']);
  gulp.watch('*.html', ['html']);
});


gulp.task('default', ['connect', 'watch', 'html']);
gulp.task('build', ['build-css', 'js-bundle-deps']);
