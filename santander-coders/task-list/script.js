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
        newTagList.setAttribute("id", "list-main");
        listField.appendChild(newTagList);
        tagList = document.getElementById("list-main");
        createCheckBox(tagList)
        createSpan(inputValue, tagList);
        addTaskInput.value = "";
    }
}
formField.onsubmit = () => 
{
    genericFun()    
    return false;
}


const createCheckBox = (list) =>
{
    let newTagCheckBox = document.createElement("input");
    newTagCheckBox.setAttribute("type", "checkbox");
    list.appendChild(newTagCheckBox);
}


const createSpan = (valueInput, list) =>
{
    let newTagSpan = document.createElement("span");
    newTagSpan.innerHTML = valueInput;
    list.appendChild(newTagSpan);
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
