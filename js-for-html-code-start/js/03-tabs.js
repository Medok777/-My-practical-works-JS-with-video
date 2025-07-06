const click = "Click...";
const tab = document.querySelectorAll("[data-tab]");
const box = document.querySelectorAll("[data-tab-content");

tab.forEach(function (item) {
  item.addEventListener("click", function () {
    box.forEach(function (item) {
      item.classList.add("hidden");
    });

    const contentBox = document.querySelector("#" + this.dataset.tab);
    contentBox.classList.remove("hidden");
  });
});
