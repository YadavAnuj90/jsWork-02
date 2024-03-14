/*
function calculator(operator,a,b){
    return operator(a,b)
}
console.log(calculator((a,b) => a+b,5,6));




function calculateFoodBill(perObj) {
    if(perObj.age >11){
        console.log("Your food bill is 900");
    }else{
        console.log("bill in only 200");
    }
}
calculateFoodBill({name:"Anuj",age:45})
*/

//Callback+======//


//++++++++ CONSITE FUNCTION OR CALLBACK +++++++++++//

const twice = x=>x*2
const sqr = x=>x*x

const compose = (fn1,fn2) => (value) => fn1(fn2(value))

console.log(compose(sqr,twice)(5));
