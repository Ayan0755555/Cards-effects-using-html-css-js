let items = document.querySelectorAll(".item");
console.log(items);
items.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    let positionPx = e.clientX - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth) * 100;
    console.log(positionX, positionPx);

    let positionPy = e.clientY - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty("--rX", 0.5 * (50 - positionY) + "deg");
    item.style.setProperty("--rY", -0.5 * (50 - positionX) + "deg");
  });
  item.addEventListener("mouseout", () => {
    item.style.setProperty("--rX", "0deg");
    item.style.setProperty("--rY", "0deg");
  });
});
