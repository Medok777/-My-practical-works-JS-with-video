const accordeonTitle = document.querySelectorAll(
  '[data-name="accordeon-title"]'
);
const click = "Click...";

accordeonTitle.forEach(function (item) {
  item.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
});
