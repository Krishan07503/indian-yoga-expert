const prev =
  '<img src="assets/icons/our-teacher-slider-left-icon.png" alt="" class="img-fluid"/>';
const next =
  '<img src="assets/icons/our-teacher-slider-right-icon.png" alt="" class="img-fluid"/>';

$(".home-img-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  touchDrag: false,
  mouseDrag: false,
  pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".our-teachers-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: true,
  navText: [prev, next],
  // nav: false,
  dots: false,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  touchDrag: true,
  mouseDrag: true,
  pullDrag: true,
  // smartSpeed: 500,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 1.5,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.5,
    },
  },
});

$(".happy-students-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  dots: false,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  touchDrag: false,
  mouseDrag: false,
  pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".journey-media-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  // touchDrag: false,
  // mouseDrag: false,
  // pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4.3,
    },
  },
});
$(".reviews-feedback-box.owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  // touchDrag: false,
  // mouseDrag: false,
  // pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 2.55,
    },
  },
});
$(".reviews-expert-yoga-instrutor.owl-carousel").owlCarousel({
  loop: true,
  margin: 40,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  // touchDrag: false,
  // mouseDrag: false,
  // pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 2.9,
    },
  },
});


$(".istructor-yoga-icon.owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: false,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  touchDrag: false,
  mouseDrag: false,
  pullDrag: false,
  smartSpeed: 500,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

$(".instructor-happy-student.owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  autoplay: false,
  autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  // touchDrag: false,
  // mouseDrag: false,
  // pullDrag: false,
  // smartSpeed: 500,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});