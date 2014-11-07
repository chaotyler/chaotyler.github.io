function openBlog(url, el) {
  document.getElementById("blogPage").src=url;
  var currentSelect = $(".selectedPostLi")[0];
  if(currentSelect){
    $(currentSelect).removeClass("selectedPostLi");
  }
  $(el).addClass("selectedPostLi");
}