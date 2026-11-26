const navbar = document.getElementById("mainNavbar");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

const applyTheme = (theme) => {
  document.body.setAttribute("data-theme", theme);
  if (themeIcon) {
    themeIcon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
};

const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme === "light" ? "light" : "dark";
applyTheme(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    createThemeParticles();
    const currentTheme = document.body.getAttribute("data-theme");
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });
}



function createThemeParticles() {
  const container = document.getElementById("themeParticles");
  if (!container) return;
  const colors = [
    "#4285FF",
    "#A855F7",
    "#00D4AA",
    "#FF4FA3",
    "#FFD166",
    "#00CFFF"
  ];

  // Clear previous particles
  container.innerHTML = "";
  // Create colorful bubbles and sparkles
  for (let i = 0; i < 32; i++) {
    const particle = document.createElement("span");
    const isSparkle = Math.random() > 0.6;
    const size = isSparkle
      ? Math.random() * 9 + 4
      : Math.random() * 45 + 18;

    const color = colors[
      Math.floor(Math.random() * colors.length)
    ];

    particle.className = "theme-particle";

    if (isSparkle) {
      particle.style.borderRadius = "3px";
      particle.style.boxShadow =
        `0 0 12px ${color}, 0 0 22px ${color}`;
      particle.style.background = color;
    } else {
      particle.style.background =
        `radial-gradient(circle at 30% 30%,
                rgba(255,255,255,0.95),
                ${color} 35%,
                transparent 80%)`;

      particle.style.border =
        `1px solid ${color}`;

      particle.style.boxShadow =
        `0 0 18px ${color}80`;
    }

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Bottom-right to top-left movement
    particle.style.setProperty(
      "--move-x",
      `${-(Math.random() * 75 + 25)}vw`
    );

    particle.style.setProperty(
      "--move-y",
      `${-(Math.random() * 65 + 35)}vh`
    );

    particle.style.animationDelay =
      `${Math.random() * 0.5}s`;

    container.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }
}



const themeVideos = document.querySelectorAll(
  ".card-bg-video"
);
function updateCardVideos() {
  const theme = document.body.dataset.theme;
  themeVideos.forEach(video => {
    if (
      (theme === "dark" &&
        video.classList.contains("dark-video")) ||
      (theme === "light" &&
        video.classList.contains("light-video"))
    ) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  });
}
// Initial Theme
updateCardVideos();
// Detect Theme Changes
const themeObserver = new MutationObserver(() => {
  updateCardVideos();
});
themeObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ["data-theme"]
});



document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");
  if (typingElement && typeof Typed !== "undefined") {
    new Typed(".typing-text", {
      strings: [
        "Full Stack Developer",
        "Designer",
        "Problem Solver"
      ],
      typeSpeed: 80,
      backSpeed: 45,
      backDelay: 1000,  //1s
      startDelay: 500,   //0.5s
      loop: true,
      showCursor: false,
      preStringTyped: function (arrayPos) {
        const colors = [
          "#82adfc",  // Blue
          "#8c32e0",  // Purple
          "#eb6060"   // red
        ];
        typingElement.style.color = colors[arrayPos];
      }
    });
  }
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});


const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput ? firstNameInput.value.trim() : "there";

    formStatus.textContent = `Thanks ${firstName}! Your message has been received.`;
    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 3500);
  });
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});


//----motion movemnt animation and js end all code---------------------
document.addEventListener("DOMContentLoaded",
  function () {
    const animatedElements = document.querySelectorAll(
      ".animate-left, .animate-right, .animate-top, .animate-bottom"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // ਦੁਬਾਰਾ scroll ਕਰਨ 'ਤੇ animation ਫਿਰ ਚੱਲੇਗੀ
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.15
    });
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  });
