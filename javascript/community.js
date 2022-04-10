let swipehannah = document.querySelector(".swipehannah a")
let swipebirds = document.querySelector(".swipebirds a")
let swipekitty = document.querySelector(".swipekitty a")
let swipemocha = document.querySelector(".swipemocha a")

let imghannah = document.querySelector("#imghannah")
let imgbirds = document.querySelector("#imgbirds")
let imgkitty = document.querySelector("#imgkitty")
let imgmocha = document.querySelector("#imgmocha")

swipehannah.addEventListener("click", function (e) {
    e.preventDefault();
    imghannah.classList.toggle("hidden")
});


swipebirds.addEventListener("click", function (e) {
    e.preventDefault();
    imgbirds.classList.toggle("hidden")
});
swipekitty.addEventListener("click", function (e) {
    e.preventDefault();
    imgkitty.classList.toggle("hidden")
});
swipemocha.addEventListener("click", function (e) {
    e.preventDefault();
    imgmocha.classList.toggle("hidden")
});
