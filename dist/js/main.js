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
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkForm();
});

function checkForm(){
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if(nameValue === ''){
    displayError(name, "Name cannot be blank");
  }
  else {
    displaySuccess(name);
  }
  if(emailValue === ''){
    displayError(email, "Email cannot be blank");
  }
  else if(!isValidEmail(emailValue)){
    displayError(email, "Email is not valid");
  }
  else {
    displaySuccess(email);
  }
  if(messageValue === ''){
    displayError(message, "Message cannot be blank");
  }
  else {
    displaySuccess(message);
  }
}

function displayError(input, message){
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector('small');
  small.innerText = message;
  inputContainer.className = 'input-container error';
}

function displaySuccess(input){
  const inputContainer = input.parentElement;
  inputContainer.className = 'input-container success';
}

function isValidEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const links = document.getElementById('links');

toggleButton.addEventListener('click', () => {
  links.classList.toggle('active');
})