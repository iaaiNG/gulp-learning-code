const { series } = require('gulp')
const gulp = require('gulp')
const rev = require('gulp-rev')
const assetRev = require('gulp-asset-rev')

var cssSrc = './src/css/*.css'

function revCss(cb) {
    gulp.src(cssSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/css'));
    cb()
}
function assetRevTask(cb) {
    gulp.src(cssSrc)  //该任务针对的文件
        .pipe(assetRev()) //该任务调用的模块
        .pipe(gulp.dest('./dist/css')); //编译后的路径
    cb()
}

exports.default = series(assetRevTask, revCss)