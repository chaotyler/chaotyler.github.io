(function(window) {
  // 用于监测是否能访问twitter
  var twitterImg = new Image();
  twitterImg.src = 'https://twitter.com/favicon.ico';
  
  // 超过5秒没成功即不能访问twitter，则使用抠下来的twitter follow button，不加载timeline
  var twitterTimeout = setTimeout(function() {
    twitterImg = null;
    document.getElementById('twitter-follow-gfw').style.display = 'block';
  }, 5000);

  // 能访问twitter，则加载follow按钮和twitter timeline
  twitterImg.onload = function() {
    clearTimeout(twitterTimeout);
    loadTwitterWidget(document, 'script', 'twitter-wjs');
    document.getElementById('twitter-follow').style.display = 'block';
    document.getElementById('twitter-timeline').style.display = 'block';
  };
  // twitterImg.onerror = function() {
  //   console.log('error');
  //   clearTimeout(twitterTimeout);
  //   document.getElementById('twitter-follow-gfw').style.display = 'block';
  // }

  // 用于加载twitter组件的方法，抠自twitter。
  function loadTwitterWidget(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src=p+"://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js,fjs);
    }
  };
}(window));