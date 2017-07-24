/* jQuery component initialisation */
$(document).ready(function() {
  /* Initialise parallax Materialize component */
  $('.parallax').parallax();

  /* For each pushpin Materialize component, initialize them */
  $('.pushpin-demo-nav-left').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));

    /* Each push-pin component has a unique top and bottom which are dependent on heights of divs */
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() + parseInt($('.parallax-container-div').css('height')) - $this.height()
    });
  });

  /* Initialise the overlayed right nav push-pin component */
  $('.pushpin-demo-nav-right').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));

    /* To overlay it till the end of the page, bottom must be set to Infinity */
    $this.pushpin({
      top: $target.offset().top,
      bottom: Infinity,
    });
  });
});

/* Handle scrolling animations for right-nav push-pin component */
$(document).ready(function($) {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    /* According on window height determine if it must be scrolled in or out */
    if (scroll >= $(window).height()) {
      $("#info-side-nav").addClass("slide-in-right").removeClass("slide-out-right");
    } else {
      $("#info-side-nav").removeClass("slide-in-right").addClass("slide-out-right");
    }
  });
});

/* The following code is courtesy of:
 * https://stackoverflow.com/questions/34177626/how-to-change-the-scroll-speed-of-a-div */

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
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});
