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
         newTagList.innerHTML = inputValue;
         listField.appendChild(newTagList);
         addTaskInput.value = "";
     }
}
formField.onsubmit = () => 
{
    genericFun()    
    return false;
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
