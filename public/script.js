function scrollToElement(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelector('a[href="#contact"]').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement("#contact");
});

document.querySelector('a[href="#my-work"]').addEventListener("click", (e) => {
  e.preventDefault();
  scrollToElement("#my-work");
});

function loadSVG(svgUrl, targetElementId) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", svgUrl, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var svg = xhr.responseText;
      document.getElementById(targetElementId).innerHTML = svg;
      initSVGAnimation();
    }
  };
  xhr.send();
}

function initSVGAnimation() {
  var path = document.getElementById("path-me");
  var length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  path.getBoundingClientRect();
  path.style.transition = "stroke-dashoffset 14s ease-in-out";
  path.style.strokeDashoffset = "0";
}

window.onload = function () {
  loadSVG("public/assets/me.svg", "svg-container");
};
