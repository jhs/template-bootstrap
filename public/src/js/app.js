/* Off Canvas script
 * ================
 * ================*/

/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
  $('.toggle-nav').click(function() {
    // Calling a function in case you want to expand upon this.
    toggleNav();
  });
});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function toggleNav() {
if ($('#site-wrapper').hasClass('show-nav')) {
  // Do things on Nav Close
  $('#site-wrapper').removeClass('show-nav');
} else {
  // Do things on Nav Open
  $('#site-wrapper').addClass('show-nav');
}

//$('#site-wrapper').toggleClass('show-nav');
}

// make esc key hide exposed menu

$(document).keyup(function(e) {
if (e.keyCode == 27) {
  if ($('#site-wrapper').hasClass('show-nav')) {
    // Assuming you used the function I made from the demo
    toggleNav();
  }
} 
});
