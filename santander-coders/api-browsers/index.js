const titleMain = document.getElementById("title-main");
const buttonMin = document.getElementById("button-min");
const buttonMax = document.getElementById("button-max");
const inputElement = document.getElementById("iinput");
const themeSwitch = document.getElementById("switch-theme");
const cont = document.getElementById("cont");
let controlTheme;


buttonMin.addEventListener("click", () => 
{
    const valueActual = Number(cont.innerHTML)
    cont.innerHTML = valueActual - 1;
});
buttonMax.addEventListener("click", () => 
{
    const valueActual = Number(cont.innerHTML);
    cont.innerHTML = valueActual + 1;
});

const themeRenew = () =>
{
    if(controlTheme) 
    { 
        document.body.style.background = "rgb(87, 87, 87)";
        document.body.style.color = `white`;
    }
    else
    {
        document.body.style.background = "white";
        document.body.style.color = `black`;
    }
}

window.onload = () =>
{
    const themeInStorage = localStorage.getItem("theme");
    controlTheme = themeInStorage === "true";
    themeRenew();
}

themeSwitch.addEventListener("click", () =>
{
    controlTheme = !controlTheme;

    localStorage.setItem("theme", controlTheme);
    themeRenew();
})

inputElement.addEventListener("input", () => console.log(inputElement.value))
