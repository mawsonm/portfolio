const home = document.getElementById("home");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const work = document.getElementById("work");
const contact = document.getElementById("contact");
const homeNav = document.querySelector(".home-nav");
const aboutNav = document.querySelector(".about-nav");
const skillsNav = document.querySelector(".skills-nav");
const workNav = document.querySelector(".work-nav");
const contactNav = document.querySelector(".contact-nav");
const sections = [home, about, skills, work, contact];
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-50%",
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (entry.target.id == "home") {
        homeNav.classList.remove("underline");
      }
      if (entry.target.id == "about") {
        aboutNav.classList.remove("underline");
      }
      if (entry.target.id == "skills") {
        skillsNav.classList.remove("underline");
      }
      if (entry.target.id == "work") {
        workNav.classList.remove("underline");
      }
      if (entry.target.id == "contact") {
        contactNav.classList.remove("underline");
      }
      return;
    }
    if (entry.target.id == "home") {
      homeNav.classList.add("underline");
    }
    if (entry.target.id == "about") {
      aboutNav.classList.add("underline");
    }
    if (entry.target.id == "skills") {
      skillsNav.classList.add("underline");
    }
    if (entry.target.id == "work") {
      workNav.classList.add("underline");
    }
    if (entry.target.id == "contact") {
      contactNav.classList.add("underline");
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
