

const pessoa = {
    name: "Pedro",
    age: 20,
    sex: "M",
}

const cinema = {
    film: "Spider-man",
    duration: "2h 30m",
    clss: "Livre"
}

const amigo = {
    name: "Guilherme",
    age: 23,
    location: "Jurunas"    
}

const arrayS = [pessoa, cinema, 80];
const arrayAmg = [amigo]

for( let i in arrayS)
{
    console.log(arrayS[i]);
}

for(i in arrayAmg)
    {
        console.log(arrayAmg[i])
    }