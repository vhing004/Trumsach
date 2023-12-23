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