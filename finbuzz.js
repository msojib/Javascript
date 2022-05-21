//take a number
//if divide 3 it will show fin
//if divide 5 it will show buzz
// if divide 3 and 5 it will finbuzz
// if not show nothing

let number = 15;

if(number % 3 === 0 && number %5 === 0 ){
    console.log('Finbuzz');
} else if(number % 3 === 0){
    console.log('Fin');
} else if (number %5 === 0){
    console.log('buzz');
}else{
    console.log('Nothing');
}
