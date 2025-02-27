const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const list = document.querySelector("#list");
const left = document.querySelector("#left");
const interval = document.querySelector("#interval");
const tabs = document.querySelectorAll("[data-tabs]");
const services = document.querySelectorAll("[data-services]");
const buildingForm = document.getElementById("buildingForm");
const upgradesForm = document.getElementById("upgradesForm");
const repairsForm = document.getElementById("repairsForm");

//Hamburger Toggle Section

hamburger.addEventListener("click", (e) => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("opacity-0");
  closeIcon.classList.remove("rotate-[90deg]");
  left.classList.remove("translate-x-[-150%]");
});

//Close Icon Toggle Section

closeIcon.addEventListener("click", (e) => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("opacity-0");
  closeIcon.classList.add("rotate-[90deg]");
  left.classList.add("translate-x-[-150%]");
});

//Toggle between the PC-Building

(function getItems() {
  services.forEach((items) => {
    items.addEventListener("click", (e) => {
      gtItems(items.innerText.replace(" ", "").toLowerCase());
      items.classList.toggle("bg-[rgba(206_13_94/.7)]");
      services.forEach((hiddens) => {
        if (items !== hiddens) {
          hiddens.classList.remove("bg-Accent");
          hiddens.classList.remove("bg-[rgba(206_13_94/.7)]");
        }
      });
    });
  });
})();

function gtItems(items) {
  tabs.forEach((tabItems) => {
    if (items == tabItems.id) {
      document.querySelector(`#${tabItems.id}`).classList.remove("hidden");
      document.querySelector(`#${tabItems.id}`).classList.remove("lg:hidden");
    } else {
      tabItems.classList.add("hidden");
      tabItems.classList.add("lg:hidden");
    }
  });
}

//Emaill Integration

function sendEmail(category) {
  let params = {
    subject: "Get a quote",
    from: "mkvcinemas945@gmail.com",
    email:
      document.getElementById("emailfirst").value ||
      document.getElementById("emailsecond").value ||
      document.getElementById("emailthird").value,
    categoryforpcbuilding: category === "PC-Building" ? "PC-Building" : "--",

    messageforpcbuilding:
      category === "PC-Building"
        ? document.getElementById("messageforpcbuilding").value
        : "--",
    options:
      category === "PC-Building"
        ? document.getElementById("pricecategoryforpcbuilding").value
        : "--",
    custom:
      category === "PC-Building"
        ? document.getElementById("custom").value
        : "--",
    exp:
      category === "PC-Building"
        ? document.getElementById("exp").checked
          ? "Yes"
          : "No"
        : "--",
    categoryforupgrades: category === "Upgrades" ? "Upgrades" : "--",
    cpu:
      category === "Upgrades"
        ? document.getElementById("cpu").checked
          ? "Yes"
          : "No"
        : "--",
    gpu:
      category === "Upgrades"
        ? document.getElementById("gpu").checked
          ? "Yes"
          : "No"
        : "--",
    cooler:
      category === "Upgrades"
        ? document.getElementById("cooler").checked
          ? "Yes"
          : "No"
        : "--",
    ram:
      category === "Upgrades"
        ? document.getElementById("ram").checked
          ? "Yes"
          : "No"
        : "--",
    casing:
      category === "Upgrades"
        ? document.getElementById("casing").checked
          ? "Yes"
          : "No"
        : "--",
    motherboard:
      category === "Upgrades"
        ? document.getElementById("motherboard").checked
          ? "Yes"
          : "No"
        : "--",
    budget:
      category === "Upgrades"
        ? document.getElementById("budget").value
          ? document.getElementById("budget").value + "$"
          : "--"
        : "--",
    categoryforrepaires: category === "Small-Repairs" ? "Small-Repairs" : "--",

    categoryofdevice:
      category === "Small-Repairs"
        ? document.getElementById("categoryofdevice").value
        : "--",
    issue: document.getElementById("issue").value
      ? document.getElementById("issue").value
      : "--",
  };
  emailjs
    .send("service_tlxv4wh", "template_i41x9qp", params)
    .then((message) => alert("Email Sent"));
}
buildingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail("PC-Building");
});
upgradesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail("Upgrades");
});
repairsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail("Small-Repairs");
});
