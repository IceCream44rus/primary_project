var link = document.querySelector(".link");
var modal = document.querySelector(".modal");
var login = document.querySelector(".login");
var close = document.querySelector(".close");
var close_map = document.querySelector(".close_map");
var close_write = document.querySelector(".close_write");
var map_open = document.querySelector(".map_open");
var map_modal = document.querySelector(".map_modal");
var modal_write = document.querySelector(".modal_write");
var write_me = document.querySelector(".write_me");


link.addEventListener("click" , function(){
    modal.classList.toggle("show");
});

close.addEventListener("click", function(){
    modal.classList.remove("show");
});

map_open.addEventListener("click" , function(){
	map_modal.classList.toggle("show");
});

close_map.addEventListener("click" , function(){
	map_modal.classList.remove("show");
});

modal_write.addEventListener("click" , function(){
    write_me.classList.toggle("show");
});

close_write.addEventListener("click" , function(){
	write_me.classList.remove("show");
});

///////////////////////////////////////////////////////////////////////////////////
