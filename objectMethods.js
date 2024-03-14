/**  const emp = {
  name: "Anuj",
  age: 19,
  salary: 20000,

  address: {
    city: "Noida",
    country: "India",
  },
};

//list of all keys in object
console.log(Object.keys(emp));

//list of all value of objects

console.log(Object.values(emp));

// list of all the key value pairs

console.log(Object.entries(emp));

//assign 
 
emp_new = Object.assign({},emp,{role : "Developer"})

console.log(emp_new);
*/

//frezed info of the objects

/**const person = {
  name: "Khushi",
  age: 19,
};
console.log(person);
Object.freeze(person); //object can't be change 

person.name = "Anuj";

console.log(person);
console.log(Object.hasOwn(person,"name"));
console.log(Object.hasOwn(person,"village"));
//console.log(Object.getOwnPropertyDescriptor(person));

*/


//iterete over the keys
const person = {
    name : "pratyush",
    age:19,
    salary :500000,
}

Object.defineProperties(person,{
      
    salary : {
        value: 500000,
        enumerable : false
    }
})

console.log(person);

for(k in person){
    console.log(k)
}
