const slideTopten = document.querySelectorAll(".container-topten .topten-button")

const initSllider = () => 
{
    const imageList = document.querySelector(".container-movie");
    const slideMyList = document.querySelectorAll(".container-mylist .button");

    slideMyList.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            const direction = button.id === "arrow-back" ? -1 : 1;
            const scrollAmount = 300 * direction;
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });
    });

    const checkSlider = () =>
    {
        if(imageList.scrollLeft !== 0) slideMyList[0].classList.add("show-effect");
        else slideMyList[0].classList.remove("show-effect");
    }
    imageList.addEventListener("scroll", () => {checkSlider()});
}

const sliderTopTen = () => 
{
    const imageList = document.querySelector(".container-movie-topten");
    const slideTopten = document.querySelectorAll(".container-topten .topten-button");

    slideTopten.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            const direction = button.id === "prev-topten" ? -1 : 1;
            const scrollAmount = 300 * direction;
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });
    });

    const checkSlider = () =>
    {
        if(imageList.scrollLeft !== 0) slideTopten[0].classList.add("show-effect");
        else slideTopten[0].classList.remove("show-effect");
    }
    imageList.addEventListener("scroll", () => {checkSlider()});
}

const sliderForeign = () => 
{
    const imageList = document.querySelector(".container-movie-foreign");
    const slideForeign = document.querySelectorAll(".container-foreign .foreign-button");

    slideForeign.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            const direction = button.id === "prev-foreign" ? -1 : 1;
            const scrollAmount = 300 * direction;
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });
    });

    const checkSlider = () =>
    {
        if(imageList.scrollLeft !== 0) slideForeign[0].classList.add("show-effect");
        else slideForeign[0].classList.remove("show-effect");
    }
    imageList.addEventListener("scroll", () => {checkSlider()});
}

const sliderNewSeries = () => 
{
    const imageList = document.querySelector(".container-movie-newseries");
    const slideNew = document.querySelectorAll(".container-newseries .newseries-button");

    slideNew.forEach(button =>
    {
        button.addEventListener("click", () =>
        {
            const direction = button.id === "prev-new" ? -1 : 1;
            const scrollAmount = 300 * direction;
            imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
        });
    });

    const checkSlider = () =>
    {
        if(imageList.scrollLeft !== 0) slideNew[0].classList.add("show-effect");
        else slideNew[0].classList.remove("show-effect");
    }
    imageList.addEventListener("scroll", () => {checkSlider()});
}
    
    

window.addEventListener("load", initSllider);
window.addEventListener("load", sliderTopTen);
window.addEventListener("load", sliderForeign);
window.addEventListener("load", sliderNewSeries);
