// (function(window) {
//   var Page = {
//     init: function() {
//       this.canSlide = true;
//       this.startPointY = 0;
//       this.distance = 10;
//       this.transformYs = ['translateY(0px)', 'translateY(-768px)', 'translateY(-1518px)', 'translateY(-2183px)', 'translateY(-2933px)'];
//       this.currentPos = 0;
//       this.mainCon = document.querySelector('.main');
//       this.bind();
//     },
//     bind: function() {
//       var self = this;
//       document.body.addEventListener('mousewheel', function(e) {
//         if (!self.canSlide) {
//           return;
//         }
//         if (e.wheelDelta > 0) {
//           self.slideDown();
//         } else {
//           self.slideUp();
//         }
//         self.canSlide = false;
//       });
//       this.mainCon.addEventListener('transitionend', function() {
//         self.canSlide = true;
//       })
//     },
//     slideDown: function() {
//       if (this.currentPos === 0) {
//         return;
//       }
//       this.currentPos--;
//       this.mainCon.style.transform = this.mainCon.style.webkitTransform = this.transformYs[this.currentPos];
//     },
//     slideUp: function() {
//       if (this.currentPos === 3) {
//         return;
//       }
//       this.currentPos++;
//       this.mainCon.style.transform = this.mainCon.style.webkitTransform = this.transformYs[this.currentPos];
//     }
//   };

//   window.Page = Page;
//   window.Page.init();
// }(window));