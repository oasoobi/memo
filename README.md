# bookmark-scripts

ただのブックマークレット置き場。
使い方は「ブックマークレッド　使い方　ブラウザ名」で幾らでも出てきます

## youtube everywhere

使うとurlを入力してくださいと出るので動画のurlを入れます。
videoIDが表示されるので閉じます。
あとは見たらわかるので説明しません。

```
javascript:(function() {
  var script = document.createElement('script');
  script.src = 'https://oasoobi.net/scripts/k.js';
  document.body.appendChild(script);
})
```
