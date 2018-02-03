(function($) {
  var ui = {
    $grabMain: $('.grab-main')
  };
  var oConfig = window.oPageConfig;
  var interval = null;
  var move = null;
  var oPage = {
    init: function() {
      this.view();
    }
  , view: function() {
      var self = this;
      var time = 1;
      var m = 0;
        var i = 0;
        var left1 = 0;
        move = setInterval(function() {
          if (i < 10) {
          var left = Math.ceil(Math.random() * (9 - 0) + 0) * 65;
          var top = Math.ceil(Math.random() * (9 - 0) + 0) * 18;
          var shu = Math.ceil(Math.random() * (7 - 1) + 1);
          var cha = Math.abs(left - left1);
          if (cha >= 300) {
            left = left;
            left1 = left;
          }else {
            if (left < 310) {
              left = left + 300;
              left1 = left;
            }else {
              left = left - 300;
              left1 = left;
            }
          }
          $("<div class='gold-juns' data-uid='1'>").css({'left':left,'top':top,'background-image': 'url(img/' + shu + '.png)'}).appendTo(ui.$grabMain);
          $('.gold-juns').eq(0).fadeOut(400);
          setTimeout(function() {
            $('.gold-juns').eq(0).remove();
          },500)
          i++
        }else {
        }
        }, 600)
    }
  };
  oPage.init();
})($)