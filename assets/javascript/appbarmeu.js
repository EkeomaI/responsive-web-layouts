var mainMenu = document.getElementById("menuId");
var subMenu = document.getElementById("submenuId");

function handleMainMenuClick() {
  if (subMenu.classList.contains("submenu-active")) {
    subMenu.classList.toggle("submenu-active");
    subMenu.nextElementSibling.style.maxHeight = null;
  }
  mainMenu.classList.toggle("mainmenu-active");
  var content = mainMenu.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

function handleSubMenuClick() {
  subMenu.classList.toggle("submenu-active");
  var content = subMenu.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "100px";
  }
}
