// gulp 项目配置文件

const { series } = require('gulp')
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const minifyCss = require('gulp-minify-css')

// 定义一个gulp任务
function defaultTask(cb) {
    console.log('hello world')
    cb()
}

function jshintTask(cb) {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    cb()
}

function scritpts(cb) {
    gulp.src('./js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
    cb()
}

function complieSass(cb) {
    gulp.src('./css/main.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'))
    cb()
}

exports.default = series(defaultTask, jshintTask, scritpts)
exports.complieSass = complieSass


const a = require('g')