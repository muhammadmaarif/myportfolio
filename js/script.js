const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

// portfolio
const elementclose = document.getElementsByClassName("overlay");
for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf("#"));
    window.location = url;
  });
}
