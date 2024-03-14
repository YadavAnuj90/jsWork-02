// const promise = new Promise(function(resolve,reject){
//     //API call
//     if(Math.random() >0.4){
//         resolve({City:'Delhi' , Temperature:'10'}); //data
//     }else{
//         reject ({code:407,message:'Data Not Found'}); //error
//     }
// })
// promise.then(response => console.log(response));
// promise.catch(error => console.log(error));

//+++++++++++Promise all() +++++++++++//
// const promise1 = new Promise(function(resolve){
//     resolve('first');
// })

// const promise2 = new Promise(function(resolve,reject){
//     resolve('second ');
// })

// const promise3 = new Promise(function(resolve){
//     resolve('third');
// })
// const allPromises = [promise1,promise2,promise3];
// Promise.all(allPromises)
// .then(response=> console.log(Response))
// .catch(error =>console.log(error))
// .finally( () =>{
//     console.log('stop loader');
// });

//++++++++++++++//

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.resolve(8);

// const promise = new Promise(function(resolve){
//     let num1,num2;
    
//     promise1.then(res => {
//         num1 = res;
//         if(num1 && num2) {
//             resolve(num1+num2)
//         }
//     })
   
//     promise2.then(res => {
//         num2 = res;
//         if(num1 && num2) {
//             resolve(num1+num2)
//         }
//     })
// })

// const promise1 = Promise.resolve(5);
// const promise2 = Promise.resolve(10);

// const promise = new Promise(function(resolve){

//     Promise.all([promise1,promise2]).then(res =>{
//         resolve(res.reduce((sum,num) => sum+num))
//     })
// })
   
// promise.then(res =>console.log(res))

/*
const promiseFrom = new Promise(((resolve,reject)=>{

    let parentDecision = false
    if(parentDecision){
        resolve('Agree:')

    }else{
        reject('Disagree:')
    }

}))

promiseFrom.then((message) =>{
    console.log("Message from Parent" + message);
    console.log("Stay Happy");

}).catch((msg) =>{
    console.log("Message from Parent" + msg);
    console.log("Come Back:");
}).finally(()=> {console.log("Finally I am Clear:")})
*/


/*
 const dost1Promise = new Promise((resolve,reject)=>{
   setTimeout( ()=> {
    if(Math.random()>0.6){
        resolve("Dost 1 is coming")
    }else{
        reject("not 1 coming")
    }
   },1000)
 })

 const dost2Promise = new Promise((resolve,reject)=>{
    setTimeout( ()=> {
     if(Math.random()>0.6){
         resolve("Dost 2 is coming")
     }else{
         reject("not 2 coming")
     }
    },2000)
  })

  const dost3Promise = new Promise((resolve,reject)=>{
    setTimeout( ()=> {
     if(Math.random()>0.5){
         resolve("Dost 3 is coming")
     }else{
         reject("not 3 coming")
     }
    },3000)
  })


  const friendPromises = [dost1Promise,dost2Promise,dost3Promise]

  Promise.all(friendPromises).then(result => {
    console.log(result);
    console.log("I will go");
  }).catch(mess =>{
    console.log(mess);
    console.log("Since all friend didn't come ,i never go");
  })
  */

  /*

  const emp1Promise = new Promise((resolve,reject)=>{
    setTimeout( ()=> {
     if(Math.random()>0.6){
         resolve("Emp 1 is coming")
     }else{
         reject(" Emp 1 not coming")
     }
    },1000)
  })
 
  const emp2Promise = new Promise((resolve,reject)=>{
     setTimeout( ()=> {
      if(Math.random()>0.6){
          resolve("Emp 2 is coming")
      }else{
          reject("Emp  2 not coming")
      }
     },2000)
   })
 
   const emp3Promise = new Promise((resolve,reject)=>{
     setTimeout( ()=> {
      if(Math.random()>0.5){
          resolve("Emp 3 is coming")
      }else{
          reject("emp 3 not coming")
      }
     },3000)
   })

   const allEmpPromise = [emp1Promise,emp2Promise,emp3Promise]

   Promise.any(allEmpPromise).then((message) =>{
    
    console.log(message);
    console.log("Work will continue");

   }).catch((msg) => {
    console.log(msg);
    console.log("Clossed Today");
   })
   */



  /* 
   //Async and await

   async function printMessage() {

    return "Hello World"
   }

   console.log(printMessage());

   printMessage().then( msg => console.log(msg))
   **/

   /*
   async function printHelloAfterWait() {

     let result = await new Promise( (resolve,reject) =>{
        setTimeout( () =>{
            resolve("Hello Students");
         },3000)
        
     })
     console.log(result)
         console.log("This line should be last print")
   }
   
   printHelloAfterWait();
   */

   /*
   function outerFn(){
    let outerVar = "i am from outer"

 function innerFn(){
    console.log(outerVar);
 }
   return innerFn

   }
  const fn = outerFn()
  fn()
  */

  function custemerCounter() {
    
    let count =0
    return function(){
        count++
        console.log("New custumer count is :",count);
    }
  }
  let counter = custemerCounter()
  counter()
  counter()
  counter()