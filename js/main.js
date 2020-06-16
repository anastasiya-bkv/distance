const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");
const pageTabs = document.querySelectorAll(".page-info-tab-item");
const pageStatistics = document.querySelectorAll(".page-info-statistics");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

pageTabs.forEach((pageTab) => {
  pageTab.addEventListener("click", () => {
    // убираем .active у выбранного ранее таба и у блока с инфой
    const pageTabActive = document.querySelector(".page-info-tab-item.active"); //табы
    pageTabActive?.classList.remove("active");
    const pageStatisticActive = document.querySelector(
      ".page-info-statistics.active"
    ); //инфа
    pageStatisticActive?.classList.remove("active");
    //добавляем класс .active выбранному табу и блоку с инфой
    pageTab.classList.add("active");
    const id = pageTab.dataset.id;
    const element = document.getElementById(`page-info-${id}`);
    element.classList.add("active");
  });
});
