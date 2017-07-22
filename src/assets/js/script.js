$(document).ready(function() {
  $('.parallax').parallax();
  $('.pushpin-demo-nav-left').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() + parseInt($('.parallax-container-div').css('height')) - $this.height()
    });
  });
  $('.pushpin-demo-nav-right').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: Infinity,
    });
  });
});

$(document).ready(function($) {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= $(window).height()) {
      $("#info-side-nav").addClass("slide-in-right").removeClass("slide-out-right");
    } else {
      $("#info-side-nav").removeClass("slide-in-right").addClass("slide-out-right");
    }
  });
});

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
};
