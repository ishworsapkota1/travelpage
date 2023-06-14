var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  ///////////////////////////
  var swiper1 = new Swiper(".mySwiperC", {
    slidesPerView: 1,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // ////////////////////////////////
  var swiper_s = new Swiper(".testimonial", {
    // spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });