const nav = document.querySelector(".nav");
console.log(nav)

window.onscroll = () => {
  nav.classList.toggle("is-sticky" , window.scrollY > 400);
};
