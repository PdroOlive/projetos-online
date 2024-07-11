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
        let inputValue = addTaskInput.value;
        const newTagList = document.createElement("li");
        listField.appendChild(newTagList);
        createCheckBox(newTagList)
        createSpan(inputValue, newTagList);
        addTaskInput.value = "";
    }
}
formField.onsubmit = () => 
{
    genericFun()    
    return false;
}


const createCheckBox = (tagList) =>
{
    const newTagCheckBox = document.createElement("input");
    newTagCheckBox.setAttribute("type", "checkbox");
    tagList.appendChild(newTagCheckBox);
    newTagCheckBox.addEventListener("change", () => document.querySelector("ul#container-list span").classList.add("check"))
}


const createSpan = (valueInput, tagList) =>
{
    const newTagSpan = document.createElement("span");
    newTagSpan.innerHTML = valueInput;
    tagList.appendChild(newTagSpan);
}

