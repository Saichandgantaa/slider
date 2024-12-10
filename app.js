let slider = document.querySelector(".slider")
let next = document.querySelector(".next")
let prev = document.querySelector(".previous")
let slides = document.querySelector(".slides")
let imgs = document.querySelectorAll("img")



let currentIndex = 0


function change(index) {
    if (index >= 5) {
        currentIndex = 0
        index = 0

    }
    else if (index <= 0) {
        currentIndex = 4
        index = 4
    }

    currentIndex = index

    let num = index * 100;


    slides.style.transform = `translate(-${num}%)`;


    console.log(index)

}




next.addEventListener("click", () => {

    change(currentIndex + 1)

})
prev.addEventListener("click", () => {

    change(currentIndex - 1)

})

