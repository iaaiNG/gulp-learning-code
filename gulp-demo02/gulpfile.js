const { series } = require('gulp')
const gulp = require('gulp')
const babel = require('gulp-babel')
const gulpJsMin = require('gulp-uglify')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const gulpImgsmin = require('gulp-imagemin')

function gulpbabel() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    .pipe(gulpJsMin())
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())        //- 生成一个rev-manifest.json
    .pipe(gulp.dest('dist/rev/js'));   //- 将 rev-manifest.json 保存到 rev 目录内
}

function revJs(cb) {
  return gulp.src(['dist/rev/**/*.json', './dist/js/*.js'])
    .pipe(revCollector())
    .pipe(gulp.dest('dist/js/'));
}

function imgmin() {
  return gulp.src('src/img/*.{png,jpg,gif,ico}')
    .pipe(gulpImgsmin({
      optimizationLevel: 5,
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(rev())
    .pipe(gulp.dest('dist/img'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/rev/img'));
}

exports.default = series(gulpbabel,imgmin, revJs)