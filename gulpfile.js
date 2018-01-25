//引入外部文件
var gulp = require('gulp');
var sass = require('gulp-sass');
// var connect = require('gulp-connect')

// gulp.task('server',function(){
// 	connect.server({
// 		root:'east'
// // 	});
// // });
gulp.task('copy-index',function(){
	gulp.src('*.html')
	.pipe(gulp.dest('E:\\phpStudy\\WWW\\correct\\east'));
});
gulp.task('copy-jpg',function(){
	gulp.src('images/**/*')
	.pipe(gulp.dest('E:\\phpStudy\\WWW\\correct\\east'));
});
gulp.task('eastsass',function(){
	gulp.src('sass/src/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('sass/css'))
	.pipe(gulp.dest('E:\\phpStudy\\WWW\\correct\\east'));
});

//一次执行多个任务
// gulp.task('bat',['copy-index','copy-jpg'],function(){

// });


gulp.task('watchall',function(){
	gulp.watch('*.html',['copy-index']);
	gulp.watch('images/**/*',['copy-jpg']);
	gulp.watch('sass/src/*.scss',['eastsass']);
});