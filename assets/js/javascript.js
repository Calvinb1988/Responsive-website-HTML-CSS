/* Make menu slide in/out on mobile*/
/* adapted from https://www.w3schools.com/jsref/event_onclick.asp */
/* Javascript */

var navLinks=document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

/* index.html fadein when scrolling */
/* https://blog.hubspot.com/website/css-fade-in */
/* JQuery */

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".fadein-scroll-main");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  /* w3 schools/freecodecamp to learn jquery/edit/adapt the above code
    https://www.freecodecamp.org/learn/front-end-development-libraries/#jquery
    https://www.w3schools.com/jquery/jquery_syntax.asp */

  /* .ready() ensures fade in is once main document is ready */
  /* fade in on pages thats not index.html so that it look nicer since there is less scrolling */

  $(document).ready(function() {

    var tagsOther = $(".fadein-scroll-other");

    $(tagsOther).addClass("visible");

  });
