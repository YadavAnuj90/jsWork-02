/*
const obj = {
    name:"anuj",
    age:19,
    greet: function(){
          console.log(this.age);
    },
    address:{
        city:"Noida",
        country:"India",
        
        greet1: function(){
            console.log(this.age);
        }

    }
}
obj.greet()
obj.address.greet1()
*/

// function Person(name){
//     this.name = name
// }
// const person_obj = new Person("Anuj")
// console.log(person_obj);
// console.log(person_obj.name);


//++CALL BIND AND APPLY METHOD ++++++++++++++//

/*
const machanic = {
    name: "Anuj",
    fixItem: function(itemName){
      
        console.log(`${this.name} ${itemName} has been fixed`)

    }
}
const person = {
    name:"Aman"
}
machanic.fixItem.call(person,"Laptop")
*/

/*
const worker = {
    name: "Rochak",
    fixItem: function(itemName){
        console.log(`${this.name} ${itemName} has been fixed`);
    }
}
const man = {
    name:"Anuj"
}
worker.fixItem("TV")
*/




//APPLY METHOD ++++++++++++++//
/*
const worker = {
    name: "Rochak",
    fixItem: function(itemName){
        console.log(`${this.name} ${itemName} has been fixed`);
    }
}
const man = {
    name:"Anuj"
}
worker.fixItem.apply(man,["Mobile" ,"xyz"])
*/

/*
console.log(Object.getOwnPropertyNames(Math));
console.log(Math.PI);
console.log(Math.abs(-6));
*/

// +++++++++++++++String++++++++++++++++++++

first_name = 'Anuj'
last_name = 'Kumar'

full_Name = first_name.concat(last_name)

//console.log(full_Name);

//Substring +++++++++++++
  
str = "I am anuj kumar yadav and i am a student:"

// console.log(str.includes("am"));
// console.log(str.includes("Arun"));
// console.log(str.indexOf("anuj"));


//replece method 

// str = "i am anuj kumar"

// console.log(str.replace("anuj","Yadav"));



//slice in string ++++++++++++++++++++


// str = "Anuj kumar"
// console.log(str.slice(4,7));
// console.log(str.slice(-1));


//conversion  ++++++++++++string to array
//  arr =str.split("")
//  console.log(arr);

//  arr = [2,5,4,6,7,8,9]
//  arr.sort((a,b) => b-a)
//  console.log(arr);


