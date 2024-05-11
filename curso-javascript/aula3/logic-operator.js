console.log(false || true);

let olderAge = true;
let itHasWorkCard = true;
let canApply = olderAge || itHasWorkCard ? "Can Apply!! Good luck" : "Can't Apply!! My bad"

console.log(canApply);

let recused = !canApply;

console.log(recused);