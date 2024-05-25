const number = [1, 2, 3];

number.unshift(5); // Add elemnt in first positiion of array.
console.log(number);

number.splice(2, 0, 4); // Add element in middle position of array, first paramater is index of array, second paramater delete element if he wants, third add one element. 
console.log(number)

number.push(7);
console.log(number); // Add element in final position of array.
