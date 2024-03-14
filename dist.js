/*
            ARRAY DESTRUCTURING 

const nums = [1,2,3]
  const [one,two,three] = nums;

  console.log(one);
  console.log(two);
  console.log(three);

//to string ++++++++//

 const names = 'Anuj Kumar';

const [firstName , lastName] = names.split(" ");

console.log(firstName);
 console.log(lastName);

//++++++++++   SET  +++++++++++++++++//

 const [num1,num2,num3]  =new Set([1,2,3]);

 console.log(num1);
 console.log(num4);

//++++++++  Assign In destru ++++++++

const names = 'Anuj Kumar';

 const person = {};
[person.firstName, person.lastName] = names.split(' ');

console.log(person);

Swapping in string ++++++++++++++//

let firstName = 'Anuj';
let lastName = 'Kumar';

[firstName,lastName] = [lastName,firstName];

console.log(firstName,lastName);

*/




          //OBJECT  DESTRUCTURING
/*
 const obj = {
    firstName: 'Anuj',
    lastName: 'Kumar',
 };

 const {firstName,middleName = 'None',lastName} = obj;

 console.log(firstName,middleName,lastName);

*/
 //ALIASING IN OBJECT +++++++

/*
const firstName = 'ABC';

const obj = {
        firstName: 'Anuj',
        lastName: 'Kumar',
     };
    
     const {firstName:fn,lastName} = obj;
    
     console.log(fn,lastName);

/*
let options = {
    size: {
        width: 100,
        hieght: 200
    },
    items:["Cake","Donut"],
    extra:true
}
const {
    size: { width },
    items:[items1],
} =options;

console.log(width,items1);






  // :::::::::::::::::::::::PRACTICE QUESTIONS 1 :::::::::::::::::::



// const person = {
//     name: 'Anuj',
//     address: {city:'Noida' , country:'India'}
// }

// const getNestedInfo  = ({name,address: {city,country}}) =>{
//     return `${name} live in ${city}, ${country}`
// }
// console.log(getNestedInfo(person));




//  ::::::::::::::::::QUESTION 2 :::::::::::::::



const company = {
  name: "TechCo",
  CEO: {
    name: "Aman Rai",
    age: 45,
    address: {
      city: "New Delhi",
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

*/



//:::::::::::::::::::::QUESTION 3 :::::::::::::::::::::::::::::


/*
const person = {
    name:'Ashok',
    age:24,
    address: {
        city: 'Noida',
        country: 'India'
    }
}
 
const modifyPerson = (person) => {
     const {name,age,address: { city }} =person;
     return{
        fullName:name,
        age:age*2,
        currentCity: city,
     }
}

const modifiedPerson = modifyPerson(person);

console.log(modifiedPerson.fullName);
console.log(modifiedPerson.age);
console.log(modifiedPerson.currentCity);


console.log(person.name);
console.log(person.age);
console.log(person.address.city);

*/


/*
let order ={
  orderId: "1233",
  productName: "Laptop",
  quantity: 2
}

const {orderId,productName,quantity} =order;

console.log("Order ID:",orderId);
console.log("Product Name:",productName);
console.log("Quantity:",quantity);

*/

/*
const [a,b,c,[d,e,f]]  = [1,2,3,[4,5,6]]

console.log(d);
console.log(d[1]);

*/




const person = {
    name: 'Anuj',
    address: {city:'Noida' , country:'India'}
}

const getNestedInfo  = ({name,address: {city,country}}) =>{
    return `${name} live in ${city}, ${country}`
}
console.log(getNestedInfo(person));


