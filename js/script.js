var link = document.querySelector(".link");
var modal = document.querySelector(".modal");
var login = document.querySelector(".login");
var close = document.querySelector(".close");

link.addEventListener("click" , function(){
    modal.classList.toggle("show");
});

close.addEventListener("click", function(){
    modal.classList.remove("show");
});