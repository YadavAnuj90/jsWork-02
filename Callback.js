//Synchronous callback

function f1(cb) {
    cb()
}
function f2() {
    console.log('Anuj');
}
f1(f2)

//Asynchoronous callback

setTimeout(  ()=>{

    console.log('Anuj');
},2000 )

//+++++++++Async And Await++++++++++++++++++++++

async function f() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Anuj');
      }, 2000);
    });
      
    const data = await promise;
    console.log('Between');
    console.log(data);
  }
  
  f();
  
