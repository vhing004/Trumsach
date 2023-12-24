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
      prevArrow: false,
      nextArrow: false,
      draggable: true,
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

  