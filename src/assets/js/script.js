/* jQuery component initialisation */

const initialiseComponents = function() {
  /* if ($window .width() > 800) {
  .parallax-container
  } */

  /* For each pushpin Materialize component, initialize them */
  $('.pushpin-demo-nav-left').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));

    $this.pushpin('remove');

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

    $this.pushpin('remove');

    /* To overlay it till the end of the page, bottom must be set to Infinity */
    $this.pushpin({
      top: $target.offset().top,
      bottom: Infinity,
    });
  });

  $('.pushpin-demo-nav-side').each(function (index) {
    const $this = $(this);
    const $target = $('#' + $(this).attr('data-target'));

    $this.pushpin('remove');

    /* To overlay it till the end of the page, bottom must be set to Infinity */
    $this.pushpin({
      top: $target.offset().top,
      bottom: Infinity,
    });
  });

  /* Handle scrolling animations for right-nav push-pin component */
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();

    /* According on window height determine if it must be scrolled in or out */
    if (scroll >= $(window).height()) {
      $("#info-side-nav").addClass("slide-in-right").removeClass("slide-out-right");
      $("#menu-side-nav").addClass("slide-out-right").removeClass("slide-in-right");
    } else {
      $("#info-side-nav").removeClass("slide-in-right").addClass("slide-out-right");
      $("#menu-side-nav").removeClass("slide-out-right").addClass("slide-in-right");
    }
  });

  $('.button-collapse').sideNav({
    menuWidth: $(window).width()*0.5, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
  });
};

$(document).ready(function() {
  /* Initialise parallax Materialize component */
  $('.parallax').parallax();

  $('.scrollspy').scrollSpy();

  $(".button-collapse").sideNav();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  scroll_about = function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 500);
  };

  $("#about-arrow").click(scroll_about);
  $("#about-btn-side").click(scroll_about);
  $("#about-btn").click(scroll_about);
  $("#about-nav").click(scroll_about);

  scroll_projects = function () {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 500);
  };

  $("#projects-btn").click(scroll_projects);
  $("#projects-btn-side").click(scroll_projects);
  $("#projects-nav").click(scroll_projects);

  scroll_contact = function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 500);
  };

  $("#contact-btn").click(scroll_contact);
  $("#contact-btn-side").click(scroll_contact);
  $("#contact-nav").click(scroll_contact);
});

$(document).ready(initialiseComponents);

$(window).on('resize', initialiseComponents);

/* Courtesy of:
 * https://codepen.io/nickcil/pen/sfutl */

$(window).scroll(function(){
  $(".home-overlay").css("opacity", 0.3 + $(window).scrollTop() / ($(window).height()*2));
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
  this.speed = parseFloat(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});
