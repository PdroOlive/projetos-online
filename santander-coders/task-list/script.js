const formField = document.getElementById("container-form");
const addTaskInput = document.getElementById("add-task");
const addTaskButton = document.getElementById("apply-add-task");
const listField = document.getElementById("container-list");

const genericFun = () =>
{
    if(addTaskInput.value === "")
        alert("Informe sua tarefa!!!")
    else
    {
        inputValue = addTaskInput.value;
        const newTagList = document.createElement("li");
        listField.appendChild(newTagList);
        createCheckBox()
        createSpan(inputValue);
        addTaskInput.value = "";
    }
}
formField.onsubmit = () => 
{
    genericFun()    
    return false;
}


const createCheckBox = () =>
{
    const newTagCheckBox = document.createElement("input");
    tagList = document.querySelector("ul#container-list li");
    tagList.appendChild(newTagCheckBox);
    newTagCheckBox.setAttribute("type", "checkbox");
}


const createSpan = (valueInput) =>
{
    const newTagSpan = document.createElement("span");
    tagList = document.querySelector("ul#container-list li");
    tagList.appendChild(newTagSpan);
    newTagSpan.innerHTML = valueInput;
}
// addTaskButton.addEventListener("click", () => 
// {
//     if(addTaskInput.value === "")
//         alert("Informe sua tarefa!!!")
//     else
//     {
//         inputValue = addTaskInput.value;
//         const newTagList = document.createElement("li");
//         newTagList.innerHTML = inputValue;
//         listField.appendChild(newTagList);
//         addTaskInput.value = "";
//     }
// });
