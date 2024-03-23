/**const add1 = (a,b) =>{
    console.log("Adition is :");
    return a+b;
 }
 console.log(add1(5,6));

 const hello = () =>{
   console.log("Hellow");
 }
 hello();
 **/

//function add three numbers

/**const sum_three = (a,b,c) =>{

    console.log("Sum inside the function:");
    return a+b*c;
 }
 console.log(sum_three(4,5,6));


 greet = (name) =>{
    console.log("hello "+name);
 }
 greet(`anuj`)
 **/

 function findEvenOrOdd(num){

    if(num%2 ==0){

        return "Even";
    }else{
        return "Odd";
    }

 }
 console.log(findEvenOrOdd(23));
 console.log(findEvenOrOdd(22));

convert to arrow function

 myfunc = (num)=>{

    if(num%2==0){
        return "Even"
    }else{
        return "odd"
    }
 }
  console.log(myfunc(23));

convert in single line

  fun =(a) => (a%2==0)?"even":"odd"

  console.log(fun(22));

const user = {
  username: "Anuj",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};
 user.welcomeMessage()
user.username = "Sam"
console.log(this);


const addSum = (a,b) =>{
      return a+b
}
console.log(addSum(5,4));



 emplicit function 
const addTwo = (num1, num2) => (num1*num2)

console.log(addTwo(2,3));

function connect() 
{
  console.log(`DB CONNECTED`);
}

connect()

