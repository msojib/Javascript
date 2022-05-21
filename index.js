/*let name = 'Saju';
let findDataType = (typeof name);
//alert(findDataType);

let age = 98;
console.log(typeof age);

let isBoy = true;
console.log(typeof isBoy);

let carColor = null;
console.log(typeof carColor);

let carColor1;
console.log(typeof carColor1);

//object 

let user = {
    name:'sojib',
    age: 38,
    hobby : 'cricket'
}

console.log(user.hobby);
user.age = 45;
console.log(user['age'])
user.house='Dhaka';
console.log(user);

let car=["VMW", "Porshi", "Marcedis"];
car.push("Audi");
console.log(car);*/

function ShowName(name){
    console.log('My name is ' +name);
}

ShowName("Sohag");
ShowName("Sharif");
ShowName("Limon");

function calculation(number1,number2){
    const sum = number1+number2;
    return sum;
}
let sumValue = calculation(20,40);
console.log(calculation(40,40));