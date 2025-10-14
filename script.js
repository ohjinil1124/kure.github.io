const slides = document.querySelectorAll(".fade-bg");
let current = 0;

function showSlide(index) {
  slides.forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);

showSlide(current); // 初期表示

// メイン画像切り替え
document.querySelectorAll(".work-container").forEach((container) => {
  const mainImage = container.querySelector(".main-img");
  const thumbnails = container.querySelectorAll(".thumb-img");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      if (mainImage.src !== thumb.src) {
        mainImage.classList.add("fade-out");

        setTimeout(() => {
          mainImage.src = thumb.src;
          mainImage.classList.remove("fade-out");
          mainImage.classList.add("fade-in");
        }, 300);

        setTimeout(() => {
          mainImage.classList.remove("fade-in");
        }, 600);
      }
    });
  });
});

// Swiperの初期化
document.querySelectorAll(".work-slide").forEach((el) => {
  const wrapper = el.closest(".work-slide-wrapper");
  new Swiper(el, {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: false,
    grabCursor: true,
    navigation: {
      nextEl: wrapper.querySelector(".swiper-button-next"),
      prevEl: wrapper.querySelector(".swiper-button-prev"),
    },
    pagination: {
      el: wrapper.querySelector(".swiper-pagination"),
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 3 },
      480: { slidesPerView: 3 },
      0: { slidesPerView: 3 },
    },
  });
});

const hamburger = document.getElementById("hamburger");
const overlayMenu = document.getElementById("overlayMenu");

hamburger.addEventListener("click", () => {
  overlayMenu.classList.toggle("active");
  hamburger.classList.toggle("open"); // ※あとで×マークアニメに使えるよ
});

document.querySelectorAll(".overlay-menu ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    overlayMenu.classList.remove("active");
  });
});
