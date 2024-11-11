// Code Navigasi

const hamBurger = document.getElementById("hamBurger");
const navItem = document.getElementById("navItem");

hamBurger.addEventListener("click",function() {
  if (navItem.style.display == "none") {
    navItem.style.display = "block";
  }else{
    navItem.style.display = "none";
  }
});
