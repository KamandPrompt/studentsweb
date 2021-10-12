function myFunction() {
    // event.preventDefault();
    var viewportHeight = $(window).height();

    $('html, body').animate({
        scrollTop: viewportHeight,
    }, 1000);
  }