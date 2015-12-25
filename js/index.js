(function(window) {
  var twitterImg = new Image();
  twitterImg.src = 'https://twitter.com/favicon.ico';
  
  var twitterTimeout = setTimeout(function() {
    twitterImg.src = '';
    document.getElementById('twitter-follow-gfw').style.display = 'block';
  }, 5000);

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