const formField = document.getElementById("container-form");
const addTaskInput = document.getElementById("add-task");
const addTaskButton = document.getElementById("apply-add-task");
const listField = document.getElementById("container-list");

let arrayOfList = [];


const genericFun = () =>
{
    if(addTaskInput.value === "")
        alert("Informe sua tarefa!!!")
    else
    {
        let inputValue = addTaskInput.value;
        arrayOfList.push
        ({
            title: inputValue,
            done: false,
        });
        localStorage.setItem("array", JSON.stringify(arrayOfList));

        const newTagList = document.createElement("li");

        const newTagCheckBox = document.createElement("input");
        newTagCheckBox.setAttribute("type", "checkbox");

        const newTagSpan = document.createElement("span");
        newTagSpan.innerHTML = inputValue;

        newTagCheckBox.addEventListener("change", (event) =>
        {   
            const removeList = event.target.parentElement;
            if(event.target.checked === true)
            {

                const removeToArray = removeList.querySelector("span").textContent;

                arrayOfList = arrayOfList.filter(t => t.title !== removeToArray)

                listField.removeChild(removeList);

                localStorage.setItem("array", JSON.stringify(arrayOfList));
            }
        })

        newTagList.appendChild(newTagCheckBox);
        newTagList.appendChild(newTagSpan)
        listField.appendChild(newTagList);
        addTaskInput.value = "";
    }
} 

formField.onsubmit = () => 
{
    genericFun()    
    return false;
}



