
filme = {
    tittle: "Spider-Man",
    year: 2021,
    clss: 18,
    director: "Sam Raimi",
}
function searchString(obj)
{
    for(let i in obj)
    if(typeof(obj[i]) === "string")
        console.log(obj[i])
}

const exec = searchString(filme)