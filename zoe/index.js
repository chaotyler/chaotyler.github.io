(function(){
  var Page = {
    init: function() {
      this.bind();
    },
    bind: function() {
      $('#navBar').on('click', function(e) {
        var archor = '#' + $(e.target).attr('data-toarchor');
        $(document.body).animate({
          scrollTop: $(archor).offset().top
        }, 300);
      });
      $('.little').on('click', function(e) {
        if ($(this).hasClass('selected')) {
          return;
        }
        $('.little.selected').removeClass('selected');
        $(this).addClass('selected');
        var index = $(this).index();
        $('.allworks').css('margin-left', - 1184 * index);
      });
      $('.experiencedContainer').on('mouseenter', '.circle0, .photo0', function(e) {
        if ($(this).hasClass('selected')) {
          return;
        }
        $('.photo0.selected').removeClass('selected');
        $('.circle0.selected').removeClass('selected');
        $('.description.selected').removeClass('selected');
        var index = $(this).index() % 8;
        $('.circle0').eq(index).addClass('selected');
        $('.photo0').eq(index).addClass('selected');
        $('.description').eq(index).addClass('selected');
      });
      $('.works').on('click', 'div', function(e) {
        $('.bigwork.show').removeClass('show');
        $(document.body).css('overflow', 'hidden');
        $('#' + $(this).attr('data-bigid')).addClass('show');
      });
      $('.bigwork').on('click', function() {
        $(document.body).css('overflow', 'auto');
        $(this).removeClass('show');
      });
    }
  };
  window.Page = Page;
  $(document).ready(function() {
    Page.init();
  });
})();