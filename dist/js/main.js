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

const form = document.getElementById('form');
const nameC = document.getElementById('name');
const name = document.querySelector('.name');
const emailC = document.getElementById('email');
const email = document.querySelector('.email');
const messageC = document.getElementById('message');
const message = document.querySelector('.message');
form.addEventListener('submit', (event) => {
  let messages = [];
  if(validateEmpty(name) || validateEmail(email) || validateEmpty(message)){
    event.preventDefault();
    if(validateEmpty(name)){
      let nameError = document.createElement("p");
      name.classList.add("error-border");
      nameError.innerText = "Name is required";
      nameError.classList.add("error-message");
      nameC.appendChild(nameError);
    }
    if(!validateEmail(email)){
      let emailError = document.createElement("p");
      email.classList.add('error-border');
      emailError.innerText = "Email is not the correct format";
      emailError.classList.add("error-message");
      emailC.appendChild(emailError);
    }
    if(validateEmpty(message)){
      let messageError = document.createElement("p");
      message.classList.add('error-border');
      messageError.innerText = "Message is required";
      messageError.classList.add("error-message");
      messageC.appendChild(messageError);
    }
  }
})

const validateEmpty = (text) => {
  return (text.value === '' || text.value == null) ? true : false;
}

const validateEmail = (email) => {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}