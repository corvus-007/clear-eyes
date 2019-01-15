document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.transitionEffect = 'zoom-in-out';
  $.fancybox.defaults.transitionDuration = 600;

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  $('[data-intro-slider]').slick({
    accessibility: false,
    speed: 700,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('[data-about-clinic-slider]').slick({
    accessibility: false,
    speed: 700,
    // autoplay: true,
    responsive: [{
      breakpoint: 670,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  $('[data-experts-carousel]').slick({
    accessibility: false,
    speed: 700,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '0',
    responsive: [{
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        centerPadding: '0',
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        centerPadding: '25%',
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerPadding: '15%',
        arrows: false,
        dots: true
      }
    }]
  });

  $('[data-preview-reviews-carousel]').slick({
    accessibility: false,
    slidesToShow: 2,
    speed: 700,
    responsive: [{
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });

  // Init fancybox
  // =============
  var selectorOriginCertificatesSlideWraplink = '.certificates-carousel .slick-slide:not(.slick-cloned) a';

  // Skip cloned elements
  $('[data-certificates-carousel]').fancybox({
    selector: selectorOriginCertificatesSlideWraplink,
    backFocus: false
  });

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on('click', '.slick-cloned a', function (e) {
    $(selectorOriginCertificatesSlideWraplink)
      .eq(($(e.currentTarget).attr("data-slick-index") || 0) % $(selectorOriginCertificatesSlideWraplink).length)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });

    return false;
  });

  $('[data-certificates-carousel]').slick({
    accessibility: false,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 770,
      settings: {
        centerMode: true,
        slidesToShow: 3,
      }
    }, {
      breakpoint: 670,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '15%',
        arrows: false,
        dots: true
      }
    }, {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '15%',
        arrows: false,
        dots: true
      }
    }]
  });



  // Environment carousel
  var selectorOriginEnvironmentSlideWraplink = '.environment-carousel .slick-slide:not(.slick-cloned) a';

  // Skip cloned elements
  $('[data-environment-carousel]').fancybox({
    selector: selectorOriginEnvironmentSlideWraplink,
    backFocus: false
  });

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on('click', '.slick-cloned a', function (e) {
    $(selectorOriginEnvironmentSlideWraplink)
      .eq(($(e.currentTarget).attr("data-slick-index") || 0) % $(selectorOriginEnvironmentSlideWraplink).length)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });

    return false;
  });

  $('[data-environment-carousel]').slick({
    accessibility: false,
    slidesToShow: 2,
    speed: 700,
    responsive: [{
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  });
});
