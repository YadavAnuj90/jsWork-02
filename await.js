/*
async function f() {
    const promise = new Promise(function(resolve) {

        setTimeout( () =>{
            resolve('res');
        },1000)
    })
    const data = await promise;
    console.log(data);
}
f()
*/

//::::::::::::SETINTERVAL ::::::::::::::::
// let count = 0;

// setInterval( () =>{
//     console.log(count++);
// },1000)

/*
let count = 10;

const countDown = () =>{
    console.log(count--);

    if(count ===0){
        clearInterval(timer);
    }
}
const timer = setInterval(countDown,1000);
*/

// for(let i=0;i<5 ; i++) {
//     setTimeout( () =>{
//         console.log(i);
//     },1000)
// }

// for (var i = 1; i <= 16; i = i * 2) {
//   (function (num) {
//     setTimeout(() => {
//       console.log(num);
//     }, 1000);
//   }) (i);
// }



let count = 0;

function printCount() {
    console.log("Interval Count:",count);
    count++;
}
console.log("Start");

const intervalId = setInterval(printCount,500);

setTimeout(function () {
    clearInterval(intervalId);
    console.log("Interval stopped");
    console.log("Program End :");
},2000);



