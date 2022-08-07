let rightBar = document.querySelector(".right_menu_closed")
let  open =  document.querySelector(".menu_bar")
let close =  document.querySelector(".close_button")

open.addEventListener('click', function(event){
    event.preventDefault()
    rightBar.classList.add("right_menu_opened")
    rightBar.classList.remove("right_menu_closed")

  
 });


close.addEventListener('click', function(event){
    event.preventDefault()
    rightBar.classList.remove("right_menu_opened")
    rightBar.classList.add("right_menu_closed")
  
 });
