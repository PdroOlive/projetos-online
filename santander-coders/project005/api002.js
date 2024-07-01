async function showUsers()
{
    try
    {
        const users = await fetch("https://dummyjson.com/users?limit=10&select=firstName,lastName,age,phone");
        const currentData = await users.json();
        console.log(currentData);
    }
    catch(error)
    {
        console.log("Ocorreu um erro", error);
    }
    finally
    {
        console.log("Requisição Finalizada!!");
    }
    
}

async function showUser()
{
    try
    {
        const response = await fetch("https://dummyjson.com/users/1?select=firstName,lastName,age,phone");
        const currentData = await response.json();
        console.log(currentData);
    }
    catch(error)
    {
        console.log("Ocorreu um erro", error);
    }
    finally
    {
        console.log("Requisição Finalizada!!");

    }
}

async function createUser()
{
    try
    {
        const userCreated = await fetch("https://dummyjson.com/users/add", 
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify
            ({
                firstName: "Michael",
                lastName: "Ortiz",
                age: 32,
                phone: "+81 545-981-4447"
            })
        });
        const currentData = await userCreated.json();
        console.log(currentData);
    }
    catch(error)
    {
        console.log("Ocorreu um erro", error)

    }
    finally
    {
        console.log("Requisição Finalizada!!");
        
    }
}

showUsers();
showUser();
createUser();