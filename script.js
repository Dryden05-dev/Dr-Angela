function init() {

  const burger = document.getElementById("Burger");
  const sideBar = document.getElementById("SideBar");

  if (burger && sideBar) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      sideBar.classList.toggle("active");
    });
  } else {
    console.warn("Burger or SideBar element not found");
  }

  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  } else {
    console.warn("Element with id 'year' not found");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
