const App = {
  workItems: [
    {
      imagePath: "public/assets/svg/cpp-app.svg",
      link: "https://github.com/adisve/Chess-Game",
    },
    {
      imagePath: "public/assets/svg/kotlin-app.svg",
      link: "https://github.com/adisve/firebase-smart-house",
    },
    {
      imagePath: "public/assets/svg/python-app.svg",
      link: "https://github.com/adisve/brain-tumor-classifier",
    },
    {
      imagePath: "public/assets/svg/swift-app.svg",
      link: "https://github.com/adisve/Tumble-iOS",
    },
  ],

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

  populateSidebarList() {
    const sidebar = document.getElementById("project-links");
    this.workItems.forEach((item) => {
      const appItem = document.createElement("a");
      appItem.className = "app-icon-link";
      appItem.target = "_blank";
      appItem.href = item.link;
      appItem.innerHTML = `<img src="${item.imagePath}">`;
      sidebar.appendChild(appItem);
    });
  },

  addSidebarEventListeners() {
    const sidebar = document.querySelector(".sidebar");
    const icons = document.querySelectorAll(".app-icon-link > img");

    sidebar.addEventListener("mousemove", (e) => {
      if (window.innerWidth > 500) {
        const sidebarRect = sidebar.getBoundingClientRect();
        icons.forEach((icon) => {
          const iconRect = icon.getBoundingClientRect();
          const distanceY = Math.abs(
            e.clientY - (iconRect.top + iconRect.height / 2)
          );
          const scale = Math.max(1, 1.5 - distanceY / 100);

          icon.style.marginTop = "0.8rem";
          icon.style.marginBottom = "0.8rem";
          icon.style.transform = `scale(${scale * 0.95})`;
        });
        sidebar.style.height = "50vh";
      }
    });

    sidebar.addEventListener("mouseleave", () => {
      if (window.innerWidth > 500) {
        icons.forEach((icon) => {
          icon.style.transform = `scale(1)`;
          icon.style.marginTop = "0.5rem";
          icon.style.marginBottom = "0.5rem";
        });
        sidebar.style.height = "45vh";
      }
    });
  },

  init() {
    this.populateSidebarList();
    this.addSidebarEventListeners();
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
