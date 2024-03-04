const App = {
  scrollToElement(element) {
    document.querySelector(element).scrollIntoView({
      behavior: "smooth",
    });
  },

  addEventListeners() {
    document
      .querySelector('a[href="#contact"]')
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.scrollToElement("#contact");
      });

    document
      .querySelector('a[href="#my-work"]')
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.scrollToElement("#my-work");
      });
  },

  sendEmail() {
    var subject = encodeURIComponent("Contact form");
    var body = encodeURIComponent(
      "Hello Adis, I'd like to contact you about ..."
    );
    var url =
      "mailto:adis.veletanlic@gmail.com?subject=" + subject + "&body=" + body;
    window.location.href = url;
  },

  loadSVG(svgUrl, targetElementId, pathId) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", svgUrl, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var svg = xhr.responseText;
        document.getElementById(targetElementId).innerHTML = svg;
        this.initSVGAnimation(pathId);
      }
    };
    xhr.send();
  },

  initSVGAnimation(svgElementId) {
    var path = document.getElementById(svgElementId);
    var length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 14s ease-in-out";
    path.style.strokeDashoffset = "0";
  },

  init() {
    this.addEventListeners();
    window.onload = () => {
      this.loadSVG("public/assets/svg/me.svg", "svg-container-me", "path-me");
      this.loadSVG(
        "public/assets/svg/phone.svg",
        "svg-container-phone",
        "path-phone"
      );
    };
  },
};

App.init();
