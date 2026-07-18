// منوی موبایل
// var menuToggle  id
// var navbar id
//var menuIcon => .menu-icon
// var closeIcon => .close-icon
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
//دکمه منو
menuToggle.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  navbar.classList.toggle("active");
  //جلوگیری از اسکرول هنگام باز بودن منو
  if (navbar.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
     document.body.style.overflow = "auto";
  }
});



// active
// بستن منو با کلیک روی لینک‌ها
// nav a

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// بستن منو با کلیک خارج از آن
document.addEventListener("click", function (e) {
  if (
    !navbar.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    navbar.classList.contains("active")
  ) {
    navbar.classList.remove("active");
    document.body.style.overflow = "auto";
  }
})
// ایجاد ذرات متحرک
const particlesContainer = document.getElementById("particlesContainer");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // موقعیت و سایز رندوم
  const size = Math.random() * 8 + 3;
  const right = Math.random() * 100;
  const duration = Math.random() * 15 + 10;
  const delay = Math.random() * 5;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.right = `${right}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.opacity = Math.random() * 0.2 + 0.1;

  // رنگ‌های مختلف
  const colors = [
    "linear-gradient(45deg, #ff4757, #ff6b81)",
    "linear-gradient(45deg, #2ed573, #1e90ff)",
    "linear-gradient(45deg, #ffa502, #ff7f50)",
    "linear-gradient(45deg, #9b59b6, #8e44ad)",
  ];
  particle.style.background = colors[Math.floor(Math.random() * colors.length)];

  particlesContainer.appendChild(particle);

  // حذف ذره بعد از پایان انیمیشن
  setTimeout(() => {
    if (particle.parentNode === particlesContainer) {
      particlesContainer.removeChild(particle);
    }
  }, duration * 1000 + delay * 1000);
}

// ایجاد ذرات با تاخیر
function createParticles() {
  const particleCount = window.innerWidth < 768 ? 15 : 25;

  for (let i = 0; i < particleCount; i++) {
    setTimeout(() => {
      createParticle();
    }, i * 300);
  }
}

// ایجاد ذرات اولیه
createParticles();

// ایجاد ذرات جدید هر 20 ثانیه
setInterval(createParticles, 20000);

// **رفع مشکل تایپینگ - روش ساده و مطمئن**
function setupTypingAnimation() {
  const wordList = document.querySelector(".word-list");
  const words = document.querySelectorAll(".word-list span");

  if (words.length === 0) return;

  // تنظیم ارتفاع کانتینر بر اساس ارتفاع کلمات
  const wordHeight = words[0].offsetHeight;
  const container = document.querySelector(".typing-words");

  // تنظیم ارتفاع کانتینر
  container.style.height = `${wordHeight}px`;

  // انیمیشن CSS خودکار کار خواهد کرد
  console.log("انیمیشن تایپینگ فعال شد!");
}

// راه‌اندازی انیمیشن تایپینگ بعد از لود صفحه
window.addEventListener("load", () => {
  setTimeout(setupTypingAnimation, 100);

  // همچنین بعد از لود کامل همه منابع
  window.addEventListener("resize", setupTypingAnimation);
});

// افکت نور روی هدر هنگام اسکرول
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(10, 10, 10, 0.98)";
    header.style.boxShadow = "0 5px 30px rgba(255, 71, 87, 0.3)";
    header.style.padding = "1rem 9%";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.95)";
    header.style.boxShadow = "0 5px 20px rgba(183, 75, 75, 0.2)";
    header.style.padding = "1.5rem 9%";
  }
});

// انیمیشن ورود برای عناصر
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// مشاهده عناصری که انیمیشن دارند
document.querySelectorAll(".home-content > *").forEach((el) => {
  el.style.animationPlayState = "paused";
  observer.observe(el);
});

// تنظیم مجدد ذرات هنگام تغییر سایز پنجره
window.addEventListener("resize", () => {
  // حذف ذرات قبلی
  while (particlesContainer.firstChild) {
    particlesContainer.removeChild(particlesContainer.firstChild);
  }

  // ایجاد ذرات جدید
  createParticles();

  // تنظیم مجدد ارتفاع انیمیشن تایپینگ
  setupTypingAnimation();
});

// کلیک روی لوگو برای بازگشت به بالا
document.querySelector(".logo").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
