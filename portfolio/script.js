/* ==========================
   MOBILE MENU TOGGLE
========================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

/* ==========================
   STICKY HEADER
========================== */

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

/* ==========================
   ACTIVE NAV LINK ON SCROLL
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

/* ==========================
   SMOOTH SCROLL
========================== */

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

/* ==========================
   TYPED EFFECT
========================== */

if (document.querySelector(".multiple-text")) {
    new Typed(".multiple-text", {
        strings: ["Software Developer", "Web Designer", "App Developer","College Student"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(".project-card, .home-content, .home-img");

window.addEventListener("scroll", () => {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("show");
        }
    });
});

/* ==========================
   DYNAMIC PROJECTS (Optional)
========================== */

const projects = [
    {
        title: "To-Do App",
        description: "Task management app using LocalStorage."
    },
    {
        title: "Product Filter App",
        description: "Filter & sort products dynamically."
    },
    {
        title: "Portfolio Website",
        description: "Responsive animated personal portfolio."
    }
];

const projectContainer = document.querySelector(".project-container");

if (projectContainer) {
    projectContainer.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectContainer.appendChild(card);
    });
}

/* ==========================
   DARK / LIGHT MODE
========================== */

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("light-mode")) {
            icon.classList.remove("bx-moon");
            icon.classList.add("bx-sun");
        } else {
            icon.classList.remove("bx-sun");
            icon.classList.add("bx-moon");
        }
    });
}

/* ==========================
   CONTACT FORM VALIDATION
========================== */

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "none";
            }
        });

        if (valid) {
            alert("Message sent successfully!");
            form.reset();
        }
    });
}