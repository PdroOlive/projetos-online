const initSllider = () => 
{
    const imageList = document.querySelector(".container-movie");
    const slideButtons = document.querySelectorAll(".container-mylist .button");

    slideButtons.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            const direction = button.id === "arrow-back" ? -1 : 1;
            const scrollAmount = 300 * direction;
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'})
        });
    });

    const checkSlider = () =>
    {
        if(imageList.scrollLeft !== 0) slideButtons[0].classList.add("show-effect");
        else slideButtons[0].classList.remove("show-effect");
    }
    imageList.addEventListener("scroll", () => {checkSlider()});
}


document.querySelector(".button").addEventListener("click", () => {scrollIntoView({behavior: "smooth"});})
window.addEventListener("load", initSllider);

