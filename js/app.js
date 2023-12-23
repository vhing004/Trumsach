$(document).ready(function () {
    $(".hero").slick({
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        "<button type='button' class='slick-prev pull-left arrow'><i class='fa-solid fa-angle-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right arrow'><i class='fa-solid fa-angle-right'></i></button>",
      responsive: [
        {
          breakpoint: 500,
          settings: {
          },
        },
      ],
    });
  });
$(document).ready(function () {
    $(".media_list").slick({
      slidesToShow: 3,
      slideToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        "<button type='button' class='slick-prev pull-lefts arrows'><i class='fa-solid fa-angle-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-rights arrows'><i class='fa-solid fa-angle-right'></i></button>",
      // arrows: false,
      responsive: [
        {
          breakpoint: 500,
          settings: {
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    // handle header nav
    // $('.js-dropdown-toggle').on('click', function () {
    //   $(this).toggleClass('active').siblings('.js-dropdown-menu').slideToggle();
    // });
    // open and close mobile menu
    $('.js-menu-btn').on('click', function () {
      $('.js-mobile-menu, .js-mobile-filter').addClass('is-show');
      $('body').addClass('no-scroll');
    });
    $('.js-mobile-filter, .js-menu-close').on('click', function () {
      $('.js-mobile-menu, .js-mobile-filter').removeClass('is-show');
      $('body').removeClass('no-scroll');
    });
  });
  