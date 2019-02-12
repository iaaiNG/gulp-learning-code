const { series } = require('gulp')
const gulp = require('gulp')

const open = require('open')
const connect = require('gulp-connect')

function webserver(cb) {
  connect.server({
    livereload: true,
    port: 8080
  });
  open('http://localhost:8080/src');
  //监听 script 下边的 js 文件，并执行 script 方法
  gulp.watch('src/**/*', reload);
  //这样文件变更了就会自动构建
  cb()
}

function reload(cb) {
  gulp.src('src/index.html')
    .pipe(connect.reload());
  cb()
}

exports.server = series(webserver)