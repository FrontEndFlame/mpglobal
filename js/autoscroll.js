document.addEventListener('DOMContentLoaded', function() {
var scrollTimeout,
    scrollGap = 175,
    scrollSelector = '.scrollable';

$(window).scroll(function () {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  scrollTimeout = setTimeout(function () {
    var nearestBlock = false,
        nearestBlockOffset = false,
        range = {
          top: $(window).scrollTop() - scrollGap,
          middle: $(window).scrollTop(),
          bottom: $(window).scrollTop() + scrollGap
        };

    $(scrollSelector).each (function () {
      if ($(this).offset().top < range.bottom && $(this).offset().top > range.top) {
        if ($(this).offset().top > range.middle) {
          blockOffset = $(this).offset().top - range.middle;
        } else {
          blockOffset = range.middle - $(this).offset().top;
        }

        if (nearestBlockOffset === false || nearestBlockOffset > blockOffset) {
          nearestBlockOffset = blockOffset;
          nearestBlock = $(this);
        }
      }
    });

      if (nearestBlock != false && nearestBlockOffset > 0) {
        $("html, body").animate({scrollTop: nearestBlock.offset().top}, {duration: 100, easing: 'swing'});
      }
    }, 100);
  });
});