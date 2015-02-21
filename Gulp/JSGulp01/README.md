## コマンド
* package.jsonの作成  
```javascript
npm init
```

* gulpのインストール  
```javascript
npm i -D gulp
```

* gulpfile.jsの作成  
```javascript
var gulp = require('gulp')
gulp.task('hello', function ()  {
    console.log('hello world!');
});

gulp.task('default', ['hello']);
```
