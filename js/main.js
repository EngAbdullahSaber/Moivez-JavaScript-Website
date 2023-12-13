const language = document.querySelector(".navbar .navbar-nav .language i");
const languageMenu = document.querySelector(".navbar .navbar-nav .lang");
language.addEventListener("click" ,function(){
    
    languageMenu.classList.toggle("Toggle")

});
const Search = document.querySelector(".navbar .navbar-nav .search i");
const searchField = document.querySelector(".navbar .navbar-nav .searchField");


Search.addEventListener("click" ,function(){
    
    searchField.classList.toggle("ToggleSearh")

});







