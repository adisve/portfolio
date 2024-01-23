const scrollToElement = (element) => {
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

const sendEmail = () => {
  var subject = encodeURIComponent("Contact form");
  var body = encodeURIComponent("Hello Adis, I'd like to contact you about ...");
  var url = "mailto:adis.veletanlic@gmail.com?subject=" + subject + "&body=" + body;
  window.location.href = url;
}

const loadSVG = (svgUrl, targetElementId) => {
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

const initSVGAnimation = () => {
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
