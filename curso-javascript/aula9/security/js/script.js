const inputName = document.getElementById("iname");
const inputInvite = document.getElementById("iinvite");
const containerRes = document.getElementById("res");
const button = document.getElementById("button");





function checkArray()
{
    let isName = inputName.value
    let isInvite = inputInvite.value
    const cristianInvite = ["Pedro", "Luiza", "Mario", "Messi", "Joe"];
    for(let i in cristianInvite)
    {
        if(isName == "")
        {
            containerRes.innerText = `Pesquisando...`;
        }
        else if(isName === cristianInvite[i] && isInvite === "Cristian")
        {
            containerRes.innerText = `Acesso Liberado!! Divirta-se.`;
        }
        else if(isName !== cristianInvite[i] && isInvite !== "Cristian")
        {
            containerRes.innerText = `Acesso Negado!!`;
        }
        
    }
}



button.addEventListener("click", checkArray);

