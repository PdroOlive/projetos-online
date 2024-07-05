const titleMain = document.getElementById("title-main");
const buttonMin = document.getElementById("button-min");
const buttonMax = document.getElementById("button-max");
const inputElement = document.getElementById("iinput");
const cont = document.getElementById("cont");

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

inputElement.addEventListener("input", () => console.log(inputElement.value))
