(function(window) {
  
  var Page = {
    init: function() {
      var ua = navigator.userAgent;
      var isMobile = ua.search(/Android|iPhone/i) != -1;
      this.renderButton(isMobile);
      // 如果是移动端，不需要监测是否能访问twitter，直接用抠下来的follow按钮
      if (isMobile) {
        document.getElementById('twitter-follow-gfw').style.display = 'block';
      } else {
        this.checkTwitter();
      }
    },
    // 检查是否能访问twitter，并按照结果来加载页面
    checkTwitter: function() {
      var self = this;
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
        self.loadTwitterWidget(document, 'script', 'twitter-wjs');
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
    },
    // 用于加载twitter组件的方法，抠自twitter。
    loadTwitterWidget: function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+"://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
      }
    },
    // 判断是否显示加载更多和全部的按钮
    renderButton: function(mobile) {
      var type = mobile ? 'tap' : 'click';
      var blogList = document.getElementById('load-btns');
      if (!blogList) {
        return;
      }
      var blogs = document.getElementsByClassName('blog-item');
      var blogCon = document.getElementById('blog-con');
      var currentIndex = 40;
      document.getElementById('load-btns').addEventListener(type, function(e) {
        if (e.target.id === 'load-more') {
          currentIndex += 20;
          if (currentIndex >= blogs.length) {
            currentIndex = blogs.length - 1;
            document.getElementById('load-btns').innerHTML = '已经全部加载';
          }
        } else if (e.target.id === 'load-all') {
          currentIndex = blogs.length - 1;
          document.getElementById('load-btns').innerHTML = '已经全部加载';
        }
        loadToIndex(currentIndex);
      });

      function loadToIndex(index) {
        for (var i = 0; i < blogs.length; i++) {
          if (i <= index) {
            blogs[i].style.display = 'block'  
          } else {
            blogs[i].style.display = 'none'
          }
        }
      }
    },
  };

  window.Page = Page;
  if (document.readyState != 'loading'){
    window.Page.init();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      window.Page.init();
    });
  }
}(window));