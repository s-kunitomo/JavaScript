## コマンド
* package.jsonの作成  
```
npm init
```

* gulpのインストール  
```
npm i -D gulp
```

## 手順
### hello worldを表示させる  
#### gulpfile.js　　
```javascript
var gulp = require('gulp')
gulp.task('hello', function ()  {
    console.log('hello world!');
});

gulp.task('default', ['hello']);
```

### web serverの導入
#### gulp-webserverのインストール  
```
npm i -D gulp-webserver
```

#### gulpfile.js　　
```javascript
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function ()  {
    gulp.src('app')
    	.pipe(webserver({
    		livereload: true
    	}));
});

gulp.task('default', ['webserver']);
```
