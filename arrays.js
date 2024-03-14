  // arr = [1,2,3,4,5,6]

  // for (i =0; i<arr.length;i++) {
  //   console.log(arr[i]);
    
  // }

// let sum_arr = (arr)=>{
//     sum =0;
//     for(i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
//   }

//   console.log(sum_arr([1,2,3,4,5]));

  // arr =[1,2,3,4,5]

  // for(num of arr){
  //   console.log(num);
  // }

  /** 
  arr = [1,2,3,4,5]

  console.log(arr);
  console.log(arr.pop());
  console.log(arr);
  arr.push(8);
  console.log(arr);
*/

/**arr =[2,3,4,5]

x=arr.shift()
console.log(arr);
*/

//contactination

/*arr1=[1,2,3]
arr2=[4,5,6]

arr=arr1.concat(arr2)

console.log(arr);
console.log(arr.length);

*/

//join method

// let fruits = ["apple","Banana","Mango"]

// let result = fruits.join()

// console.log(result);
// console.log(typeof result);


/*
sliced mean print sub of given input 
*/

// let arr=[1,2,3,4,5,6,7,8]

// sliced_arr = arr.slice(3,7);

// console.log(arr);
// console.log(sliced_arr);

/**
 * SPLICE IN ARRARY 
 */

// //  arr = [1,2,3,4,5,6,7,8]

// //  arr.splice(4,2,54)

// // console.log(arr);

// // /**
// //  * REVERSE IN ARRAY
// //  */
// //   //  arr = [1,2,3,4]

// //   //  arr.reverse()
// //   //  console.log(arr);

// //   /**
// //    * SHORTING
// //    */

// //   // arr = [3,5,1,6,9,7]

// //   // arr.sort()

// //   // console.log(arr);

//   //sort in reverse order
//  /* arr = [3,5,1,6,9,7]

  // arr.sort((a,b) => b-a)

  // console.log(arr);
  

  // flatening in array

  // arr=[1,2,3,[4,5,6]]
  //  flat_array = arr.flat()

  //  console.log(flat_array);
  //  console.log(arr);

  //  arr2 = [1,2,3,[5,6,4,[9,10,[12,11]]]]

  //  console.log(arr2.flat());

  //  console.log(arr2.flat(3));

  //  console.log(arr2.flat(2));

  //  console.log(arr2.flat(3));

  
  


//arr  = [1,2,3,4]

// arr.push(7)
// arr.pop()
// arr.unshift(2)
// arr.shift()
// console.log(arr.includes(3));
// console.log(arr);

/**
 * slice and splice 
 */
// console.log("A",arr);

// const mynum = arr.slice(1,3)
// console.log("B",mynum);

// arr1 = [1,2,3,4,5]

// arr2= [6,7,8,9,7]

// const new_array = [...arr1,...arr2]

// console.log(new_array);


// console.log(Array.isArray("Anuj"));

// console.log(Array.from("Anuj"));



let sum_arr = (arr) => {

  sum =0 ;
  for(i=0;i<arr.length;i++){
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum_arr([1,2,3,4,5]));