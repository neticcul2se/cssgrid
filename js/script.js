$(document).ready(function(){
    $('.hamburger').on("click",function(){
        $("ul.menu").toggleClass("open");
    });
});
function myFunction(x) {
    x.classList.toggle("change");
  }
