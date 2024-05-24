const dateOne = new Date().getHours();
const minOne = new Date().getMinutes();
const secOne  = new Date().getSeconds();
console.log(`${dateOne}:${minOne}:${secOne.toString().padStart(2, "0")}`)
const dateFull = new Date(`May 13 2024 18:18`)