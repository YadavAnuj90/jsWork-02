   const person = {
  name: "Anuj",

  age: 19,

  city: "Noida",
};
 console.log(typeof person);
 console.log(person);
 

 function emp(id,name , salary){

    this.id = id;
    this.name=name;
    this.salary = salary
 }

 const emp_obj = new emp(1,"Anuj",50000)

 console.log(emp_obj);



 const person1= {
   firstName :'anuj',
   lastName : 'kumar',
}
const person2= {
  fullName: function(city ,country) {
   console.log((`${this.firstName} ${this.lastName} lives in${city}  in ${country}`));
  }
}
person2.fullName.call(person1,'New delhi' ,'India');


const student = {

  name: "Anuj",
  age: 19,

  address :{
       city: "Noida ",
       state:"Uttar Pradesh",
       pincode:201310,
  }

}
console.log(student);
console.log(student.name);
console.log(student.age);

console.log(student.address.city);
console.log(student['address'].state);
console.log(student['address']['pincode']);




const person = {}

person.name = "Anuj";
person.hobby="Cricket";
person["country"] = "India";  //we can also use dot (.)

console.log(person);

person.name = "vishwa";
console.log(person); //add in fields in objects:

//delete in fields

delete person["name"]

console.log(person);


//in built method of objects


