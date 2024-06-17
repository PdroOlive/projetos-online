


function actionSlide(e)
{
    var slideMove = document.querySelector(".container-movie");
    if(e == 1)
    {
        slideMove.scrollLeft = slideMove.scrollLeft - 200;
    }
    else if(e == 2)
    {
        slideMove.scrollLeft = slideMove.scrollLeft + 200;
    }
}
