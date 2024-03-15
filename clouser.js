 function outer(num1) {
  let num2 = 20;
  return function () {
    return num1 + num2;
  };
}

const closure = outer(10);

console.log(closure());

Lexical scope *************************

function outer() {
    let count =0;

    return function(){
        console.log(count++);
    }
}
const counter = outer();

counter();
counter();
counter();

Destuctering and imp od this *******************//

const nums = [1,2,3,4];

const [one,two,,four] = nums;

console.log(one);
console.log(two);
console.log(three);
console.log(four);

const names = 'Anuj Kumar';

const [firstName,lastName] = names.split(' ')

console.log(firstName);
console.log(lastName);

Swapping using the dest*********//

const names = 'anuj kumar ';

const person = {};
[person.firstName,person.lastName] = names.split(' ');

console.log(person);

let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake" , "Peanut"],
    extra: true
};
const {
    size: {width },
    items: [, item2],
} = options;

console.log(width);
console.log(item2);

const person = {
    name: 'Anuj',
    address: {city: 'Delhi', country:'INDIA'}
};
const getNestedInfo = ({name,address:{city,country}} )=>{

    return `${name} live in ${city},${country}`
}
console.log(getNestedInfo(person));

const company = {
  name: "Techno",
  CEO: {
    name: "Anuj",
    age: 19,
    address: {
      city: "Noida ",
      country: "INDIA",
    },
  },
};
const getCEOInfo = ({ CEO }) => {
  const {
    name,
    age,
    address: { city },
  } = CEO;
  return { name, age, city };
};
const ceoInfo = getCEOInfo(company);

console.log(ceoInfo.name);
console.log(ceoInfo.age);
console.log(ceoInfo.city);

const person = {
  name: "Anuj",
  age: 19,
  address: {
    city: "Noida ",
    country: "INDIA",
  },
};
const modifyPerson = (person) => {
  const {
    name,
    age,
    address: { city },
  } = person;

  return {
    fullName: name,
    age: age * 2,
    currentCity: city,
  };
};
const modifiedPerson = modifyPerson(person);
console.log(modifiedPerson.fullName);
console.log(modifiedPerson.age);
console.log(modifiedPerson.currentCity);
console.log(person.name);
console.log(person.age);
console.log(person.address.city);



spred and rest opretor////
const  nums = [1,2,3,4,5]

const sum = (a,b,c,d,e) =>{
  console.log(a+b+c+d+e);
}
sum(...nums)








// +++++++++++++++++++Revision +++++++++++++++++++++++//



 function outer (num1) {
  let num2 = 20;
  return function() {
  return num1+num2
  }
 }
 const colsure = outer(5); 

 console.log(colsure());




//Lecsical envoirment + ////////////////



function outer() {
  let count = 0;

  return function() {
    console.log(count++);
  }
}
const counter = outer();
counter();
counter();
counter();
counter();
counter();
counter();



function addNum() {
  let count = 0;

  return function() {
    console.log(count++);
  }
}
const total = addNum();

total();
total();

const cart = shoppingCart();

console.log('Cart Iteams:', cart.getCartIteams());
