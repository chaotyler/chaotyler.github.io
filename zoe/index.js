(function(window) {
  var Page = {
    init: function() {
      this.position = 0;
      this.canSlide = true;
      this.slideCount = 5;
      this.slideDuration = 1000;
      this.bind();
    },
    bind: function() {
      var self = this;
      window.addWheelListener(document, function(e) {
        if (!e.deltaY || !self.canSlide) {
          return;
        }
        self.canSlide = false;
        e.preventDefault();
        if (e.deltaY > 0) {
          if (self.position === self.slideCount - 1) {
            self.canSlide = true;
            return;
          }
          self.position++;
        } else {
          if (self.position === 0) {
            self.canSlide = true;
            return;
          }
          self.position--;
        }
        self.slide();
      });
      document.querySelector('.content').addEventListener('transitionend', function(e) {
        if (e.target !== document.querySelector('.content')) {
          return;
        }
      });
      document.querySelector('.links-con').addEventListener('click', function(e) {
        var index = Array.prototype.indexOf.call(document.querySelectorAll('.links-con .links'), e.target);
        if (index === -1) {
          return;
        }
        self.position = index;
        self.slide();
      });
      document.querySelector('.right-nav').addEventListener('click', function(e) {
        var index = Array.prototype.indexOf.call(document.querySelectorAll('.right-nav .nav'), e.target);
        if (index === -1) {
          return;
        }
        self.position = index;
        self.slide();
      });
    },
    slide: function() {
      var self = this;
      document.querySelector('.links-con .links.selected').classList.remove('selected');
      document.querySelectorAll('.links-con .links')[this.position].classList.add('selected');
      document.querySelector('.right-nav .nav.selected').classList.remove('selected');
      document.querySelectorAll('.right-nav .nav')[this.position].classList.add('selected');
      if (self.position === self.slideCount - 1) {
        document.querySelector('.down-arrow').style.display = 'none';
        document.querySelector('.footer').classList.add('show');
      } else {
        document.querySelector('.down-arrow').style.display = 'block';
        document.querySelector('.footer').classList.remove('show');
      }
      document.querySelector('.content').style.top = - self.position * 100 + '%';
      setTimeout(function() {
        self.canSlide = true;
      }, self.slideDuration + 500);
    }
  };

  window.Page = Page;
  window.Page.init();
}(window));