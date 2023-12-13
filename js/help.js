const help = document.querySelector(".generall ");
const  answer1 = document.querySelectorAll(".answer1");



help.addEventListener("click" ,function(e){
    
    console.log(e.target.dataset.question);

    if ( e.target.dataset.question == answer1[0].dataset.question){
        answer1[0].classList.toggle("toggle");

        if (e.target.className == "fa-solid fa-chevron-down" ) {
            e.target.classList.remove("fa-chevron-down");
            e.target.classList.add("fa-chevron-up");
        }else if (e.target.className == "fa-solid fa-chevron-up") {
            e.target.classList.remove("fa-chevron-up");
            e.target.classList.add("fa-chevron-down");
        }
       

    }else if ( e.target.dataset.question == answer1[1].dataset.question){
        answer1[1].classList.toggle("toggle");
    }else if ( e.target.dataset.question == answer1[2].dataset.question){
        answer1[2].classList.toggle("toggle");
    }
});







