// fetch("https://viacep.com.br/ws/66020445/json/").then((response) =>
// {
//     response.json().then((data) => console.log(data))

// }).catch((error) =>
// {
//     console.log(error);
// }).finally(() =>
// {
//     console.log("Requisição  Finalizada!")
// })

async function viaCep()
{
    try
    {
        const zipCode = await fetch("https://viacep.com.br/ws/66020445/json/");
        const dataZipCode = await zipCode.json();
        console.log(dataZipCode);
    }
    catch(error)
    {
        console.log(error);

    }
    finally
    {
        console.log("Requisição Finalizada!!")
    }
}

viaCep()