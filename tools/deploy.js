/* eslint-disable */
var fs = require('fs')
var gulp = require("gulp")
var sftp = require('gulp-sftp')
var ftp = require('vinyl-ftp')
var run = require('run-sequence')

var pkg = require('../package.json')

gulp.task('deploy-vhome', function() {
    return gulp.src('dist/**').pipe(sftp({
      host: '118.244.237.2',
      port: 22000,
      auth: 'hpe',
      remotePath: '/opt/baleina/vhome/code/cex'
    }))
})


run('deploy-vhome')
