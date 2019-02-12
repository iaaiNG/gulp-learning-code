const { series } = require('gulp')
const gulp = require('gulp')

// 引入压缩html所需的模块
const gulpClean = require('gulp-clean')
const gulpHtmlMin = require('gulp-htmlmin')
const gulpJsMin = require('gulp-uglify')
const gulpCssMin = require('gulp-clean-css')
const gulpImgsmin = require('gulp-imagemin')
const rev = require('gulp-rev')    //更改版本名 md5后缀
const autoFx = require('gulp-autoprefixer')  //加浏览器前缀
const revCollector = require('gulp-rev-collector')  //gulp-rev 的插件，用于html模板更改引用路径
const babel = require('gulp-babel')
const open = require('open')
const connect = require('gulp-connect')
const spritesmith = require('gulp.spritesmith')

function cleandist(cb) {
  return gulp.src('dist', { allowEmpty: true, read: false })
    .pipe(gulpClean())
}

function htmlmin(cb) {
  return gulp.src('src/*.html')
    .pipe(gulpHtmlMin({
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true//压缩页面CSS
    }))
    .pipe(gulp.dest('dist'))
}

function cssmin(cb) {
  return gulp.src('src/css/*.css')
    .pipe(autoFx({
      browsers: ['last 2 versions', 'Android >= 4.0']
    }))
    .pipe(gulpCssMin())
    .pipe(rev())
    .pipe(gulp.dest('dist/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/rev/css'))
}

//改变css引用路径
function revCss(cb) {
  return gulp.src(['dist/rev/**/*.json', 'dist/css/*.css'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist/css'))
}


function imgmin(cb) {
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
    .pipe(gulp.dest('dist/rev/img'))
}



function revhtml() {
  return gulp.src(['dist/rev/**/*.json', 'src/*.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulpHtmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
}



function jsmin(cb) {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
      "presets": ["env"]
    }))
    .pipe(gulpJsMin())
    .pipe(rev())
    .pipe(gulp.dest('dist/js'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/rev/js'))
}

function revJs() {
  return gulp.src(['./dist/rev/**/*.json', './dist/js/*.js'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('dist/js/'))
}

function webserver(cb) {
  connect.server({
    livereload: true,
    port: 8080
  })
  open('http://localhost:8080/src')
  //监听 script 下边的 js 文件，并执行 script 方法
  gulp.watch('src/**/*', reload)
  //这样文件变更了就会自动构建
  cb()
}

function reload(cb) {
  gulp.src('src/index.html')
    .pipe(connect.reload())
  cb()
}

function spriteimg() {
  return gulp.src('src/ystore-img/*.png')//需要合并的图片地址
    .pipe(spritesmith({
      imgName: 'img/sprite.png',//保存合并后图片的地址
      cssName: 'css/sprite.css',//保存合并后对于css样式的地址
      padding: 5,//合并时两个图片的间距
      algorithm: 'binary-tree',//注释1
      cssTemplate: function (data) {
        var arr = [];
        data.sprites.forEach(function (sprite) {
          arr.push(".icon-" + sprite.name +
            "{" +
            "background-image: url('" + sprite.escaped_image + "');" +
            "background-position: " + sprite.px.offset_x + "px " + sprite.px.offset_y + "px;" +
            "width:" + sprite.px.width + ";" +
            "height:" + sprite.px.height + ";" +
            "}\n");
        });
        return arr.join("");
      }
    }))
    .pipe(gulp.dest('src/'));
}

exports.default = series(cleandist, htmlmin, jsmin, cssmin, imgmin, revCss, revhtml, revJs)
exports.serve = series(webserver)
exports.sprite = spriteimg

