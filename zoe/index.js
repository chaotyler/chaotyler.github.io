(function(){
  var Page = {
    init: function() {
      emailjs.init("user_k02nWWXRv4BcJdENGhpiu");
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
      $('.input').on('focus', function(e) {
        $(this).parent().addClass('focus');
      });
      $('.input').on('blur', function(e) {
        $(this).parent().removeClass('focus');
      });
      $('#sendButton').on('click', function(e) {
        if ($('#nameInput').val() == '' ||
          $('#emailInput').val() == '' ||
          $('#telInput').val() == '' ||
          $('#msgInput').val() == '') {
          $('#message').text('请输入所有必需信息，谢谢！');
          return;
        }
        emailjs.send('default_service', 'template_7aCgCnfX', {
          to_email: 'zoeeying@gmail.com',
          contact_name: $('#nameInput').val(),
          contact_email: $('#emailInput').val(),
          contact_tel: $('#telInput').val(),
          contact_message: $('#msgInput').val()
        }).then(function(response) {
          $('#message').text('发送成功，谢谢！');
          $('#nameInput').val('');
          $('#emailInput').val('');
          $('#telInput').val('');
          $('#msgInput').val('');
        }, function(err) {
           $('#message').text('发送失败，请重新尝试，谢谢！');
        });
      });
    }
  };
  window.Page = Page;
  $(document).ready(function() {
    Page.init();
  });
})();