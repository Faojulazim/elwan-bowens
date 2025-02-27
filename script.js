const hamburger = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#close");
const list = document.querySelector("#list");
const left = document.querySelector("#left");
const interval = document.querySelector("#interval");
const tabs = document.querySelectorAll("[data-tabs]");
const services = document.querySelectorAll("[data-services]");
hamburger.addEventListener("click", (e) => {
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("opacity-0");
  closeIcon.classList.remove("rotate-[90deg]");
  left.classList.remove("translate-x-[-150%]");
});
closeIcon.addEventListener("click", (e) => {
  hamburger.classList.remove("hidden");
  closeIcon.classList.add("opacity-0");
  closeIcon.classList.add("rotate-[90deg]");
  left.classList.add("translate-x-[-150%]");
});
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
const form = document.getElementById("forms");
function sendEmail() {
  let params = {
    from: "mkvcinemas945@gmail.com",
    email:
      document.getElementById("emailfirst").value ||
      document.getElementById("emailsecond").value ||
      document.getElementById("emailthird").value,
    subject: "Get a quote",
    categoryforpcbuilding: document.getElementById("categoryforpcbuilding")
      .value
      ? "PC-Building"
      : "--",

    categoryforrepairs: document.getElementById("messageforpcbuilding").value
      ? "Small-Repairs"
      : "--",
    messageforpcbuilding: document.getElementById("messageforpcbuilding").value
      ? ""
      : "--",
    options: document.getElementById("pricecategoryforpcbuilding").value,
    custom: document.getElementById("custom").value
      ? document.getElementById("custom").value
      : "--",
    exp: document.getElementById("exp").checked ? "Yes" : "No",
    categoryforupgrades: document.getElementById("categoryforupgrades").value
      ? "Upgrades"
      : "--",
    cpu: document.getElementById("cpu").checked ? "Yes" : "No",
    gpu: document.getElementById("gpu").checked ? "Yes" : "No",
    cooler: document.getElementById("cooler").checked ? "Yes" : "No",
    ram: document.getElementById("ram").checked ? "Yes" : "No",
    casing: document.getElementById("casing").checked ? "Yes" : "No",
    motherboard: document.getElementById("motherboard").checked ? "Yes" : "No",
    budget: document.getElementById("budget").value
      ? document.getElementById("budget").value + "$"
      : "No",
  };
  emailjs
    .send("service_tlxv4wh", "template_i41x9qp", params)
    .then((message) => alert("mail sent successfully"));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
console.log(document.getElementById("options").value);
