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
        document.querySelector('.content').style.top = - self.position * 100 + '%';
        setTimeout(function() {
          self.canSlide = true;
        }, self.slideDuration + 500);
      });
      document.querySelector('.content').addEventListener('transitionend', function(e) {
        if (e.target !== document.querySelector('.content')) {
          return;
        }
        if (self.position === self.slideCount - 1) {
          document.querySelector('.down-arrow').style.display = 'none';
        } else {
          document.querySelector('.down-arrow').style.display = 'block';
        }
        self.beforeSlideAnimationDonw();
        self['slideAnimation' + self.position]();
      });
    }, 
    beforeSlideAnimationDonw: function() {
      if (this.position !== 1) {
        document.querySelector('.about-inner').style.visibility = 'hidden';
      }
      if (this.position !== 2) {
        document.querySelector('.works-inner').style.visibility = 'hidden';
      }
    },
    slideAnimation0: function() {
      document.querySelector('.banner').classList.add('rubberBand');
      setTimeout(function() {
        document.querySelector('.banner').classList.remove('rubberBand');
      }, this.slideDuration + 100);
    },
    slideAnimation1: function() {
      var aboutInner = document.querySelector('.about-inner');
      aboutInner.classList.add('zoomInDown');
      aboutInner.style.visibility = 'visible';
      setTimeout(function() {
        aboutInner.classList.remove('zoomInDown');
      }, this.slideDuration + 100);
    },
    slideAnimation2: function() {
      var worksInner = document.querySelector('.works-inner');
      worksInner.classList.add('lightSpeedIn');
      worksInner.style.visibility = 'visible';
      setTimeout(function() {
        worksInner.classList.remove('lightSpeedIn');
      }, this.slideDuration + 100);
    },
    slideAnimation3: function() {
      var self = this;
      var list0 = document.querySelector('.collections-list0');
      list0.classList.add('shake');
      setTimeout(function() {
        list0.classList.remove('shake');
      }, self.slideDuration + 100);

      var list1 = document.querySelector('.collections-list1');
      list1.classList.add('flash');
      setTimeout(function() {
        list1.classList.remove('flash');
      }, self.slideDuration + 100);

      var listItem2s = document.querySelectorAll('.collections-item2');
      for (var i = 0; i < listItem2s.length; i++) {
        (function(index) {
          listItem2s[index].classList.add('swing');
          setTimeout(function() {
            listItem2s[index].classList.remove('swing');
          }, self.slideDuration + 100);
        }(i));
      }
    },
    slideAnimation4: function() {
      var contactInner = document.querySelector('.contact-inner');
      contactInner.classList.add('bounce');
      setTimeout(function() {
        contactInner.classList.remove('bounce');
      }, this.slideDuration + 100);
    }
  };

  window.Page = Page;
  window.Page.init();
}(window));