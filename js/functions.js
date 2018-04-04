$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');},
      3000);
});

$(function(){
    $('.fadein-2 img:gt(0)').hide();
    setInterval(function(){
      $('.fadein-2 :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein-2');},
      3000);
});

$(document).ready(function(){
  var $trigger = $(".drop-menu");
    // Show hide popover
    $(".drop-menu").click(function(){
        $(this).find(".sub-menu").slideToggle("fast");
    });
});

$(document).on("click", function(event){
    var $trigger = $(".drop-menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".sub-menu").slideUp("fast");
    }
});

$(document).ready(function($) {
  var parPosition = [];
  $('.par').each(function() {
    parPosition.push($(this).offset().top);
  });

  $('.vNav ul li a').click(function() {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $('.vNav a').hover(function() {
    $(this).find('.label').show();
  }, function() {
    $(this).find('.label').hide();
  });

  $(document).scroll(function() {
    var position = $(document).scrollTop(),
      index;
    for (var i = 0; i < parPosition.length; i++) {
      if (position <= parPosition[i]) {
        index = i;
        break;
      }
    }
    $('.vNav ul li a').removeClass('active');
    $('.vNav ul li a:eq(' + index + ')').addClass('active');
  });

  $('.vNav ul li a').click(function() {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });
});

$(document).ready(function(){
  $('.carousel').carousel();
  // Next slide
  $('.carousel').carousel('next');
  // Move next n times.
  $('.carousel').carousel('next');
  // Previous slide
  $('.carousel').carousel('prev');
  // Move prev n times.
  $('.carousel').carousel('prev', -4);
  // Set to nth slide
  $('.carousel').carousel('set');

  $('.carousel.carousel-slider').carousel({fullWidth: true});
});


$(document).ready(function(){
  $('.carousel-small').carousel();
  // Next slide
  $('.carousel-small').carousel('next');
  // Move next n times.
  $('.carousel-small').carousel('next');
  // Previous slide
  $('.carousel-small').carousel('prev');
  // Move prev n times.
  $('.carousel-small').carousel('prev', -4);
  // Set to nth slide
  $('.carousel-small').carousel('set');

  $('.carousel-small.carousel-slider').carousel({fullWidth: true});
});

$(document).ready(function(){
  $('.carousel-med').carousel();
  // Next slide
  $('.carousel-med').carousel('next');
  // Move next n times.
  $('.carousel-med').carousel('next');
  // Previous slide
  $('.carousel-med').carousel('prev');
  // Move prev n times.
  $('.carousel-med').carousel('prev', -4);
  // Set to nth slide
  $('.carousel-med').carousel('set');

  $('.carousel-med.carousel-slider').carousel({fullWidth: true});
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    };
}

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Scroll to element
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top -100
      }, 1000);
      return false;
    }
  }
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
