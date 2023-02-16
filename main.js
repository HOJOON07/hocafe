// alert("되었는가?");

const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

let test = true;
let test2 = true;
let test3 = true;
let test4 = true;

console.log("변수 초기값", test, test2, test3);

// searchEl.addEventListener("click", function () {
//   if ((test && test2 && test3) || !test3) {
//     searchInputEl.focus();
//     test3 = false;
//     console.log("if의 test,tes1,tes3", test, test2, test3);
//     // test1 = false;
//   } else if (test && test2 && !test3) {
//     searchInputEl.blur();
//     test4 = false;
//     console.log("else if ", test, test2, test3);
//     // test3 = true;
//   } else if (test && !test3) {
//     test4 = true;
//     searchInputEl.focus();
//   }
// });

// searchEl.addEventListener("click", function () {
//   if ((test && test2 && test3) || test4) {
//     if (test && test4) {
//       searchInputEl.focus();
//       test4 = false;
//     }
//   } else if (!test4) {
//     searchInputEl.blur();
//   }
// });

// if의 if 를 쓰고 focus addeventlistener

// onblur;
// searchEl.addEventListener("focus", function () {
//   test3 = false;
//   test = false;
//   console.log("난 포커스 이벤트 ");
// });

// const mainBody = document.querySelector("body");

// // 함수 불리언 -> true
// // 함수 불리언 -> true

// 1.온클릭 함수를 만든다 ( body,돋보기에 ,그리고 %% 로 묶어서 둘다 트루일때만 동작)

// 2.

// onclick함수 만들어서  &&로 ?
// searchEl.addEventListener("focus", function () {
//   if (test) {
//     test = true;
//   }
// });

// searchEl.addEventListener("click", function (e) {
//   console.log(e);
//   if (!e.isTrusted) {
//     searchInputEl.blur();
//   } else if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else {
//     searchInputEl.blur();
//     test = true;
//   }
//   // searchInputEl.focus();
// });
// mainBody.addEventListener("click", function () {
//   searchEl.addEventListener("click", function () {
//     if (test) {
//       searchInputEl.focus();
//       test = false;
//     } else  (!test) {
//       searchInputEl.blur();
//       test = true;
//     }
//   });
// });

// mainBody.addEventListener("click", function () {
//   test = false;
// });

// searchEl.addEventListener("click", function () {
//   if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else {
//     searchInputEl.blur();
//     test = true;
//   }
// });
// function onclic() {}
// mainBody.addEventListener("click", function () {
//   if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else {
//     searchInputEl.blur();
//     test = true;
//   }
//   // 함수 불리언
// });

// searchEl.addEventListener("click", function () {
//   if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else {
//     searchInputEl.blur();
//     test = true;
//     // 함수 불리언
//   }
// });
// mainBody.addEventListener("click", function () {}) &&
//   searchEl.addEventListener("click", function () {
//     if (test) {
//       searchInputEl.focus();
//       test = false;
//     } else {
//       searchInputEl.blur();
//       test = true;
//     }
//   });
// console.log(test);

// searchEl.addEventListener("click", function () {
//   if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else {
//     searchInputEl.blur();
//     test = true;
//   }
// });

// searchEl.addEventListener("click", function (e) {
//   console.dir(e);
//   if (test) {
//     searchInputEl.focus();
//     test = false;
//   } else if (!test) {
//     searchInputEl;
//   }
// });

// searchEl.addEventListener("click", function (e) {
//  console.log(e)
//  if(!test){
//   searchInputEl.blur()
//   test = false
//  }else if (

//  )
// });
// 처음엔 무조건 트루이고 그담 클릭에는 무조건 폴스라서 두번 눌러야 트루 값이 되고 열리는거임

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE

const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);

//SWIPER PROMOTION

const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // touchRatio: 0,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

// Toggle
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//애니메이션 파트
// VISUAL
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// 애니메이션 스크롤 파트
// 엘살바도르
window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 400) {
    const elsalvador = document.querySelector(".elsalvador");
    elsalvador.classList.add("animate");
  }
  if (window.scrollY > 853) {
    const ethiopia = this.document.querySelector(".ethiopia");
    ethiopia.classList.add("animate");
  }
  if (window.scrollY > 1400) {
    const favorite = document.querySelector(".favorite");
    favorite.classList.add("animate");
  }
  if (window.scrollY > 2080) {
    const magazine = document.querySelector(".magazine");
    magazine.classList.add("animate");
  }
  if (window.scrollY > 2500) {
    const store = document.querySelector(".store");
    store.classList.add("animate");
  }
});
