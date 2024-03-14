// function greet_collage(){
//     console.log("Hellow Gips");
// }
//     greet_collage()
//     greet_collage()
   
//function to print sum of two value

// function sum(x,y){
    
//     return x+y
// }
//   console.log(sum(4,5))

//*****************************function to find factorial********************************** */

 

function fact(num){
  if(num==0|| num==1){

    return 1

  }
  result =1
  for(i=1;i<=num;i++){
    result = result*i
  }
  return result
}



console.log (fact(5))



//  const sum_func = function sum1(a,b){
//   return a+b;
//  }
//  console.log(sum_func(4,5))





//  const dev_function = function (a,b){  //anonymous functions
//   return a*b
//  }
//  console.log(dev_function(5,6));  //calling function

//**********************************PASSEDS AS ANY ARGUMENT TO FUNCTION


// function operate(a,b,fn){
//   console.log(fn(a,b));
// }
// function sum2(a,b){
//   return a+b
// }

// operate(5,3,sum2)





// function return_greet_fn() {
//   return function () {
//     console.log("Hello");
//   };
// }

// return_greet_fn()();

// function sum1() {
//   console.log("hello");
//   return function sum2() {
//     console.log("anuj");

//     return function sum3() {
//       console.log("hiii");
//     };
//   };
// }
// sum1()()()


//SPCIAL QUESTION****************************************//

// function sum(a,b){
//   return a+b
// }
  
// console.log(sum(5,7));



/**
 this is a sum function which can add any number of argument ::   

 */

//  function sum(){
//     console.log(arguments);
//     let sum=0

//     for (i=0;i<arguments.length;i++ ) {
      
//       sum = sum+arguments[i]
      
//     }
//     return sum

//  }
//  console.log(sum(5,6));
// console.log(sum(1,2,3));\

// function addTwoNumbers(num1,num2){

//   let result = num1+num2;
//   return result;
// }
// const result= addTwoNumbers(3,5)
// console.log("Result:",result);


/**function loginUserMessage(username="sam"){

  if(username === undefined){

    console.log("Please Enter Username:");
    return;
  }
  return `${username} Just logged in`
}
console.log(loginUserMessage("Anuj"))

**/

//rest operator

// function calculateCartPrice(val1,val2,...num1){

//   return num1;
// }
// console.log(calculateCartPrice(100,200,300,400,500));


// function sum1() {
//     console.log("hello");
//     return function sum2() {
//       console.log("anuj");
  
//       return function sum3() {
//         console.log("hiii");
//       };
//     };
//   }
//   sum1()()()