//Spread Operator

let obj = {
    name: 'John',
    age: 30
}
let obj2 = {...obj};
console.log(obj2);

//Object.assign cloning

let person = {
    name: 'John',
    age: 45
}
let person2 = Object.assign({}, person);
console.log(person2);

//Iteration

let human ={
    name: 'John',
    age: 55
}
let human2 = {};

for(let key in human){
    let newKey = key;
    let newValue = human[key];

    human2[newKey] = newValue;
}

console.log("human2:", human2);