(function(window) {

  var ua = navigator.userAgent;
  var isMobile = ua.search(/Android|iPhone/i) != -1;
  
  // 如果是移动端，不需要监测是否能访问twitter，直接用抠下来的follow按钮
  if (isMobile) {
    document.getElementById('twitter-follow-gfw').style.display = 'block';
  } else {
    checkTwitter();
  }

  // 检查是否能访问twitter，并按照结果来加载页面
  function checkTwitter() {
    // 用于监测是否能访问twitter
    var twitterImg = new Image();
    twitterImg.src = 'https://twitter.com/favicon.ico';
    
    // 超过5秒没成功即不能访问twitter，则使用抠下来的twitter follow button，不加载timeline
    var twitterTimeout = setTimeout(function() {
      twitterImg.onerror = null;
      twitterImg.onload = null;
      twitterImg.src = '';
      document.getElementById('twitter-follow-gfw').style.display = 'block';
    }, 5000);

    // 能访问twitter，则加载follow按钮和twitter timeline
    twitterImg.onload = function() {
      clearTimeout(twitterTimeout);
      loadTwitterWidget(document, 'script', 'twitter-wjs');
      document.getElementById('twitter-follow').style.display = 'block';
      document.getElementById('twitter-timeline').style.display = 'block';
    };

    // error时的处理
    twitterImg.onerror = function() {
      clearTimeout(twitterTimeout);
      document.getElementById('twitter-follow-gfw').style.display = 'block';
    };

    // safari在twitterImg设置src为空时仍然会继续加载很长一段时间，故设置最长加载20s，超时直接停掉
    // setTimeout(function() {
    //   window.stop && window.stop();
    // }, 200000);
  }

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